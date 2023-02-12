const editController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { findCubeById } = require('../services/searchCube');
const { updateCubeInfo } = require('../services/showCubeDetails');
const { mapOpions } = require('../utils/optionsUtil');


editController.get('/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    try {
        const cube = await findCubeById(cubeId);
        if (!cube) {
            throw new Error('No such cube!');
        }
        const optionsArr = mapOpions(cube.difficultyLevel);
        res.render('edit', {
            cube,
            optionsArr
        });

    } catch (err) {
        console.log(err);
        const errors = [{ msg: err.message }];
        res.render('edit', {
            errors
        });
    }
});

editController.post('/:cubeId',
    body('name')
        .trim()
        .isAlphanumeric().withMessage('Cube name consist of english letters and numbers!')
        .isLength({ min: 5 }).withMessage('Cube name must be atleast 5 characters long!').bail()
        .custom(name => {
            return findCubeByName(name).then(cube => {
                if (cube[0]) {
                    return Promise.reject(`${cube[0].name} already exists!`);
                }
            });
        }),
    body('description')
        .trim()
        .isLength({ min: 20 }).withMessage('Cube description must be atleast 20 charactes long!'),
    body('imgUrl')
        .isURL().withMessage('Img URL must start wiht http:// or https://'),
    async (req, res) => {
        const cubeId = req.params.cubeId;
        const { name, description, imgUrl, difficultyLevel } = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }

            await updateCubeInfo(cubeId, name, description, imgUrl, difficultyLevel);
            res.redirect(`/details/${cubeId}`);
        } catch (err) {
            const errors = Array.from(err).map((obj) => {
                return { msg: obj.msg };
            });

            const optionsArr = mapOpions(Number(difficultyLevel));
            const cube = {
                name,
                description,
                imgUrl,
            }
            res.render('edit', {
                errors,
                cube,
                optionsArr
            });
        }
    });


module.exports = editController;
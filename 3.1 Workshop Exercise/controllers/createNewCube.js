const { createNewCube } = require('../services/createCube');
const { findByUserId } = require('../services/userService');
const { findCubeByName } = require('../services/searchCube');
const { body, validationResult } = require('express-validator');
const { mapOpions } = require('../utils/optionsUtil');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create');
});

router.post('/',
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
        /*.isAlphanumeric().withMessage('Description must be with english letters and numbers')*/
        .isLength({ min: 20 }).withMessage('Cube description must be atleast 20 charactes long!'),
    body('imgUrl')
        .isURL().withMessage('Img URL must start wiht http:// or https://'),
    async (req, res) => {
        let { name, description, imgUrl, difficultyLevel } = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }

            await createNewCube({ name, description, imgUrl, difficultyLevel });

            const user = await findByUserId(req.userId);
            const [cube] = await findCubeByName(name);
            user.itemsList.push(cube._id);

            await user.save();
            res.redirect('/');
        } catch (err) {
            const errors = Array.from(err).map((obj) => {
                return { msg: obj.msg };
            });

            const optionsArr = mapOpions(Number(difficultyLevel));
            res.render('create', {
                name,
                description,
                imgUrl,
                optionsArr, 
                errors
            });
        }
    });

module.exports = router;
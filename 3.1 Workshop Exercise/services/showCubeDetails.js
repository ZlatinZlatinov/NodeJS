const Cube = require("../models/Cube");

async function showCubeDetails(cubeId) {
    try {
        const cube = await Cube.findById(cubeId).lean();

        let accessories = await Cube.findById(cubeId)
            .populate('accessories')
            .then((cube) => { return cube.accessories });
        accessories = accessories.map((a) => {
            let { name, description, imgUrl } = a
            return {
                name,
                description,
                imgUrl
            }
        });

        return [cube, accessories];
    } catch (err) {
        return [false, false];
    }
}

module.exports = {
    showCubeDetails
}
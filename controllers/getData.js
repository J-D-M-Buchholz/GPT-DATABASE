import model from '../model/model.js';

const getData = async (req, res) => {
    try {
        const allObjects = await model.find({});
        res.json(allObjects);
    } catch (error) {
        console.log(error);
    }
};
    
export default getData;
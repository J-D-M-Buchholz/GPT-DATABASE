import model from '../model/model.js';

const deleteData = async (req, res) => {
  try {
    await model.deleteMany({});
    res.json({ message: 'Alle Daten wurden gelöscht' });
  } catch (error) {
    console.log(error);
  }
};

export default deleteData;
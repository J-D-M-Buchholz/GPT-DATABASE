const checkInput = (req, res, next) => {
    if (req.body.inputText === '') {
      res.json({ responseText: 'Sie haben keine Frage gestellt!!!' });
    } else {
      next();
    }
};

export default checkInput;
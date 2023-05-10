import OpenAI from 'openai-api';
import model from '../model/model.js';

const openai = new OpenAI('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');

const openaiController = async (req, res) => {
  const { inputText } = req.body;
  const response = await openai.complete({
    engine: 'text-davinci-003',
    prompt: inputText,
    maxTokens: 150,
    temperature: 0,
  });

  const answer = response.data.choices[0].text.trim();

  res.json({ responseText: answer });

  try {
    const newModel = new model({Test: { Frage: inputText, Antwort: answer }})
    await newModel.save();
  } catch (error) {
    console.log(error);
  }
};

export default openaiController;
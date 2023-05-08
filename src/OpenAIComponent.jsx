import React, { useState } from 'react';

const OpenAIComponent = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [responseText2, setResponseText2] = useState('');
  const [responseText3, setResponseText3] = useState('');

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = async () => {
    const response = await fetch('https://serverless-gpt-db.vercel.app/api/ser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputText }),
    });
    const data = await response.json();
    setResponseText(data.responseText);
  };

  const handleButtonClick2 = async () => {
    const response = await fetch('https://serverless-gpt-db.vercel.app/api/ser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    setResponseText2(
      data.map((item) => (
        <p>
          Frage: {item.Test.Frage} <br /> Antwort: {item.Test.Antwort}
        </p>
      ))
    );
  };

  const handleButtonClick3 = async () => {
    const response = await fetch('https://serverless-gpt-db.vercel.app/api/ser', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setResponseText3(data.message);
  };

  return (
    <div>
      <p>{responseText}</p>
      <input type="text" onChange={handleInputTextChange} />
      <button onClick={handleButtonClick}>Submit</button>
      <button onClick={handleButtonClick2}>Get Data</button>
      <button onClick={handleButtonClick3}>Delete Data</button>
      {responseText2}
      {responseText3}
    </div>
  );
};

export default OpenAIComponent;
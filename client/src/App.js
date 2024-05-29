import styles from './App.module.css';
import { getResponseContent } from "./utils/openAICall";
import { useState } from 'react';

function App() {

  const [programSuggestions, setProgramSuggestions] = useState("");

  const requestObj = {
    messages: [
      {
        role: "system",
        content:
          `You are a friendly assistant, that gives responses to a classical musician seeking suggestions for their recital program in JSON format, just post content, no title. The key should be 'content'. Don't include any extra text outside of the names of the pieces themselves, just list the pieces, separating each by a semicolon. Don't say you will create the post, just give me the content. Give the names of suggested pieces to complete their recital program.`,
      },
      {
        role: "user",
        content: "",
      },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0.2,
  };

  let responseObj = {};

  const handleGenerateClick = () => {
    getResponseContent(requestObj).then(r => {
      responseObj = JSON.parse(r.content);
      setProgramSuggestions(responseObj.content)
    });

  }

  return (
    <>
      <h1>Program Generator</h1>
      <button onClick={handleGenerateClick}>Generate Program</button>
      <p>{programSuggestions}</p>
    </>
  );
}

export default App;

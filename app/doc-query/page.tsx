'use client'

// components/DocQueryPage.tsx
import { useState } from 'react';
import { getResult } from '@/lib/services/doc-query-service';

const DocQueryPage: React.FC = () => {
  const [inputType, setInputType] = useState<string>('url');
  const [inputValue, setInputValue] = useState<string>('');
  const [inputFile, setInputFile] = useState<File | null>(null);
  const [inputQuestions, setInputQuestions] = useState<string[]>([]);
  const [result, setResult] = useState<string>('');

  // Handle input change for text and URL input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInputType('file');
      setInputFile(file);
    }
  };

  // Handle question input change
  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputQuestions([e.target.value]);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting:', inputType, inputValue);
    try {
      for (const question of inputQuestions) {
        let response;
        if (inputType === 'file' && inputFile) {
          response = await getResult({ file: inputFile, question });
        } else if (inputType === 'url' || inputType === 'text') {
          response = await getResult({ [inputType]: inputValue, question });
        }
        console.log('Result:', response);
        setResult(response);
      }
    } catch (error) {
      console.error('Error fetching result:', error);
      // Handle error by displaying an error message to the user
    }
  };

  return (
    <div>
      <h1>Document Chatbot</h1>
      <form onSubmit={handleSubmit}>
        {/* Dropdown to select input type */}
        <select title="option" value={inputType} onChange={(e) => setInputType(e.target.value)}>
          <option value="url">URL</option>
          <option value="file">File</option>
        </select>
        {/* Input field for URL */}
        {inputType === 'url' && (
          <input title="url" type="text" value={inputValue} onChange={handleInputChange} />
        )}
        {/* Input field for file */}
        {inputType === 'file' && (
          <input title="file" type="file" accept=".txt,.pdf" onChange={handleFileChange} />
        )}
        {/* Input field for question */}
        <input title="question" type="text" value={inputQuestions[0] || ''} onChange={handleQuestionChange} />
        {/* Button to submit form */}
        <button type="submit">Ask</button>
      </form>
    </div>
  );
};

export default DocQueryPage;

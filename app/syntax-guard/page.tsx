'use client'

// components/SyntaxGuardPage.tsx
import { useState } from 'react';
import { getResult } from '@/lib/services/syntax-guard-service';

const SyntaxGuardPage: React.FC = () => {
  const [inputType, setInputType] = useState<string>('file');
  const [inputFile, setInputFile] = useState<File | null>(null);
  const [result, setResult] = useState<string>('');

  // Function untuk menangani perubahan pada input file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInputType('file');
      setInputFile(file);
    }
  };

  // Function untuk menangani submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting:', inputType, inputFile);
    try {
      let response;
      if (inputType === 'file' && inputFile) {
        response = await getResult({ file: inputFile });
      } 
      console.log('Validation:', response);
      setResult(response);
    } catch (error) {
      console.error('Error fetching validation:', error);
      // Handle error by displaying an error message to the user
    }
  };

  return (
    <div>
      <h1>Syntax Validation</h1>
      <form onSubmit={handleSubmit}>
        {/* Input untuk memilih file */}
        <input title='file' type="file" accept=".txt,.pdf" onChange={handleFileChange} />
        {/* Tombol untuk men-submit form */}
        <button type="submit">Validate</button>
      </form>
    </div>
  );
};

export default SyntaxGuardPage;

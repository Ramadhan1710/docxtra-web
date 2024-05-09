'use client'

// components/SimilatronPage.tsx
import { useState } from 'react';
import { getResult } from '@/lib/services/similatron-service';

const SimilatronPage: React.FC = () => {
  const [inputType, setInputType] = useState<string>('file'); // Mengubah default inputType menjadi 'file'
  const [inputFiles, setInputFiles] = useState<File[]>([]);
  const [results, setResults] = useState<any[]>([]);

  // Function untuk menangani perubahan pada input file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setInputType('file');
      setInputFiles(Array.from(files)); // Mengubah objek files menjadi array
    }
  };

  // Function untuk menangani submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting:', inputType, inputFiles);
    try {
      let response;
      if (inputType === 'file' && inputFiles.length > 0) {
        response = await getResult({ files: inputFiles });
      }
      console.log('Result:', response);
      setResults(response);
    } catch (error) {
      console.error('Error fetching result:', error);
      // Handle error by displaying an error message to the user
    }
  };

  return (
    <div>
      <h1>Document Similarity</h1>
      <form onSubmit={handleSubmit}>
        {/* Input untuk memilih file */}
        <input title='file' type="file" multiple accept=".txt,.pdf" onChange={handleFileChange} />
        {/* Tombol untuk men-submit form */}
        <button type="submit">Compare</button>
      </form>      
    </div>
  );
};

export default SimilatronPage;

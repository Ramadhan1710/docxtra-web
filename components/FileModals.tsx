import { on } from 'events';
import React, { useRef, useState } from 'react';

interface FileModalProps {
  onFileSubmit: (file: File) => void;
  onClose: () => void;
  onLinkInputModeToggle: () => void;
  onFileInputModeToggle: () => void;
  onSidebarToggle: () => void;
}

const FileModal: React.FC<FileModalProps> = ({ onFileSubmit, onClose, onLinkInputModeToggle, onFileInputModeToggle, onSidebarToggle }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedFileExtension, setSelectedFileExtension] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFileName(file.name);
      console.log('Selected file:', file);
      onFileSubmit(file);
      onSidebarToggle();
    }
    onClose();
  };

  // Fungsi untuk mengubah ekstensi file terpilih sesuai tombol yang diklik
  const handleExtensionButtonClick = (extension: string) => {
    setSelectedFileExtension(extension);
    if (fileInputRef.current) {
      fileInputRef.current.accept = extension; // Mengubah ekstensi file yang diterima oleh input file
      fileInputRef.current.click(); // Ketika tombol diklik, buka dialog unggah file
    }
  };

  return (
    <div className="relative">
      <div className="absolute mt-2 w-52 shadow-md rounded-xl flex flex-col">
        <button
          className={`flex flex-row gap-4 px-2 py-2 font-lato font-medium rounded-t-xl text-black hover:text-inputLink hover:bg-summarybutton border-b-2 border-b-summarybutton bg-white`}
          onClick={() => {
            onLinkInputModeToggle();
            onClose();
          }}
        >
          <img src="/img/file/link-icon.png" alt="" className='w-6 h-6' />
          Link
        </button>
        <button
          className={`flex flex-row gap-4 px-2 py-2 font-lato text-black font-medium hover:text-inputLink hover:bg-summarybutton bg-white`}
          onClick={() => handleExtensionButtonClick('.pdf')} // Mengatur ekstensi file menjadi PDF saat tombol diklik
        >
          <img src="/img/file/pdf-icon.png" alt="" className='w-6 h-6' />
          PDF
        </button>
        <button
          className={`flex flex-row gap-4 px-2 py-2 font-lato text-black font-medium hover:text-inputLink hover:bg-summarybutton bg-white`}
          onClick={() => handleExtensionButtonClick('.docx')} // Mengatur ekstensi file menjadi DOCX saat tombol diklik
        >
          <img src="/img/file/word-icon.png" alt="" className='w-6 h-6' />
          Word
        </button>
        <button
          className={`flex flex-row gap-4 px-2 py-2 font-lato text-black rounded-b-xl font-medium hover:text-inputLink hover:bg-summarybutton bg-white`}
          onClick={() => handleExtensionButtonClick('.txt')} // Mengatur ekstensi file menjadi TXT saat tombol diklik
        >
          <img src="/img/file/txt-icon.png" alt="" className='w-6 h-6' />
          TXT
        </button>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        accept={selectedFileExtension}
        onChange={handleInputChange}
        style={{ display: 'none' }} // Sembunyikan input file secara default
      />
    </div>
  );
};

export default FileModal;

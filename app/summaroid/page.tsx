'use client'

import React, { useState } from 'react';
import { getResult } from '@/lib/services/summaroid-service';
import SummaryResult from '@/components/SummaroidResult';
import FileModal from '@/components/FileModals';
import LoadingPopUp from '@/components/LoadingPopUp';
import ErrorPopUp from '@/components/ErrorPopUp';
import { Notifications } from '@mantine/notifications';
import { notifications } from '@mantine/notifications';


const SummaroidPage: React.FC = () => {
  const [inputType, setInputType] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [inputFile, setInputFile] = useState<File | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [summary, setSummary] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLinkInputMode, setIsLinkInputMode] = useState(false);
  const [isFileInputMode, setIsFileInputMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [inputTypeSelected, setInputTypeSelected] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (sidebarOpen) {
      setInputType('');
      setInputValue('');
      setInputTypeSelected('');
      setInputFile(null);
      setSelectedFile(null);
      setSummary('');
    }
  }

  const handleLinkInputModeToggle = () => {
    setIsLinkInputMode(!isLinkInputMode);
  };

  const handleFileInputModeToggle = () => {
    setIsFileInputMode(!isFileInputMode);
  };

  // Fungsi untuk menangani perubahan input teks atau URL
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    console.log('Input value:', e.target.value);
    console.log('Input type:', inputType);
  };

  // Fungsi untuk menangani perubahan input berupa file
  const handleFileChange = (file: File) => {
    setInputType('file');
    setInputTypeSelected('file');
    setInputFile(file);
    setSelectedFile(file); // Simpan file yang dipilih ke dalam state
  };

  // Fungsi untuk menangani pengiriman permintaan
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('Submitting:', inputType, inputValue);
    try {
      if (inputType === 'url') {
        if (!inputValue.startsWith('http://') && !inputValue) {
          setError('Invalid URL format');
          setIsError(true);
          return;
        }
      }
      if (inputType === 'text' && inputValue === '') {
        notifications.show({
          color: "red",
          title: 'Error',
          message: 'Text input cannot be empty' 
        });
        return;
      }
      if (inputType === 'text' && inputValue.length < 100){
        notifications.show({
          color: 'red',
          title: 'Error',
          message: 'Text input must be at least 100 characters long'
        });
        return;
      }
      let response;
      if (inputType === 'file' && inputFile) {
        setIsLoading(true);
        response = await getResult({ [inputType]: inputFile });
      } else {
        setIsLoading(true);
        response = await getResult({ [inputType]: inputValue });
      }
      console.log('Summary:', response);
      setSummary(response);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching summary:', error);
      setIsLoading(true);
      setIsLoading(false);
      // Tangani kesalahan dengan menampilkan pesan kesalahan kepada pengguna
    }
  };

  const listFiturImage = [
    '/img/fitur-summaroid/save.png',
    '/img/fitur-summaroid/volume.png',
    '/img/fitur-summaroid/share.png',
    '/img/fitur-summaroid/copy.png',
    '/img/fitur-summaroid/view.png',
  ]

  const listFitur = listFiturImage.map((fitur, index) => (
    <button className='content-center' key={index}><img src={fitur} alt="" className='w-6 h-6' /></button>
  ));

  return (
    <div className="bg-[url('/img/summaroid-bg.png')] h-dvh  md:h-screen md:bg-cover bg-contain text-white">
      {sidebarOpen ? (
        <>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row">
              {inputTypeSelected === 'text' ? (
                <div className="top-0 left-0 h-1/2 md:h-screen md:w-6/12 bg-sidebar shadow-lg">
                  <div className="px-2 md:px-12 pt-28 flex flex-col h-full gap-4">
                    <div className='px-2 md:px-0 w-full flex flex-row justify-between '>
                      <span className="text-xl md:text-3xl font-semibold font-nunito">Summaroid</span>
                      <button>
                        <img src="/img/cancel.png" alt="" className='w-4 md:w-5 mr-2 md:mr-0' onClick={handleSidebar} />
                      </button>
                    </div>
                    <div className='flex flex-col justify-between h-full pb-4 items-end'>
                      <div className='items-center w-full bg-containerInputLink p-4 rounded-xl' >
                        <textarea
                          name=""
                          id=""
                          value={inputValue}
                          placeholder='Input your text here...'
                          className='bg-inputLink p-4 rounded-xl outline-none text-md font-lato h-72 md:h-[calc(70vh-7rem)] w-full '
                          onChange={handleInputChange}
                        >
                          {/* {inputValue} */}
                        </textarea>
                        {/* <button>
                        <img src="/img/cancel.png" alt="" className='w-4 md:w-5 mr-2 md:mr-0' onClick={handleSidebar} />
                      </button> */}
                      </div>
                      <button type="submit" className='bg-inputLink/40 h-12 mx-2 md:mx-0 mt-4 md:mt-0 md:h-16 rounded-2xl text-xl md:text-2xl w-4/12 md:w-6/12 font-nunito font-semibold'>Summary</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="top-0 left-0 h-1/2 md:h-screen md:w-4/12 bg-sidebar shadow-lg">
                  <div className="px-2 md:px-12 pt-28 flex flex-col h-full gap-4">
                    <span className="text-xl px-2 md:px-0 md:text-3xl font-semibold font-nunito">Summaroid</span>
                    {inputTypeSelected === 'file' && (
                      <div className='flex flex-col justify-between h-full pb-4 items-end md:items-center'>
                        <div className='flex flex-row items-center justify-between gap-4' >
                          <div className='flex flex-row justify-between items-center gap-2'>
                            <img src="/img/file/pdf-icon.png" alt="" className='w-14' />
                            <p className='text-ellipsis text-xs md:text-md'>{selectedFile?.name}</p>
                          </div>
                          <button>
                            <img src="/img/cancel.png" alt="" className='w-4 md:w-5 mr-2 md:mr-0' onClick={handleSidebar} />
                          </button>
                        </div>
                        <button type="submit" className='bg-inputLink/40 h-12 mx-2 md:mx-0 mt-4 md:mt-0 md:h-16 rounded-2xl text-xl md:text-2xl w-4/12 md:w-10/12 font-nunito font-semibold'>Summary</button>
                      </div>
                    )}
                    {inputTypeSelected === 'url' && (
                      <div className='flex flex-col justify-between h-full pb-4 items-end md:items-center'>
                        <div className='flex flex-row items-center justify-between gap-4' >
                          <div className='flex flex-row justify-between items-center gap-2'>
                            <img src="/img/file/link-icon.png" alt="" className='w-14' />
                            <p className='text-ellipsis overflow-hidden line-clamp-1 text-xs md:text-md'>{inputValue}</p>
                          </div>
                          <button>
                            <img src="/img/cancel.png" alt="" className='w-4 md:w-5 mr-2 md:mr-0' onClick={handleSidebar} />
                          </button>
                        </div>
                        <button type="submit" className='bg-inputLink/40 h-12 mx-2 md:mx-0 mt-4 md:mt-0 md:h-16 rounded-2xl text-xl md:text-2xl w-4/12 md:w-10/12 font-nunito font-semibold'>Summary</button>
                      </div>
                    )}
                    {inputTypeSelected === 'text' && (
                      <div className='flex flex-col justify-between h-full pb-4 items-end md:items-end w-full'>
                        <div className='flex flex-row items-center justify-between gap-4 w-full bg-containerInputLink p-4 rounded-xl' >
                          <textarea
                            name=""
                            id=""
                            placeholder='Input your text here...'
                            className='bg-inputLink p-4 rounded-xl outline-none text-md font-lato h-72 md:h-[calc(70vh-7rem)] w-4/12 md:w-full'
                          >
                            {inputValue}
                          </textarea>
                          {/* <button>
                        <img src="/img/cancel.png" alt="" className='w-4 md:w-5 mr-2 md:mr-0' onClick={handleSidebar} />
                      </button> */}
                        </div>
                        <button type="submit" className='bg-inputLink/40 h-12 mx-2 md:mx-0 mt-4 md:mt-0 md:h-16 rounded-2xl text-xl md:text-2xl w-4/12 md:w-6/12 font-nunito font-semibold'>Summary</button>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {summary && inputType === 'text' && (
                <div className="w-full md:w-6/12 md:h-screen h-1/2 px-2 md:px-10 pt-4 md:pt-28">
                  <div className='flex flex-col gap-2 md:gap-4'>
                    <span className='text-white px-2 md:px-0 text-xl md:text-3xl font-nunito font-semibold'>Result</span>
                    <div className='bg-containerInputLink p-4 rounded-xl mx-2 md:mx-0'>
                      <div className=' bg-summarybutton overflow-y-scroll h-72 md:h-[calc(80vh-7rem)] p-2 md:p-6 rounded-xl'>
                        <div>
                          <SummaryResult summary={summary} />
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row gap-3 mx-2 mt-1 md:mx-0 justify-end'>
                      {listFitur}
                    </div>
                  </div>
                </div>
              )}
              {summary && inputType !== 'text' && (
                <div className="w-full md:w-8/12 md:h-screen h-1/2 px-2 md:px-10 pt-4 md:pt-28">
                  <div className='flex flex-col gap-2 md:gap-4'>
                    <span className='text-white px-2 md:px-0 text-xl md:text-3xl font-nunito font-semibold'>Result</span>
                    <div className='bg-containerInputLink p-4 rounded-xl mx-2 md:mx-0'>
                      <div className=' bg-summarybutton overflow-y-scroll h-72 md:h-[calc(80vh-7rem)] p-2 md:p-6 rounded-xl'>
                        <div>
                          <SummaryResult summary={summary} />
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row gap-3 mx-2 mt-1 md:mx-0 justify-end'>
                      {listFitur}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
          <LoadingPopUp isLoading={isLoading} />
          {isError && (
            <Notifications autoClose={4000} />
          )}
          {/* <ErrorPopUp isError={error !== null} message={error || ''} onClose={() => setError(null)} /> */}
        </>

      ) : (
        <div className="flex items-center flex-col w-full h-3/5 gap-4 pt-52">
          <div className='flex flex-row gap-2 md:gap-4 items-center'>
            <h1 className='text-center text-2xl sm:text-7xl font-bold text-inputLink font-nunito'>Summaroid</h1>
            <button><img src="/img/info.png" alt="" className='w-6 md:w-8' /></button>
          </div >
          <span className='text-center text-md sm:text-2xl mx-2 md:mx-0 text-inputLink'>Summarize the contents of the document according to your needs</span>
          {
            isLinkInputMode ? (
              <div className="flex justify-center items-center flex-col w-full gap-4">
                <div className='relative mt-6 items-center flex flex-col'>
                  <button onClick={() => {
                    setIsLinkInputMode(false)
                    setInputValue('')
                  }}>
                    <img src="/img/fitur-summaroid/close.png" alt="" className='absolute -top-6 -right-6 w-6' />
                  </button>
                  <div className='p-4 rounded-xl md:rounded-3xl  bg-containerInputLink w-11/12 md:w-auto md:mx-0'>
                    <div className='flex flex-row items-center h-auto md:h-inputLink rounded-md md:rounded-3xl w-auto md:w-inputLink bg-inputLink opacity-2'>
                      <input
                        type="text"
                        placeholder="input your url here..."
                        value={inputValue}
                        onChange={handleInputChange}
                        className="px-4 py-2 text-inputLink text-sm sm:text-xl w-full bg-transparent font-medium outline-none "
                      />
                      <button onClick={() => {
                        handleSidebar()
                        setInputTypeSelected('url')
                        setInputType('url')
                        setIsLinkInputMode(false)
                      }}>
                        {inputValue.length > 0 && (
                          <img src="/img/icon-plus.png" alt="" className='w-6 sm:w-10 h-6 sm:h-10 mx-6 sm:mx-6' />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center flex-col w-full gap-4">
                <div className="flex gap-4 flex-row">
                  <div className='relative'>
                    <button onClick={handleModal} className='w-36 sm:w-52 p-4 bg-summarybutton text-xl hover:bg-slate-400 rounded-xl font-nunito font-semibold'>Choose File</button>
                    {isModalOpen && (
                      <FileModal
                        onFileSubmit={handleFileChange}
                        onClose={() => setIsModalOpen(false)}
                        onLinkInputModeToggle={handleLinkInputModeToggle}
                        onFileInputModeToggle={handleFileInputModeToggle}
                        onSidebarToggle={handleSidebar}
                      />
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setInputTypeSelected('text')
                      setInputType('text')
                      setSidebarOpen(true)
                    }}
                    className='w-36 sm:w-52 p-4 bg-summarybutton text-xl hover:bg-slate-400 rounded-xl font-nunito font-semibold'
                  >
                    Insert Text
                  </button>
                </div >
              </div >
            )
          }
        </div >
      )}
    </div >
  );
};

export default SummaroidPage;

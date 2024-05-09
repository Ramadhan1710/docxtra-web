import React, { useState, useEffect } from 'react';

const LoadingPopup = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div className={`fixed inset-0 flex items-center h-screen w-screen backdrop-filter backdrop-blur-lg justify-center ${isLoading ? 'block' : 'hidden'}`}>
      <div className='h-72 w-10/12 md:w-3/12 bg-loading rounded-xl'>
        <div className="relative h-full w-full">
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src="/img/hero-loading.png" alt="Loading" className="h-auto w-full" />
          </div>
          <div className=" p-8 rounded-lg h-full w-full">
            <div className='items-center flex flex-col h-full w-full content-end gap-6 text-center justify-end '>
              <div className='flex flex-row gap-2'>
                <div className='h-4 w-4 bg-slate-100 dark:bg-slate-100 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div className='h-4 w-4 bg-slate-100 dark:bg-slate-100 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='h-4 w-4 bg-slate-100 dark:bg-slate-100 rounded-full animate-bounce'></div>
              </div>
              <span className='text-xl font-lato'>Your document is being processed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPopup; 

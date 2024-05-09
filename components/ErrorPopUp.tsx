import React, { useState, useEffect } from 'react';

const ErrorPopup = ({ isError, message, onClose }: { isError: boolean; message: string; onClose: () => void }) => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isError && !closed) {
      timeoutId = setTimeout(() => {
        onClose();
        setClosed(true);
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
      setClosed(false);
    };
  }, [isError, onClose]);

  return (
    <div
      role='alert'
      className={`fixed inset-0 transition-transform duration-300 ease-in-out ${isError ? 'opacity-100' : 'opacity-0 hidden'}`}
      style={{ pointerEvents: isError ? 'auto' : 'none' }}
    >
      <div className='h-screen w-screen flex justify-end items-end'>
        <div className={`bg-white p-8 rounded-lg transform ${isError ? 'translate-y-0' : 'translate-y-full'}`}>
          <span className='text-xl font-lato font-semibold text-red-600'>Error</span>
          <span className='text-red-600 text-xl mt-4'>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;

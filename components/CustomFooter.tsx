// components/Footer.tsx

import React from 'react';

const CustomFooter: React.FC = () => {
  return (
    <footer className="text-white font-sans">
      <div className="w-full max-w-screen-xl p-8 mx-auto block justify-center md:flex md:justify-between items-center">
        <div className="flex mb-5 md:mb-0">
          <a href="#" className="flex items-center">
            <img width="45px" src={"img/Random Symboles 4.png"} alt="Logo DOCXTRA" />
          </a>
          <div className="ml-5 block items-center">
            <h1 className="text-sm md:text-xl">DOCXTRA</h1>
            <h6 className="text-xs">Unlock the Power of Your Documents with DOCXTRA</h6>
          </div>
        </div>
        <div>
          <p className="text-sm text-center">Made by B3 Agile Team © 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;

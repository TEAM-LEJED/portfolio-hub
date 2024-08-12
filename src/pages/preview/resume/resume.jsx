import React, { useEffect, useState } from 'react';
import Particle from '../../../components/preview/particles';
import { Document, Page } from 'react-pdf';
import { AiOutlineDownload } from 'react-icons/ai';

const pdf = '/path/to/your/resume.pdf';

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex flex-col items-center p-4">
      <Particle />

      <div className="mb-4">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-transform transform hover:scale-105"
        >
          <AiOutlineDownload className="mr-2" />
          Download CV
        </a>
      </div>

      <div className="resume mb-4">
        <Document file={pdf} className="flex justify-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>

      <div className="relative mt-4">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-transform transform hover:scale-105"
        >
          <AiOutlineDownload className="mr-2" />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Resume;

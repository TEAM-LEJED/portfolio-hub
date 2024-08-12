import { MailPlus, Map, Phone } from 'lucide-react';
import React from 'react';

const ContactPreview = () => {
  return (
<footer className='bg-[#12071F] text-white py-8 px-6 flex flex-col items-center mt-8'>
<div className='max-w-4xl w-full text-center'>
        <h3 className='text-2xl font-bold mb-4'>Contact Me</h3>
        <div className='flex flex-col md:flex-row md:justify-between items-center'>
          <div className='mb-4 md:mb-0 text-lg flex flex-col items-center'>
            <div className='flex items-center mb-2'>
              <MailPlus className='mr-3 text-blue-400' />
              <span>
                <span className='font-semibold'>Email:</span> elizabethbarden18@gmail.com
              </span>
            </div>
            <a href='mailto:elizabethbarden18@gmail.com' className='text-blue-400 hover:underline'>
              Send me an email
            </a>
          </div>
          <div className='mb-4 md:mb-0 text-lg flex items-center'>
            <Phone className='mr-3 text-green-400' />
            <span>
              <span className='font-semibold'>Phone:</span> +233 55 482 5221
            </span>
          </div>
          <div className='text-lg flex items-center'>
            <Map className='mr-3 text-red-400' />
            <span>
              <span className='font-semibold'>Address:</span> Accra, Ghana
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactPreview;

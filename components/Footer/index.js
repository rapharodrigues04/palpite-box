import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-600 p-4 text-center font-bold text-white'>
      <div className='container mx-auto'>
        Projeto desenvolvido por:{' '}
        <a className='hover:underline' href='#'>Raphael Rodrigues (Dev Pleno) </a>/{' '}
        <a className='hover:underline' href='#'>Linkedin</a> /{' '}
        <a className='hover:underline' href='https://github.com/rapharodrigues04'>Github</a>
        <div className='mt-1'>
          <img className='inline p-4' src='/logo_semana_fsm.png' alt='Semana Fullstack Master'/>
          <img className='inline p-4' src='/logo_devpleno.png' alt='Logo dev Pleno'/>
        </div>
      </div>
    </div>
  );
};

export default Footer;

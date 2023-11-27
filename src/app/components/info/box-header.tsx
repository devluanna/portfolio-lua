'use client';

import Image from 'next/image';
import "./box-header.scss";
import Button from '../buttons-menu/Button';

const BoxHeader: React.FC = () => {
  const handleButtonClick = () => {
    console.log("Botão clicado!");
  };

  return (

    <div className="box-header">
      <div className="line">
      <span>developer.exe</span>

      <div className="box-buttons">

        <Button
          onClick={handleButtonClick}
          buttonType="certificate"
          sizeFont="15px"
          name="_"
        />
        
        <Button
          onClick={handleButtonClick}
          buttonType="about"
          sizeFont="15px"
          name="🌙"
        />

        <Button
          onClick={handleButtonClick}
          buttonType="home"
          sizeFont="18px"
          name="x"
        />
    </div>
      </div>

      <div className="box-details">
        <Image
          src="/lua.jpg"
          alt="Vercel Logo"
          width={220}
          height={220}
          priority
        />
        <div className='titles'>
          <h1>Hi, I'm Luana! 👋</h1>
          <h2>Software Developer</h2>
          <h3>🇧🇷 PT-BR - Native Speaker</h3>
          <h3> 🇺🇸 EN - Basic (studying)</h3>
        </div>
      </div>
 
  </div>

  );
};

export default BoxHeader;

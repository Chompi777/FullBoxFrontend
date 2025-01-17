// app/form/CrearOrden.tsx
"use client";

import React from 'react';

const OrderCard = () => {
  return (
    <div className="w-[1728px] h-[1117px] relative bg-[#f3f5f9] overflow-hidden">
      <div className="w-[1218px] h-[831px] left-[329px] top-[243px] absolute bg-white rounded-[10px] border border-[#e5e8ee]" />
      
      {/* Date Box */}
      <div className="w-[360px] h-[87px] left-[1140px] top-[342px] absolute">
        <div className="w-[360px] h-[60px] left-0 top-[27px] absolute bg-white rounded-[10px] border border-[#dee1e7]" />
        <div className="w-[60px] h-[60px] left-0 top-[27px] absolute bg-[#f3f5f9] rounded-tl-[10px] rounded-bl-[10px] border border-[#dee1e7]" />
        <div className="left-[80px] top-[48px] absolute text-[#454955] text-base font-semibold font-['Albert Sans']">03 / 07 / 2023</div>
        <div className="left-[2.19px] top-0 absolute text-[#7682a0] text-sm font-semibold font-['Albert Sans']">📅 Fecha Programada</div>
      </div>

      {/* Button */}
      <div className="w-60 h-[75px] left-[1258px] top-[959px] absolute">
        <div className="w-60 h-[75px] left-0 top-0 absolute bg-[#4270f9] rounded-[10px] border-2 border-[#2f5bdf]" />
        <div className="w-[30px] h-[30px] p-[5px] left-[190px] top-[23px] absolute justify-center items-center inline-flex overflow-hidden" />
        <div className="left-[25px] top-[27px] absolute text-white text-lg font-semibold font-['Albert Sans']">Siguiente</div>
      </div>

      {/* Title */}
      <div className="left-[329px] top-[137px] absolute">
        <div className="left-0 top-0 absolute text-[#4c5468] text-3xl font-bold font-['Albert Sans']">Crea una orden</div>
        <div className="left-0 top-[44px] absolute">
          <span className="text-[#7682a0] text-lg font-medium font-['Albert Sans']">Dale una ventaja competitiva a tu negocio con entregas </span>
          <span className="text-[#7682a0] text-lg font-bold font-['Albert Sans']">el mismo día  </span>
          <span className="text-[#7682a0] text-lg font-medium font-['Albert Sans']">(Área Metropolitana) y </span>
          <span className="text-[#7682a0] text-lg font-bold font-['Albert Sans']">el día siguiente</span>
          <span className="text-[#7682a0] text-lg font-medium font-['Albert Sans']"> a nivel nacional.</span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="w-[1120px] h-[438px] left-[380px] top-[481px] absolute">
        <div className="w-[360px] h-[87px] left-0 top-0 absolute">
          <div className="w-[360px] h-[60px] left-0 top-[27px] absolute bg-white rounded-[10px] border-2 border-[#4270f9]" />
          <div className="left-[2.19px] top-0 absolute text-[#7682a0] text-sm font-semibold font-['Albert Sans']">Nombres</div>
          <div className="w-[123.59px] left-[21.87px] top-[48px] absolute text-[#454955] text-base font-semibold font-['Albert Sans']">Gabriela Reneé</div>
        </div>

        <div className="w-[1120px] h-[87px] left-0 top-[351px] absolute">
          <div className="w-[1120px] h-[60px] left-0 top-[27px] absolute bg-white rounded-[10px] border border-[#dee1e7]" />
          <div className="left-[2.19px] top-0 absolute text-[#7682a0] text-sm font-semibold font-['Albert Sans']">Indicaciones</div>
          <div className="left-[21.87px] top-[48px] absolute text-[#454955] text-base font-semibold font-['Albert Sans']">Llamar antes de entregar.</div>
        </div>

        <div className="w-[360px] h-[87px] left-0 top-[234px] absolute">
          <div className="w-[360px] h-[60px] left-0 top-[27px] absolute bg-white rounded-[10px] border border-[#dee1e7]" />
          <div className="left-[2.19px] top-0 absolute text-[#7682a0] text-sm font-semibold font-['Albert Sans']">Departamento</div>
          <div className="left-[21.87px] top-[48px] absolute text-[#454955] text-base font-semibold font-['Albert Sans']">San Salvador</div>
        </div>

        <div className="w-[360px] h-[87px] left-[380px] top-[234px] absolute">
          <div className="w-[360px] h-[60px] left-0 top-[27px] absolute bg-white rounded-[10px] border border-[#dee1e7]" />
          <div className="left-[2.19px] top-0 absolute text-[#7682a0] text-sm font-semibold font-['Albert Sans']">Municipio</div>
          <div className="left-[21.87px] top-[48px] absolute text-[#454955] text-base font-semibold font-['Albert Sans']">San Salvador</div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-[1728px] h-20 left-0 top-0 absolute">
        <div className="w-[1728px] h-20 left-0 top-0 absolute bg-white/90 border-b border-[#e5e8ee] backdrop-blur-[10px]" />
      </div>
      <div className="w-[162.59px] left-[24px] top-[21px] absolute">
        <img className="w-[96.85px] h-[26.66px] left-[65.75px] top-0 absolute" src="https://via.placeholder.com/97x27" alt="Logo" />
        <img className="w-[48.20px] h-10 left-0 top-0 absolute" src="https://via.placeholder.com/48x40" alt="Icon" />
      </div>
    </div>
  );
};

export default OrderCard;

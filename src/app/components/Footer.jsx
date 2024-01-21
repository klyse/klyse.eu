import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          src="/logo_white.png"
          alt="profile-pic"
          width={50}
          height={50}
        />
        <p className="text-slate-800">All rights reserved.</p>
        <p className="text-slate-800">
          Template by{" "}
          <a href="https://github.com/judygab/nextjs-portfolio" target="_blanc">
            judygab
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

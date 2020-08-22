import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [show, handleshow] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else {
        handleshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"} `}>
      <img
        src="https://cdn.vox-cdn.com/thumbor/sk2oh94V3KV9FQc2Xh3GLJIV3nQ=/39x0:3111x2048/1520x1013/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
        alt=""
        className="nav__logo"
      />
      <img
        src="https://lh3.googleusercontent.com/proxy/dbxhLa5M6zroybezmj6msB1nh1FW4XFy4iCKKun2yDi9DSsVXUIF1VUQFQ-PdRAhFxF7Thr9atXXnLmM_qumtNJCTvhoR7s"
        alt=""
        className="nav__avatar"
      />
    </div>
  );
}

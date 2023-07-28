import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";
import g7 from "../assets/gallery/g7.jpg";
import g8 from "../assets/gallery/g8.jpg";
import g9 from "../assets/gallery/g9.jpg";
import g10 from "../assets/gallery/g10.jpg";
import g11 from "../assets/gallery/g11.jpg";
import g12 from "../assets/gallery/g12.jpg";
import g13 from "../assets/gallery/g13.jpg";
import g14 from "../assets/gallery/g14.jpg";
import g15 from "../assets/gallery/g15.jpg";
import g16 from "../assets/gallery/g16.jpg";
import g17 from "../assets/gallery/g17.jpg";
import g18 from "../assets/gallery/g18.jpg";
import g19 from "../assets/gallery/g19.jpg";
import g20 from "../assets/gallery/g20.jpg";
import g21 from "../assets/gallery/g21.jpg";
import g22 from "../assets/gallery/g22.jpg";
import g23 from "../assets/gallery/g23.jpg";
import g24 from "../assets/gallery/g24.jpg";
import g25 from "../assets/gallery/g25.jpg";
import g26 from "../assets/gallery/g26.jpg";
import g27 from "../assets/gallery/g27.jpg";
import g28 from "../assets/gallery/g28.jpg";
import g29 from "../assets/gallery/g29.jpg";
import g30 from "../assets/gallery/g30.jpg";
import g31 from "../assets/gallery/g31.jpg";
import g32 from "../assets/gallery/g32.jpg";
import g33 from "../assets/gallery/g33.jpg";
import g34 from "../assets/gallery/g34.jpg";
import g35 from "../assets/gallery/g35.jpg";
import g36 from "../assets/gallery/g30.jpg";
import g37 from "../assets/gallery/g37.jpg";
import g38 from "../assets/gallery/g38.jpg";
import g39 from "../assets/gallery/g39.jpg";
import g40 from "../assets/gallery/g40.jpg";
import g41 from "../assets/gallery/g41.jpg";
import g42 from "../assets/gallery/g42.jpg";
import g43 from "../assets/gallery/g43.jpg";
import g44 from "../assets/gallery/g44.jpg";
import g45 from "../assets/gallery/g45.jpg";
import g46 from "../assets/gallery/g46.jpg";
import g47 from "../assets/gallery/g47.jpg";
import g48 from "../assets/gallery/g48.jpg";
import g49 from "../assets/gallery/g49.jpg";
import g50 from "../assets/gallery/g50.jpg";
import "../css/gallery.css";
import "../css/home.css";

const Gallery2 = () => {
  let data = [
    { id: 1, imgSrc: g1 },
    { id: 2, imgSrc: g2 },
    { id: 3, imgSrc: g3 },
    { id: 4, imgSrc: g4 },
    { id: 5, imgSrc: g5 },
    { id: 6, imgSrc: g6 },
    { id: 7, imgSrc: g7 },
    { id: 8, imgSrc: g8 },
    { id: 9, imgSrc: g9 },
    { id: 10, imgSrc: g10 },
    { id: 11, imgSrc: g11 },
    { id: 12, imgSrc: g12 },
    { id: 13, imgSrc: g13 },
    { id: 14, imgSrc: g14 },
    { id: 15, imgSrc: g15 },
    { id: 16, imgSrc: g16 },
    { id: 17, imgSrc: g17 },
    { id: 18, imgSrc: g18 },
    { id: 19, imgSrc: g19 },
    { id: 20, imgSrc: g20 },
    { id: 21, imgSrc: g21 },
    { id: 22, imgSrc: g22 },
    { id: 23, imgSrc: g23 },
    { id: 24, imgSrc: g24 },
    { id: 25, imgSrc: g25 },
    { id: 26, imgSrc: g26 },
    { id: 27, imgSrc: g27 },
    { id: 28, imgSrc: g28 },
    { id: 29, imgSrc: g29 },
    { id: 30, imgSrc: g30 },
    { id: 31, imgSrc: g31 },
    { id: 32, imgSrc: g32 },
    { id: 33, imgSrc: g33 },
    { id: 34, imgSrc: g34 },
    { id: 35, imgSrc: g35 },
    { id: 36, imgSrc: g36 },
    { id: 37, imgSrc: g37 },
    { id: 38, imgSrc: g38 },
    { id: 39, imgSrc: g39 },
    { id: 40, imgSrc: g40 },
    { id: 41, imgSrc: g41 },
    { id: 42, imgSrc: g42 },
    { id: 43, imgSrc: g43 },
    { id: 44, imgSrc: g44 },
    { id: 45, imgSrc: g45 },
    { id: 46, imgSrc: g46 },
    { id: 47, imgSrc: g47 },
    { id: 48, imgSrc: g48 },
    { id: 49, imgSrc: g49 },
    { id: 50, imgSrc: g50 },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgsrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgsrc(imgSrc);
    setModel(true);
  };
  useEffect(() => {
    document.addEventListener("contextmenu", handlecontextmenu);
    return () => {
      document.removeEventListener("contextmenu", handlecontextmenu);
    };
  }, []);
  const handlecontextmenu = (e) => {
    e.preventDefault();
    alert("boton derecho deshabilitado");
  };

  return (
    <>
      {/* -----------------abrir imagen en pantalla completa------------ */}
      {/* <div className={model ? "model open" : "model"}>
        <img
          src={tempimgSrc}
          alt=""
          onContextMenuCapture={false}
          onContextMenu={false}
        />
        <FontAwesomeIcon icon={faCircleXmark} onClick={() => setModel(false)} />
      </div> */}
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              // onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} className="imgG" alt="image gallery" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery2;

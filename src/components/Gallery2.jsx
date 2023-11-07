import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import fotoGaleria1 from "../assets/gallery/fotoGaleria1.jpg"
import fotoGaleria2 from "../assets/gallery/fotoGaleria2.jpg"
import fotoGaleria3 from "../assets/gallery/fotoGaleria3.jpg"
import fotoGaleria4 from "../assets/gallery/fotoGaleria4.jpg"
import fotoGaleria5 from "../assets/gallery/fotoGaleria5.jpg"
import fotoGaleria6 from "../assets/gallery/fotoGaleria6.jpg"
import fotoGaleria7 from "../assets/gallery/fotoGaleria7.jpg"
import fotoGaleria8 from "../assets/gallery/fotoGaleria8.jpg"
import fotoGaleria9 from "../assets/gallery/fotoGaleria9.jpg"
import fotoGaleria10 from "../assets/gallery/fotoGaleria10.jpg"
import fotoGaleria11 from "../assets/gallery/fotoGaleria11.jpg"
import fotoGaleria12 from "../assets/gallery/fotoGaleria12.jpg"
import fotoGaleria13 from "../assets/gallery/fotoGaleria13.jpg"
import fotoGaleria14 from "../assets/gallery/fotoGaleria14.jpg"
import fotoGaleria15 from "../assets/gallery/fotoGaleria15.jpg"
import fotoGaleria16 from "../assets/gallery/fotoGaleria16.jpg"
import fotoGaleria17 from "../assets/gallery/fotoGaleria17.jpg"
import fotoGaleria18 from "../assets/gallery/fotoGaleria18.jpg"
import fotoGaleria19 from "../assets/gallery/fotoGaleria19.jpg"
import fotoGaleria20 from "../assets/gallery/fotoGaleria20.jpg"
import fotoGaleria21 from "../assets/gallery/fotoGaleria21.jpg"
import fotoGaleria22 from "../assets/gallery/fotoGaleria22.jpg"
import fotoGaleria23 from "../assets/gallery/fotoGaleria23.jpg"
import fotoGaleria24 from "../assets/gallery/fotoGaleria24.jpg"
import fotoGaleria25 from "../assets/gallery/fotoGaleria25.jpg"
import fotoGaleria26 from "../assets/gallery/fotoGaleria26.jpg"
import fotoGaleria27 from "../assets/gallery/fotoGaleria27.jpg"
import fotoGaleria28 from "../assets/gallery/fotoGaleria28.jpg"
import fotoGaleria29 from "../assets/gallery/fotoGaleria29.jpg"
import fotoGaleria30 from "../assets/gallery/fotoGaleria30.jpg"
import fotoGaleria31 from "../assets/gallery/fotoGaleria31.jpg"
import fotoGaleria32 from "../assets/gallery/fotoGaleria32.jpg"
import fotoGaleria33 from "../assets/gallery/fotoGaleria33.jpg"
import fotoGaleria34 from "../assets/gallery/fotoGaleria34.jpg"
import fotoGaleria35 from "../assets/gallery/fotoGaleria35.jpg"
import fotoGaleria36 from "../assets/gallery/fotoGaleria36.jpg"

import "../css/gallery.css";
import "../css/home.css";

const Gallery2 = () => {
  let data = [
    { id: 1, imgSrc: fotoGaleria1 },
    { id: 2, imgSrc: fotoGaleria2 },
    { id: 3, imgSrc: fotoGaleria3},
    { id: 4, imgSrc: fotoGaleria4 },
    { id: 5, imgSrc: fotoGaleria5 },
    { id: 6, imgSrc: fotoGaleria6 },
    { id: 7, imgSrc: fotoGaleria7 },
    { id: 8, imgSrc: fotoGaleria8 },
    { id: 9, imgSrc: fotoGaleria9 },
    { id: 10, imgSrc: fotoGaleria10 },
    { id: 11, imgSrc: fotoGaleria11 },
    { id: 12, imgSrc: fotoGaleria12 },
    { id: 13, imgSrc: fotoGaleria13 },
    { id: 14, imgSrc: fotoGaleria14 },
    { id: 15, imgSrc: fotoGaleria15 },
    { id: 16, imgSrc: fotoGaleria16 },
    { id: 17, imgSrc: fotoGaleria17 },
    { id: 18, imgSrc: fotoGaleria18 },
    { id: 19, imgSrc: fotoGaleria19 },
    { id: 20, imgSrc: fotoGaleria20 },
    { id: 21, imgSrc: fotoGaleria21 },
    { id: 22, imgSrc: fotoGaleria22 },
    { id: 23, imgSrc: fotoGaleria23 },
    { id: 24, imgSrc: fotoGaleria24 },
    { id: 25, imgSrc: fotoGaleria25 },
    { id: 26, imgSrc: fotoGaleria26 },
    { id: 27, imgSrc: fotoGaleria27 },
    { id: 28, imgSrc: fotoGaleria28 },
    { id: 29, imgSrc: fotoGaleria29},
    { id: 30, imgSrc: fotoGaleria30 },
    { id: 31, imgSrc: fotoGaleria31 },
    { id: 32, imgSrc: fotoGaleria32 },
    { id: 33, imgSrc: fotoGaleria33 },
    { id: 34, imgSrc: fotoGaleria34 },
    { id: 35, imgSrc: fotoGaleria35 },
    { id: 36, imgSrc: fotoGaleria36 },
   
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgsrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgsrc(imgSrc);
    setModel(true);
  };
  // useEffect(() => {
  //   document.addEventListener("contextmenu", handlecontextmenu);
  //   return () => {
  //     document.removeEventListener("contextmenu", handlecontextmenu);
  //   };
  // }, []);
  // const handlecontextmenu = (e) => {
  //   e.preventDefault();
  //   alert("El botón derecho ha sido deshabilitado");
  // };

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

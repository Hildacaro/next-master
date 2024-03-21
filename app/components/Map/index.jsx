"use client";
import React from "react";

const map = () => {
  return (
    <div className="mt-10" style={{ textAlign: "center" }}>
      <h1 className="mb-3" style={{ fontSize: "3em", margin: "0 auto" }}>
        ¿Donde <span id="text-map"> Encontrarnos?</span>
      </h1>
      <h2 className="mb-3 font-extrabold text-2xl ">
        C. de Matilde Landa, 26, planta 0, Local 1, 28029 Madrid
      </h2>
      <iframe
        width="100%"
        height="300px"
        frameborder="0"
        allowfullscreen
        allow="geolocation"
        src="//umap.openstreetmap.fr/es/map/fundacion-refugiados-sin-fronteras_1042792?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true"
      ></iframe>
      <p>
        <a href="//umap.openstreetmap.fr/es/map/fundacion-refugiados-sin-fronteras_1042792?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true">
          Ver pantalla completa
        </a>
      </p>
    </div>
  );
};

export default map;

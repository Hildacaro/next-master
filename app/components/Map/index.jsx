"use client";
import React from "react";

const map = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="mb-3" style={{ fontSize: "3em", margin: "0 auto" }}>
        ¿Donde <span id="text-map"> Encontrarnos?</span>
      </h1>
      <iframe
        width="100%"
        height="300px"
        allowFullScreen
        allow="geolocation"
        src="//umap.openstreetmap.fr/es/map/mapa-sin-titulo_1037430?scaleControl=true&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=databrowser&captionBar=false&captionMenus=true"
      ></iframe>
    </div>
  );
};

export default map;

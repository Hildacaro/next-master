import styles from "../ui/componente.module.css";
import React from "react";

const photo = new Array(9).fill(null);

export default function Carosel() {
  return (
    <section id={styles.carousel}>
      <div className={styles.carousel}>
        <div className={styles.gallery}>
          {photo.map((_, index) => (
            <div
              key={index}
              className={styles.item}
              style={{
                backgroundImage: `url(/images/Carousel/carousel${
                  index + 1
                }.jpg)`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

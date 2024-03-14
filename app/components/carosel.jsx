import styles from "../ui/componente.module.css";

export default function Carosel() {
  return (
    <section id={styles.carousel} >
      <div className={styles.carousel} >
        <div className={styles.gallery}>
          <div className={`${styles.item} ${styles.item1}`}></div>
          <div className={`${styles.item} ${styles.item2}`}></div>
          <div className={`${styles.item} ${styles.item3}`}></div>
          <div className={`${styles.item} ${styles.item4}`}></div>
          <div className={`${styles.item} ${styles.item5}`}></div>
          <div className={`${styles.item} ${styles.item6}`}></div>
          <div className={`${styles.item} ${styles.item7}`}></div>
          <div className={`${styles.item} ${styles.item8}`}></div>
          <div className={`${styles.item} ${styles.item9}`}></div>
          <div className={`${styles.item} ${styles.item10}`}></div>
          <div className={`${styles.item} ${styles.item11}`}></div>
          <div className={`${styles.item} ${styles.item12}`}></div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "Next App About", 
  description: "About description",
};


const AboutPage = () => {
  // console.log("let check where it works");
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}> Angent Agency</h2>
        <h1 className={styles.title}>
          We create the didgital ideas that are bigger, bolder, brave and
          better.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          minus labore omnis voluptate. Provident, amet at modi nam voluptatem,
          ipsa voluptatum adipisci voluptate beatae possimus commodi aperiam
          illo, eos assumenda.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="about image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};
export default AboutPage;

// "use client"
import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// // import HydrationTest from "@/components/hydrationTest";
// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
//   ssr: false,
// });

export const metadata = {
  title: "Contact", 
  description: "Contact description",
};

const ContactPage = () => {
  // const a = Math.random();
  //       console.log(a);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact" className={styles.img} fill />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and surname" />
          <input type="text" placeholder="Email adress" />
          <input type="number" placeholder="Phone number" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;

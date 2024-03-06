"use client";

import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import { useState } from "react";
import Image from "next/image";

const links = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //TEMPORARY
  const session = true;
  const isAdmin = false;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
          // <Link href={link.path} key={link.title}>
          //   {link.title}
          // </Link>
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
     
      {/* <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>menu</button> */}
    <Image src="/menu.png" className={styles.menuButton} alt="" width={30} height={30}  onClick={() => setOpen((prev) => !prev)} />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;

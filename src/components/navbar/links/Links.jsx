import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
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
      title: "Admin",
      path: "/admin",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
        // <Link href={link.path} key={link.title}>
        //   {link.title}
        // </Link>
      ))}
    </div>
  );
};

export default Links;

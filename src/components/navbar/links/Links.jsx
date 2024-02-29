import Link from "next/link"

const Links = () => {
const links = [
{
    title : "HomePage",
    path : "/",
},
{
    title : "About",
    path : "/about",
},
{
    title : "Contact",
    path : "/contact",
},
{
    title : "Admin",
    path : "/admin",
},
{
    title : "Blog",
    path : "/blog",
},
{
    title : "Login",
    path : "/login",
}
];

    return (
       <div>
        {links.map(link =>(
            <Link href={link.path} key={link.title}>{link.title}</Link>
        ))}
       </div>
    )
}

export default Links
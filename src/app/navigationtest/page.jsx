"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"



const NavigationTestPage = () =>{

    const router = useRouter()
    const pathname = usePathname()
    console.log(pathname);
    const handleClick = () =>{
        console.log("clicked");
        // router.push("/")
        // router.replace("/")
        router.refresh("/")
        // router.back()
        // router.forward()
     }
     

    return(
        <div>
        <Link href="/" prefetch= {false}>Click Here</Link>
        <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
}
export default NavigationTestPage
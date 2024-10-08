import Link from "next/link"

function Header(){

    return(

        <div>
            <nav className="h-[70px] w-full bg-[#1A73E8] text-[white] font-semibold flex justify-between items-center p-5  ">


<Link href={'/'}><img className="h-[70px] w-[160px] " src="https://freepngimg.com/save/11527-blogging-picture/640x320" alt="" />
</Link>


<span className="sm:hidden text-[20px]">&#9776;</span>
                                <ul className=" hidden sm:flex gap-6">



<Link href={'/'}>   <li>Home</li></Link>
                 
                  
<Link href={'/about'}>  <li>About</li></Link>


                


                    <Link href={'/blog'}> <li>Blog</li> </Link>


<Link href={'/add-post'}>  <li>Add Post</li>
</Link>
                  
    




                </ul>
            </nav>
        </div>
      
    )
    

}
export default Header
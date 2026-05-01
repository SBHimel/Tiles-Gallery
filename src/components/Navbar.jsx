"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { Button, Avatar } from "@heroui/react";

const Navbar = () => {
  const pathname = usePathname(); 
  const isLoggedIn = false; 

  
  const activeLink = "text-primary font-bold border-b-2 border-primary pb-1";
  const inactiveLink = "text-gray-600 hover:text-primary transition-all";

  return (
    <div className="border-b px-2 sticky top-0 bg-white z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
     
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/tiles.png"
            alt="logo"
            width={35}
            height={35}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-xl tracking-tighter">TilesGallery.</h3>
        </Link>

       
       <ul className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-4 gap-y-2 md:gap-8 text-sm font-medium">
  <li>
    <Link 
      href="/" 
      className={pathname === "/" ? activeLink : inactiveLink}
    >
      Home
    </Link>
  </li>

  <li>
    <Link 
      href="/all-tiles" 
      className={pathname === "/all-tiles" ? activeLink : inactiveLink}
    >
      All Tiles
    </Link>
  </li>

  <li>
    <Link 
      href="/my-profile" 
      className={pathname === "/my-profile" ? activeLink : inactiveLink}
    >
      My Profile
    </Link>
  </li>
</ul>

    
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <Button 
              as={Link} 
              href="/login" 
              color="primary" 
              variant={pathname === "/login" ? "solid" : "flat"} 
              size="sm" 
              className="font-bold rounded-md hover:bg-gray-300 transition"
            >
              Login
            </Button>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/my-profile">
                <Avatar
                  isBordered
                  color={pathname === "/my-profile" ? "primary" : "default"}
                  size="sm"
                  src="https://i.pravatar.cc/150"
                />
              </Link>
              <Button color="danger" variant="light" size="sm">
                Logout
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
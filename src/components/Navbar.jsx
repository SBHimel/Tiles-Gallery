"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // useRouter যোগ করো
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();


  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user);


  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  const activeLink = "text-primary font-bold border-b-2 border-primary pb-1";
  const inactiveLink = "text-gray-600 hover:text-primary transition-all";

  return (
    <div className="border-b px-2 sticky top-0 bg-white z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
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

        {/* Links */}
        {/* Links - এগুলো সবসময় দৃশ্যমান থাকবে */}
        <ul className="flex gap-8 text-sm font-medium">
          <li>
            <Link href="/" className={pathname === "/" ? activeLink : inactiveLink}>Home</Link>
          </li>
          <li>
            <Link href="/all-tiles" className={pathname === "/all-tiles" ? activeLink : inactiveLink}>All Tiles</Link>
          </li>
          <Link
            href={user ? "/my-profile" : "/login"}
            className={
              pathname === "/my-profile" ? activeLink : inactiveLink
            }
          >
            My Profile
          </Link>
        </ul>

        {/* Right Side: Auth Buttons */}
        <div className="flex items-center gap-4">
          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : !user ? (

            <Link href="/login">
              <Button
                color="primary"
                variant={pathname === "/login" ? "solid" : "flat"}
                size="sm"
                className="font-bold rounded-md"
              >
                Login
              </Button>
            </Link>
          ) : (
            /* Logged In State */
            <div className="flex items-center gap-2 ">
              <Link href="/my-profile" className="hidden sm:flex justify-center items-center gap-1">
                <div>
                  <Avatar className="h-10 w-10">
                    <Avatar.Image alt="John Doe" src={user?.image}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </div>
                <div>
                  <h2 className="text-[12px] font-bold text-gray-500">{user.name}</h2>
                  <h2 className="text-[12px] hidden sm:block font-bold text-gray-500">{user.email}</h2>

                </div>

              </Link>
              <Button
                onClick={handleLogout}
                color="danger"
                variant="light"
                size="sm"
                className="font-extrabold
                bg-gray-300 text-[14px] hover:bg-gray-500 hover:text-white"
              >
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
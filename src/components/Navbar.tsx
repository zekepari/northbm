import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/our-work">Portfolio</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Image
            src="/nbmhs-crop-removebg-preview.png"
            alt="North Brisbane Maintenance Logo"
            width={200}
            height={50}
            className="object-contain"
          />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-lg menu-horizontal px-1">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/our-work">Portfolio</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

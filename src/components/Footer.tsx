import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#8b5236] text-white">
      <div className="container mx-auto p-9">
        <div className="flex flex-col justify-between gap-7 md:flex-row">
          <div className="flex gap-7 md:gap-20">
            <ul className="space-y-2">
              <h1 className="font-bold">Contact Us</h1>
              <li>
                <span className="font-semibold">Email: </span>info@everafter.com
              </li>
              <li>
                <span className="font-semibold">Phone: </span>081380093183
              </li>
            </ul>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Quick Link</h1>
              <Link href="/" className="hover:text-[#C6754D]">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#C6754D]">
                About
              </Link>
              <Link href="/service" className="hover:text-[#C6754D]">
                Services
              </Link>
              <Link href="/teams" className="hover:text-[#C6754D]">
                Teams
              </Link>
              <Link href="/contact" className="hover:text-[#C6754D]">
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Socials</h1>
              <a
                href="https://instagram.com/everafter"
                target="_blank"
                className="hover:text-[#C6754D]"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/everafter"
                target="_blank"
                className="hover:text-[#C6754D]"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/everafter"
                target="_blank"
                className="hover:text-[#C6754D]"
              >
                Twitter
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-start gap-1 md:items-end">
              <div className="flex flex-col items-center">
                <div className="relative h-[70px] w-[70px]">
                  <Image
                    src="/logo2.svg"
                    alt="logo"
                    fill
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
                <b>EverAfter</b>
              </div>
              <p className="w-52 text-left md:text-right">
                Your Trusted Wedding Organizer
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-10" />
        <div>© 2024 EverAfter. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;

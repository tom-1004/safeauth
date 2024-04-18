import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="hero">
      <div className="max-w-6xl mx-auto px-6 pt-20">
        <div className="flex flex-col md:flex-row gap-12 justify-between pb-10">
          <div className="md:max-w-xs">
            <Image
              src={"/assets/icon-white.png"}
              height={35}
              width={35}
              alt="logo_icon"
              className=""
            />
            <p className="text-sm font-normal text-gray-300 leading-6 md:max-w-lg mt-8">
              Unlock the full potential of your decentralized applications and
              websites with our comprehensive wallet integration platform.
              Seamlessly connect to leading crypto wallets, enhance security,
              and elevate user experiences.
            </p>

            <form></form>
          </div>

          <div className="">
            <div>
              <h1 className="text-white text-md font-bold mb-8">QUICK LINKS</h1>
              <div className="text-sm font-normal text-gray-300 inline-flex flex-col gap-6">
                <Link
                  href={"/"}
                  className="text-sm font-normal hover:translate-x-2 transition-all"
                >
                  Home
                </Link>
                <Link
                  href={"/node-sync"}
                  className="text-sm font-normal hover:translate-x-2 transition-all"
                >
                  Node Sync
                </Link>
                <Link
                  href={"/developers"}
                  className="text-sm font-normal hover:translate-x-2 transition-all"
                >
                  Developers
                </Link>
              </div>
            </div>
          </div>

          <div className="">
            <div>
              <h1 className="text-white text-md font-bold mb-8">LEGAL</h1>
              <div className="text-gray-300 inline-flex flex-col gap-4">
                <Link
                  href={"/privacy-policy"}
                  className="text-sm font-normal hover:translate-x-2 transition-all"
                >
                  Privacy Policy
                </Link>
                <Link
                  href={"/terms-and-conditions"}
                  className="text-sm font-normal hover:translate-x-2 transition-all"
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>

          <div className="">
            <div>
              <h1 className="text-white text-md font-bold mb-8">CONNECT</h1>
              <div className="flex items-center gap-7 text-gray-300">
                <Link href={'https://github.com'} target="_blank" className="text-2xl">
                    <BsGithub />
                </Link>
                <Link href={'https://discord.com'} target="_blank" className="text-2xl">
                    <BsDiscord />
                </Link>
                <Link href={'https://twitter.com'} target="_blank" className="text-2xl">
                    <BsTwitterX />
                </Link>
                <Link href={'https://telegram.org'} target="_blank" className="text-2xl">
                    <BsTelegram />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image src={'/assets/divider.svg'} className="mt-14" height={1100} width={1100} alt="image" />
        <p className="text-center text-gray-300 text-[13px] py-10">&copy; 2024 SafeAuth, Inc </p>
      </div>
    </div>
  );
};

export default Footer;

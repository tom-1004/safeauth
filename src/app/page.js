import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Card from "@/components/Card";
import { cardData, imageData } from "../../public/data";

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <div className="hero">
        <div className="max-w-6xl mx-auto px-6 pt-44 md:pb-24 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="col-span-1">
            <h1 className="text-white text-center md:text-left text-4xl md:text-6xl font-bold leading-[50px] md:leading-[70px] px-5 md:px-0">
              Seamlessly connect your wallets to dApps
            </h1>
            <p className="text-center md:text-left md:text-lg text-gray-300 mt-6">
              Explore all web3 has to offer and connect to thousands of
              apps across hundreds of chains. Enable transaction signing and
              smart contract interactions, backed by end-to-end encryption.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-10">
              <Link
                href={"/connection-sync"}
                className="button-gradient text-white text-[14px] md:text-lg font-medium rounded-full px-9 py-4"
              >
                Connect Wallet
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex items-center justify-center">
              <Image
                src={"/assets/hero-image.svg"}
                height={400}
                width={400}
                alt="image"
                className="scale-75 md:scale-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partners section */}
      {/* <div className="white-gradient">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h3 className="text-primary-bg text-center text-lg font-semibold">
            Our trusted partners
          </h3>
          <div className="flex items-center justify-center gap-10 mt-14">
            <Image
              src={"/assets/ops-logo.webp"}
              height={200}
              width={200}
              alt="logo"
            />
            <Image
              src={"/assets/tru-logo.webp"}
              height={150}
              width={150}
              alt="logo"
            />
            <Image
              src={"/assets/led-logo.webp"}
              height={180}
              width={180}
              alt="logo"
            />
            <Image
              src={"/assets/poly-logo.webp"}
              height={165}
              width={165}
              alt="logo"
            />
            <Image
              src={"/assets/cake-logo.webp"}
              height={180}
              width={180}
              alt="logo"
            />
          </div>
        </div>
      </div> */}

      <div className="pt-16 md:pt-24 overflow-x-hidden">
        <h3 className="text-primary-bg text-center text-lg font-semibold">
          Our trusted partners
        </h3>
        <div className="w-[1000%] md:w-[200%] h-20 overflow-x-hidden relative mt-9">
          <div className="w-[100%] md:w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
            {imageData.map((image) => (
              <div className="flex justify-center items-start w-[20rem]">
                <Image src={image.url} height={200} width={200} alt="image" />
              </div>
            ))}
            {imageData.map((image) => (
              <div className="flex justify-center items-start w-[20rem]">
                <Image src={image.url} height={200} width={200} alt="image" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards section */}
      <div className="white-gradient">
        <div className="max-w-6xl mx-auto px-6 pt-24">
          <h6 className="text-center md:text-left text-gray-400 font-semibold mb-5 md:mb-4">
            ENJOY THE EXPERIENCE
          </h6>
          <h1 className="text-gradient text-center md:text-left text-3xl font-bold">
            All-in-one wallet essentials
          </h1>
          <div className="flex items-center flex-col md:flex-row justify-evenly h-full gap-7 mt-16 md:mt-15">
            {cardData.map((card) => (
              <Card key={card.id} heading={card.heading} body={card.body} />
            ))}
          </div>
        </div>
      </div>

      {/* Banner section */}
      <div className="white-gradient px-6 py-24">
        <div className="button-gradient overflow-hidden relative max-w-6xl mx-auto px-6 py-14 rounded-3xl">
          <h1 className="text-center text-white text-4xl font-bold max-w-xl mx-auto leading-[50px]">
            Unlock the full potential of your decentralized applications
          </h1>
          <p className="text-center text-gray-200 max-w-3xl mx-auto mt-5">
            We strive to provide secure, user-friendly solutions that empower
            individuals to take control of their digital assets.
          </p>
          <div className="flex items-center justify-center">
            <Link
              href={"/connection-sync"}
              className="text-white text-md font-medium border-[2.5px] border-white rounded-full px-7 py-4 mt-8"
            >
              Connect Wallet
            </Link>
          </div>
          <Image
            src={"/assets/icon-white.png"}
            className="absolute opacity-5 -bottom-28 -left-20"
            height={300}
            width={300}
            alt="image"
          />
        </div>
      </div>
    </main>
  );
}

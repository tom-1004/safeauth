import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <main>
      {/* Hero section */}
      <div className="hero">
        <div className="max-w-6xl mx-auto px-6 pt-44 md:pb-24 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="col-span-1">
            <h1 className="text-white text-center md:text-left text-4xl md:text-6xl font-bold leading-[50px] md:leading-[70px] px-5 md:px-0">
              Connect your wallets to web3 nodes
            </h1>
            <p className="text-center md:text-left md:text-lg text-gray-300 mt-6">
              We mitigate security risks associated with third-party wallet
              integrations, and ensure you retain full control of your wallet,
              eliminating unauthorized access.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-10">
              <Link
                href={"/"}
                className="button-gradient text-white text-lg font-medium rounded-full px-9 py-4"
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

      <div className="hero">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-20 md:pb-28">
          <div className="flex items-center justify-center">
            <div className="button-gradient h-2 w-12 rounded-full"></div>
          </div>
          <h1 className="text-white text-center text-4xl font-bold mt-7 max-w-md mx-auto leading-[49px]">
            Compatible with 250+ Wallet Ecosystems
          </h1>
          <p className="text-center max-w-2xl mx-auto md:text-lg text-gray-300 mt-6">
            <span className="font-bold">SAFEAUTH®</span> ensures universal
            compatibility, empowering users to securely access their digital
            assets across a wide range of leading wallet providers. We offer
            hassle-free integration and unparalleled convenience for all.
          </p>
          <div className="flex items-center justify-center mt-16">
            <Image
              src={"/assets/graphic-1.svg"}
              height={400}
              width={400}
              alt="image"
            />
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-20 md:pb-28">
          <div className="flex items-center justify-center">
            <div className="button-gradient h-2 w-12 rounded-full"></div>
          </div>
          <h1 className="text-white text-center text-4xl font-bold mt-7 max-w-md mx-auto leading-[49px]">
            Engineered for Scalability
          </h1>
          <p className="text-center max-w-2xl mx-auto md:text-lg text-gray-300 mt-6">
            <span className="font-bold">SAFEAUTH®</span> is engineered for
            scalability, ensuring seamless growth alongside your needs. With
            robust infrastructure and flexible architecture, we can handle
            increasing demands, deliver reliable performance every step of the
            way.
          </p>
          <div className="flex items-center justify-center mt-16">
            <Image
              src={"/assets/graphic-2.svg"}
              height={300}
              width={300}
              alt="image"
            />
          </div>
        </div>
      </div>

      {/* <div className="pt-16 md:pt-24 overflow-x-hidden">
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
      </div> */}

      {/* Cards section */}
      {/* <div className="white-gradient">
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
      </div> */}

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
};

export default page;

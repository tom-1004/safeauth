"use client";

import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [initialize, setInitialize] = useState(
    `import { useState, useEffect } from "react" \nimport { SafeAuth } from "@SafeAuth \nimport { KeyProvider } from "SafeAuth/provider"
    \nconst safeAuth = new SafeAuth({
        \n   config: { chainConfig: chainConfig }
        \n   privateKeyProvider: privateKeyProvider,

})`
  );

  return (
    <main>

      {/* Hero section */}
      <div className="hero">
        <div className="max-w-6xl mx-auto px-6 pt-44 pb-24">
          <h1 className="text-2xl font-semibold text-white text-center">
            Introduction - Getting Started
          </h1>
          <Image
            src={"/assets/divider.svg"}
            className="hidden md:block mt-5"
            height={1100}
            width={1100}
            alt="image"
          />
          <p className="text-center text-[14px] text-gray-300 mt-6">
            <span className="font-bold">SAFEAUTH®</span> is an innovative
            open-source protocol enabling seamless connections between your
            crypto wallet and a myriad of decentralized applications and other
            wallets. Utilizing cutting-edge technology,{" "}
            <span className="font-bold">SAFEAUTH®</span> facilitates secure
            end-to-end encrypted connections via QR codes, empowering users to
            interact with dApps and securely sign transactions directly from
            their mobile wallets.
          </p>
        </div>
      </div>

      <div className="hero">
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <h1 className="text-2xl font-semibold text-white text-center">
            Installation
          </h1>
          <Image
            src={"/assets/divider.svg"}
            className="hidden md:block mt-5"
            height={1100}
            width={1100}
            alt="image"
          />
          <div className="w-full h-24 bg-black/15 rounded-lg flex items-center justify-center mt-8 md:mt-0">
            <p className="text-center text-[14px] text-gray-300">
              npm install --save safeauth@latest
            </p>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <h1 className="text-2xl font-semibold text-white text-center">
            Initialize <span className="font-bold">SAFEAUTH®</span>
          </h1>
          <Image
            src={"/assets/divider.svg"}
            className="hidden md:block mt-5"
            height={1100}
            width={1100}
            alt="image"
          />
          <textarea
            className="w-full bg-black/15 text-gray-300 text-[14px] rounded-lg outline-none p-7 mt-8 md:mt-0"
            value={initialize}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>

    </main>
  );
};

export default page;

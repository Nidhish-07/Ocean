import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import OpenSeaLogo from "../assets/images/Logomark-Blue.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="bg-[#04111d] w-screen p-5 py-3 flex">
      <Link href={"/"}>
        <div className="flex items-center cursor-pointer">
          <Image src={OpenSeaLogo} height={40} width={40}></Image>
          <div className="ml-3 text-white font-semibold text-2xl">Ocean</div>
        </div>
      </Link>

      <div className="flex flex-1 mx-3 w-max-[520px] items-center bg-[#363840] rounded-xl hover:bg-[#4c505c]">
        <div className="text-[#8a939b] mx-3 font-bold text-lg">
          <AiOutlineSearch />
        </div>
        <input
          type="text"
          placeholder="Search items..."
          className="h-10 w-full border-0 bg-transparent outline-none ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]"
        />
      </div>
      <div className="flex items-center justify-end">
        <Link href={"/collections/"}>
          <div className="px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer"></div>
        </Link>
        <div className="px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">
          Stats
        </div>
        <div className="px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">
          Resources
        </div>
        <div className="px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">
          Create
        </div>
        <div className="px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer">
          <CgProfile />
        </div>
        <div className="text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer">
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

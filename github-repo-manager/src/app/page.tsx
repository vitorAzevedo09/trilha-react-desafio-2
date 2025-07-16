"use client";
import Image from "next/image";
import gitLogo from '../../assets/github.png'
import Input from "@/components/Input";

export default function Home() {
  return (
    <>
      <div className="flex pt-20 w-full h-screen flex-col items-center bg-gray-900">
        <Image
          src={gitLogo}
          alt=""
          width={202}
          height={202}
          className="rounded-full mb-2"
        />
        <Input value="" onChange={() => { }} />
      </div>
    </>
  );
}


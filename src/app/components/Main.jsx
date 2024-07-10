import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Main() {
  return (
    <main className="grid md:grid-cols-[60%_40%]">
      <div className="flex flex-col gap-y-10 items-start py-10 px-8">
        <h1 className="capitalize text-8xl font-semibold">
          {" "}
          Manage your tasks Quickly
        </h1>
        <p className="text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua.
        </p>
        <button>
          <Link
            href={"/getstarted"}
            className="bg-slate-900 rounded-md py-2 px-4 shadow-lg text-center text-white"
          >
            Create a Task
          </Link>
        </button>
      </div>
      <div>
        <Image
          src="/task-head.jpg"
          alt="Manage your tasks"
          width="500"
          height="500"
          className="rounded-full shadow-lg"
        />
      </div>
    </main>
  );
}

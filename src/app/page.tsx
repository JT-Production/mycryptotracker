"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import {TableDemo} from "@/components/Table";
import { useState } from "react";




export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Hero />
      <TableDemo searchValue={searchValue} setSearchValue={setSearchValue}/>
    </>
  );
}

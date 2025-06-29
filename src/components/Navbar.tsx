"use client"
import { useTheme } from "next-themes"
import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import { GoSun } from "react-icons/go"
import { IoMoonOutline } from "react-icons/io5"

interface NavbarProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

const Navbar = ({searchValue, setSearchValue} : NavbarProps) => {
    const [mode, setMode] = useState("dark");
    const { theme, setTheme } = useTheme()

  return (
    <div className="flex justify-center items-center p-3 shadow-md lg:px-20">
        <div className="flex items-center">
            {
                mode === "dark" ? (
                    <img src="/white-logo T.png" alt="logo" className="w-50 h- rounded-full"/>
                ) : (
                    <img src="/black-logo T.png " alt="logo" className="w-50 h- rounded-full"/>
                )
            }
            
        </div>
        <div className="mx-auto flex items-center">
            <span className="border rounded-l-md border-gray-200 p-2.5 border-r-transparent"><CiSearch className="text-xl"/></span>
            <input type="text" value={searchValue} onChange={(e) => setSearchValue?.(e.target.value)} className="border rounded-r-md border-l-transparent border-gray-200  w-100 py-2.5 px-1 text-sm  outline-none" placeholder="Search"/>

        </div>
        <div className="">
            
            <ul className="flex space-x-5 font-raj dark:text-white items-center">
            <li><a href="#" className="">Watchlist</a></li>
            {/* <li><a href="#" className="text-gray-700 hover:text-blue-500"><GoSun /> <IoMoonOutline /> */}
            {mode === "dark" ? (
                <button onClick={() => {setMode("light"); setTheme("light")}} className="ml-2 cursor-pointer  p-2.5 rounded-md border border-zinc-400"><GoSun /> </button>
            ) : (
                <button onClick={() => {setMode("dark"); setTheme("dark")}} className="ml-2 cursor-pointer p-2.5 rounded-md border border-zinc-400"> <IoMoonOutline /></button>
            )}
            {/* </a></li> */}
            <li><a href="#" className={mode === "dark" ? "bg-white p-3 px-4 text-black rounded-lg" : "bg-black p-3 px-4 text-white rounded-lg"}>Get started</a></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar
import Image from "next/image"
import { Chart } from "./Chart"

const Hero = () => {
  return (
    <div>
        <div className="grid grid-cols-3 p-3 items-center justify-center lg:px-20 gap-2">
            <div className="col-span-2">
                <Chart/>
            </div>
            <div className="">
              <Image width={1000} height={1000} src="/logo 2.png" alt="" className="h-80 rounded-lg"/>
            </div>
        </div>
    </div>
  )
}

export default Hero
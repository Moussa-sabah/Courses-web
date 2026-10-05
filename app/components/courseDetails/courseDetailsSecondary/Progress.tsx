
import { BiSolidDownArrow } from "react-icons/bi";

export default function Progress() {
    return (


            <div className="relative w-full bg-[linear-gradient(to_right,#6ABD8A_30%,#E6E6E6_30%)] h-1 rounded-full">
                <div className="absolute bottom-3 left-[calc(30%-16px)] flex flex-col items-center gap-px ">
                    <p className="border-2 border-[#C8C8C8]  rounded-full w-8 h-8 flex items-center justify-center text-xs font-semibold text-[#485293] ">You</p>
                    <BiSolidDownArrow className="text-[8px] text-[#C8C8C8]" />
                </div>
                 <p className="absolute text-xs top-3 font-semibold text-[#485293] left-[calc(30%-20px)]  w-10 text-center">30%</p>
            </div>

    )
}

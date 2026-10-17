import Image from "next/image";



export default function LogoAndSearch() {
    return (
        <div className="flex gap-3 3xs:gap-4 md:gap-10 items-center">
            <h1 className="  font-extrabold md:font-semibold text-lg md:text-3xl  font-mono cursor-pointer">Skillery</h1>
            <div className="border-line border w-38 3xs:w-43 xs:w-fit rounded-full flex items-center py-1.5 px-3 md:p-1 md:pl-4 gap-2">
                <input type="text" className="outline-none text-sm font-semibold  w-full xs:w-fit placeholder:font-normal " placeholder="Search..." />
                <button className="bg-primary rounded-full w-7 h-7  items-center justify-center cursor-pointer hidden xs:flex">
                    <Image
                        src="/icons/search-alt-svgrepo-com (18).svg"
                        alt="search"
                        width={15}
                        height={15}
                        className="block"
                    />
                </button>
            </div>
        </div>
    )
}

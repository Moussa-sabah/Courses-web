import Image from "next/image";



export default function LogoAndSearch() {
    return (
        <div className="flex gap-10 items-center">
            <h1 className="font-semibold text-3xl  font-mono cursor-pointer">Skillery</h1>
            <div className="border-line border  rounded-full flex items-center p-1 pl-3 gap-2">
                <input type="text" className="outline-none text-sm font-semibold" placeholder="Search..." />
                <button className="bg-primary rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
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

import Image from "next/image";


export default function NotificationsAndAccount() {
    return (
        <div className="flex items-center gap-4 lg:gap-6">
            <Image src='/icons/message-square-lines-svgrepo-com (1).svg' alt="messages" className="cursor-pointer" width={22} height={22} />
            <div className="relative">
                <p className="absolute w-1.5 h-1.5 rounded-full top-0.5 right-1 bg-redColor "></p>
                <Image src='/icons/notification-svgrepo-com.svg' alt="notifications" width={22} height={22} className="cursor-pointer" />
            </div>
            <div className="flex items-center gap-2 lg:gap-3 h-8">
                <p className="bg-blue-400 text-white w-8 h-full rounded-md flex items-center justify-center  text-xs font-semibold border-line border cursor-pointer">MS</p>
                <div className=" h-full">
                    <p className="font-semibold text-sm">Moussa Sabah</p>
                    <p className="text-secondary text-xs ">Frontend Developer</p>
                </div>
            </div>
        </div>
    )
}

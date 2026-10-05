
import { HiArrowNarrowRight } from "react-icons/hi";

export default function AddComment() {
  return (
    <div className='flex flex-col gap-7 items-start'>
      <textarea placeholder='Write a comment' className='shadow-[0px_0px_40px_0px_#DCDCDE] w-full h-50 rounded-md p-5'/>
      <button className='bg-[#41B69D] text-white py-4 px-8 rounded-md font-semibold flex items-center gap-3'>Submit Review <HiArrowNarrowRight className="text-lg"/></button>
    </div>
  )
}

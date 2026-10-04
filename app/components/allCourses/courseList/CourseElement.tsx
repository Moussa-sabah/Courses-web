import { Course } from "@/app/src/types/course";
import Image from "next/image";
import Link from "next/link";

interface Props {
    course: Course
}
export default function CourseElement({ course }: Props) {
    return (
        <Link href={`./course-details/${course.id}`} className="border border-line rounded-lg h-80 p-1 flex flex-col">
            <Image src='/courseImage/nextJsImage.png' alt="course" width={100} height={100} className="w-full h-3/5 object-cover rounded-lg " />
            <div className="px-3 py-2 flex flex-col   justify-between flex-1">
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-lg">{course.title}</p>
                    <p className="text-xs  text-secondary font-semibold line-clamp-2">{course.description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs  font-semibold">
                        <p>Progress:</p>
                        <div className="h-5 w-5 rounded-full bg-[conic-gradient(var(--color-green-500)_270deg,var(--color-gray-300)_270deg)] flex items-center justify-center p-1">
                            <div className="h-full w-full bg-white rounded-full"></div>
                        </div>
                        <p>40%</p>
                    </div>
                    <button className="text-sm border-2 border-line font-semibold px-3 py-0.5 rounded-md capitalize">{course.status === 'completed' ? 'view' : 'start'}</button>
                </div>
            </div>
        </Link>
    )
}

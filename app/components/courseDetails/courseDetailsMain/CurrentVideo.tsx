import { Course } from "@/app/src/types/course"


interface Props {
    course: Course
}

export default function CurrentVideo({ course }: Props) {

    return (


     
            <div className="relative w-full aspect-video mb-8">
                <iframe className="absolute top-0 left-0 w-full h-full rounded-md" src={course?.lectures[0].videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen" ></iframe>
            </div>
 


    )
}

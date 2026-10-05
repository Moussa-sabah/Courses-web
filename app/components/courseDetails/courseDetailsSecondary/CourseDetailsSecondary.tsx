import LecturesList from "./lecturesList/LecturesList";
import Progress from "./Progress";


export default function CourseDetailsSecondary() {
    return (
        <div className=" w-4/10 flex flex-col gap-17">
            <h1 className="text-2xl font-semibold">Topics for This Course</h1>
            <Progress />
            <LecturesList/>
        </div>
    )
}

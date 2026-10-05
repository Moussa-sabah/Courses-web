
import { FaComments } from "react-icons/fa6";
import { RiQuestionnaireFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import '../style.css'

export default function CourseActions() {
    return (
        <div className="flex items-center gap-3 mb-13">
            <FaComments className="actionBtn" />
            <RiQuestionnaireFill className="actionBtn" />
            <MdLeaderboard className="actionBtn" />
        </div>
    )
}

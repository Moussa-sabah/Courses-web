'use client'

import { FaComments } from "react-icons/fa6";
import { RiQuestionnaireFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import '../../courseDetails.css'
import Leaderboard from "./leaderboard/Leaderboard";
import { useState } from "react";
import Image from "next/image";
import PopupBg from "../../PopupBg";
import AddQuestion from "./AddQuestion";

export default function CourseActions() {

    const [showLeaderboard, setShowLeaderboard] = useState<boolean>(false)
    const [showAddQuestion, setShowAddQuestion] = useState<boolean>(false)


    function handleEnd() {
        setShowLeaderboard(false)
        setShowAddQuestion(false)
    }
    return (
        <div className="mb-13 ">
            <div className="flex items-center gap-3">
                <button className="actionBtn"><Image src='/icons/list-bullet-svgrepo-com (1).svg' width={19} height={19} alt='' /></button>
                <button className="actionBtn">  <FaComments /></button>
                <button onClick={() => setShowAddQuestion(true)} className="actionBtn">  <RiQuestionnaireFill /></button>
                <button onClick={() => setShowLeaderboard(true)} className="actionBtn">  <MdLeaderboard /></button>
            </div>
            <PopupBg show={showLeaderboard || showAddQuestion} handleEnd={handleEnd} />
            < Leaderboard showLeaderboard={showLeaderboard} />
            <AddQuestion showAddQuestion={showAddQuestion} />
        </div>
    )
}

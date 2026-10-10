'use client'

import { RiQuestionnaireFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import { MdComment } from "react-icons/md";
import '../courseDetails.css'
import Leaderboard from "./leaderboard/Leaderboard";
import { useState } from "react";
import Image from "next/image";
import AddQuestion from "./AddQuestion";
import PopupBg from "../PopupBg";


interface Props {
    scrollToComments: () => void
    scrollToLessons: () => void
}

export default function CourseActions({ scrollToComments, scrollToLessons }: Props) {

    const [showLeaderboard, setShowLeaderboard] = useState<boolean>(false)
    const [showAddQuestion, setShowAddQuestion] = useState<boolean>(false)




    function handleEndLeaderboard() {
        setShowLeaderboard(false)
    }

    function handleEndAllPopups() {
        setShowAddQuestion(false)
        setShowLeaderboard(false)
    }
    return (
        <div className=" ">
            <div className="flex items-center gap-3">
                <button onClick={scrollToLessons} className="actionBtn"><Image src='/icons/list-bullet-svgrepo-com (1).svg' width={19} height={19} alt='' /></button>
                <button onClick={scrollToComments} className="actionBtn">  <MdComment /></button>
                <button onClick={() => setShowAddQuestion(true)} className="actionBtn">  <RiQuestionnaireFill /></button>
                <button onClick={() => setShowLeaderboard(true)} className="actionBtn">  <MdLeaderboard /></button>
            </div>
            <PopupBg show={showLeaderboard || showAddQuestion} handleEnd={handleEndAllPopups} />
            < Leaderboard showLeaderboard={showLeaderboard} handleEnd={handleEndLeaderboard} />
            <AddQuestion showAddQuestion={showAddQuestion} />
        </div>
    )
}

'use client'

import { RiQuestionnaireFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import { MdComment } from "react-icons/md";
import '../../courseDetails.css'
import Leaderboard from "./leaderboard/Leaderboard";
import { useState } from "react";
import Image from "next/image";
import PopupBg from "../../PopupBg";
import AddQuestion from "./AddQuestion";


interface Props {
    scrollToComments: () => void
}

export default function CourseActions({ scrollToComments }:Props) {

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
                <button onClick={scrollToComments} className="actionBtn">  <MdComment /></button>
                <button onClick={() => setShowAddQuestion(true)} className="actionBtn">  <RiQuestionnaireFill /></button>
                <button onClick={() => setShowLeaderboard(true)} className="actionBtn">  <MdLeaderboard /></button>
            </div>
            <PopupBg show={showLeaderboard || showAddQuestion} handleEnd={handleEnd} />
            < Leaderboard showLeaderboard={showLeaderboard} />
            <AddQuestion showAddQuestion={showAddQuestion} />
        </div>
    )
}

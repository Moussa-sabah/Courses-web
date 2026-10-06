'use client'

import { FaComments } from "react-icons/fa6";
import { RiQuestionnaireFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import '../../style.css'
import Leaderboard from "./leaderboard/Leaderboard";
import { useState } from "react";

export default function CourseActions() {

    const [showLeaderboard, setShowLeaderboard] = useState<boolean>(false)

    return (
        <div className="mb-13 ">
            <div className="flex items-center gap-3">
                <button className="actionBtn">  <FaComments /></button>
                <button className="actionBtn">  <RiQuestionnaireFill /></button>
                <button className="actionBtn">  <MdLeaderboard onClick={() => setShowLeaderboard(true)} /></button>
            </div>
            <div onClick={() => setShowLeaderboard(false)} className={`${!showLeaderboard ? 'hidden' : ''} fixed z-10 bg-black/50 backdrop-blur-sm left-0 top-0 w-full h-full  `} />
            {showLeaderboard && < Leaderboard  />}

        </div>
    )
}

import { Comment } from "@/types/Course";

export const comments: Comment[] = [
  {
    id: "c1",
    text: "Honestly one of the best explanations of state management I’ve seen! The practical examples with Zustand made everything click instantly.",
    userImage: "/usersImages/user1.jpg",
    username: "ali kareem",
    createdAt: "Nov 23,2022",
  },
  {
    id: "c2",
    text: "Great lesson! Quick question though: on minute 04:15, why did we use map instead of mutating the array directly? Does React fail to trigger a re-render otherwise?",
    userImage: "/usersImages/user4.jpg",
    username: "marwan salah",
    createdAt: "Jun 11,2025",
  },
  {
    id: "c3",
    text: "Solid content overall, but the audio volume drops slightly in the middle section. Would love to see a follow-up lesson on handling persistent state with middleware!",
    userImage: "/usersImages/user3.jpg",
    username: "mohammed hasan",
    createdAt: "Oct 2,2026",
  },
];

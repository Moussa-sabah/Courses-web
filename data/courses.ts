import { Course } from "../types/Course";
import { MCQS } from "./MCQS";

export const Courses: Course[] = [
  {
    id: "1",
    title: "Next.js 13 Crash Course Tutorial",
    description:
      "In this Next 13 tutorial series, you will learn how to use Next.js to make a simple project, using the new app router & server components.",
    thumbnailImage: "/courseImage/nextJsImage.png",
    status: "not_started",
    lastVisitedLesson: {
      id: "l11",
      title:
        "Next.js 13 Crash Course Tutorial #1 - Introduction & New Features",
      videoId: "TJQbDPGzm0Y",
      status: "not_started",
    },
    completedLessonsIds: [],
    lessons: [
      {
        id: "l11",
        title:
          "Next.js 13 Crash Course Tutorial #1 - Introduction & New Features",
        videoId: "TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l12",
        title:
          "Next.js 13 Crash Course Tutorial #2 - SSR & Server Components (theory)",
        videoId: "TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l13",
        title: "Next.js 13 Crash Course Tutorial #3 - Pages & Routes",
        videoId: "TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l14",
        title: "Next.js 13 Crash Course Tutorial #4 - Layouts & Links",
        videoId: "TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l15",
        title: "Next.js 13 Crash Course Tutorial #5 - Styles, Fonts & Images",
        videoId: "TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l16",
        title:
          "Next.js 13 Crash Course Tutorial #6 - Fetching & Revalidating Data",
        videoId: "TJQbDPGzm0Y",
        status: "not_started",
      },
    ],

    comments: [
      {
        id: "c11",
        text: "Honestly one of the best explanations of state management I’ve seen! The practical examples with Zustand made everything click instantly.",
        userImage: "/usersImages/user1.jpg",
        username: "ali kareem",
        createdAt: "Oct 10,2026",
      },
      {
        id: "c12",
        text: "Great lesson! Quick question though: on minute 04:15, why did we use map instead of mutating the array directly? Does React fail to trigger a re-render otherwise?",
        userImage: "/usersImages/user4.jpg",
        username: "ali kareem",
        createdAt: "Oct 10,2026",
      },
      {
        id: "c13",
        text: "Solid content overall, but the audio volume drops slightly in the middle section. Would love to see a follow-up lesson on handling persistent state with middleware!",
        userImage: "/usersImages/user3.jpg",
        username: "ali kareem",
        createdAt: "Oct 10,2026",
      },
    ],
    quiz: {
      timer: 5,
      MCQS,
      userAnswers: [],
    },
  },
  {
    id: "2",
    title: "Next.js 13 Crash Course Tutorial",
    description:
      "In this Next 13 tutorial series, you will learn how to use Next.js to make a simple project, using the new app router & server components.",
    thumbnailImage: "/courseImage/nextJsImage.png",
    status: "not_started",
    completedLessonsIds: [],
    lastVisitedLesson: {
      id: "l21",
      title:
        "Next.js 13 Crash Course Tutorial #1 - Introduction & New Features",
      videoId: "TJQbDPGzm0Y",
      status: "not_started",
    },
    lessons: [
      {
        id: "l21",
        title:
          "Next.js 13 Crash Course Tutorial #1 - Introduction & New Features",
        videoId: "TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l22",
        title:
          "Next.js 13 Crash Course Tutorial #2 - SSR & Server Components (theory)222222222222222222",
        videoId: "TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l23",
        title: "Next.js 13 Crash Course Tutorial #3 - Pages & Routes",
        videoId: "TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l24",
        title: "Next.js 13 Crash Course Tutorial #4 - Layouts & Links",
        videoId: "TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l25",
        title: "Next.js 13 Crash Course Tutorial #5 - Styles, Fonts & Images",
        videoId: "TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l26",
        title:
          "Next.js 13 Crash Course Tutorial #6 - Fetching & Revalidating Data",
        videoId: "TJQbDPGzm0Y",
        status: "not_started",
      },
    ],

    comments: [
      {
        id: "c21",
        text: "Honestly one of the best explanations of state management I’ve seen! The practical examples with Zustand made everything click instantly.",
        userImage: "/usersImages/user1.jpg",
        username: "ali kareem",
        createdAt: "Oct 10,2026",
      },
      {
        id: "c22",
        text: "Great lesson! Quick question though: on minute 04:15, why did we use map instead of mutating the array directly? Does React fail to trigger a re-render otherwise?",
        userImage: "/usersImages/user4.jpg",
        username: "ali kareem",
        createdAt: "Oct 10,2026",
      },
      {
        id: "c23",
        text: "Solid content overall, but the audio volume drops slightly in the middle section. Would love to see a follow-up lesson on handling persistent state with middleware!",
        userImage: "/usersImages/user3.jpg",
        username: "ali kareem",
        createdAt: "Oct 10,2026",
      },
    ],
    quiz: {
      timer: 300,
      MCQS,
      userAnswers: [],
    },
  },
];

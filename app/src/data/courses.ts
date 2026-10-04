import { Course } from "../types/course";

export const courses: Course[] = [
  {
    id: "1",
    title: "Next.js 13 Crash Course Tutorial",
    description:
      "In this Next 13 tutorial series, you will learn how to use Next.js to make a simple project, using the new app router & server components.",
    thumbnailImage: "/courseImage/nextJsImage.png",
    status: "not_started",
    lectures: [
      {
        id: "l1",
        title:
          "Next.js 13 Crash Course Tutorial #1 - Introduction & New Features",
        videoSrc: "https://youtu.be/TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l2",
        title:
          "Next.js 13 Crash Course Tutorial #2 - SSR & Server Components (theory)",
        videoSrc: "https://youtu.be/TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l3",
        title: "Next.js 13 Crash Course Tutorial #3 - Pages & Routes",
        videoSrc: "https://youtu.be/TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l4",
        title: "Next.js 13 Crash Course Tutorial #4 - Layouts & Links",
        videoSrc: "https://youtu.be/TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l5",
        title: "Next.js 13 Crash Course Tutorial #5 - Styles, Fonts & Images",
        videoSrc: "https://youtu.be/TJQbDPGzm0Y",
        status: "not_started",
      },
      {
        id: "l6",
        title:
          "Next.js 13 Crash Course Tutorial #6 - Fetching & Revalidating Data",
        videoSrc: "https://youtu.be/TJQbDPGzm0Y",
        status: "not_started",
      },
    ],

    comments: ["sdjfkl"],
  },
];

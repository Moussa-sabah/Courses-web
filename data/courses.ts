import { Course } from "../types/Course";
import { comments } from "./Comments";
import { MCQS } from "./MCQS";

export const courses: Course[] = [
  {
    id: "1",
    title: "Learn HTML In Arabic",
    instructor: "Elzero Web School",
    description:
      "Master HTML from scratch and build structured, responsive web pages with clean, modern code.",
    thumbnailImage: "/coursesImages/htmlCourse2.jpg",
    status: "not_started",
    lastVisitedLesson: {
      id: "l1",
      title: "Introduction and What I Need To Learn",
      videoId: "6QAELgirvjs",
      status: "not_started",
    },
    completedLessonsIds: [],
    lessons: [
      {
        id: "l1",
        title: "Introduction and What I Need To Learn",
        videoId: "6QAELgirvjs",
        status: "not_started",
      },
      {
        id: "l2",
        title: "Elements And Browser",
        videoId: "7LxA9qXUY5k",
        status: "not_started",
      },
      {
        id: "l3",
        title: "First Project And First Page",
        videoId: "QG5aEmS9Fu0",
        status: "not_started",
      },
      {
        id: "l4",
        title: "Head And Nested Elements",
        videoId: "dVgTBEYCseU",
        status: "not_started",
      },
      {
        id: "l5",
        title: "Comments And Use Cases",
        videoId: "3lXuWHtm7PM",
        status: "not_started",
      },
    ],

    comments: comments,
    quiz: {
      timer: 300,
      MCQS,
      userAnswers: [],
    },
  },
  {
    id: "2",
    title: "Learn CSS In Arabic",
    instructor: "Elzero Web School",
    description:
      "Learn Flexbox, Grid, and responsive design techniques to build beautiful, mobile-friendly websites effortlessly.",
    thumbnailImage: "/coursesImages/cssCourse.jpg",
    status: "not_started",
    lastVisitedLesson: {
      id: "l1",
      title: "Introduction And What I Need To Learn",
      videoId: "X1ulCwyhCVM",
      status: "not_started",
    },
    completedLessonsIds: [],
    lessons: [
      {
        id: "l1",
        title: "Introduction And What I Need To Learn",
        videoId: "X1ulCwyhCVM",
        status: "not_started",
      },
      {
        id: "l2",
        title: "Your First Project And Syntax",
        videoId: "89VLfs-wpEY",
        status: "not_started",
      },
      {
        id: "l3",
        title: "Element Styling",
        videoId: "66sjwQ-hB64",
        status: "not_started",
      },
      {
        id: "l4",
        title: "Name Conventions And Rules",
        videoId: "xkNpIsbxMuo",
        status: "not_started",
      },
      {
        id: "l5",
        title: "Background - Color, Image, Repeat",
        videoId: "-srybsn3YDM",
        status: "not_started",
      },
      {
        id: "l6",
        title: "Background - Attachment, Position, Size",
        videoId: "8sooTBY5C4w",
        status: "not_started",
      },
    ],

    comments: comments,
    quiz: {
      timer: 300,
      MCQS,
      userAnswers: [],
    },
  },
  {
    id: "3",
    title: "Learn JavaScript in Arabic",
    instructor: "Elzero Web School",
    description:
      "Learn core JavaScript concepts, DOM manipulation, and modern ES6+ features to build interactive web projects.",
    thumbnailImage: "/coursesImages/jsCourse.webp",
    status: "not_started",
    lastVisitedLesson: {
      id: "l1",
      title: "Introduction And What Is JavaScript ?",
      videoId: "GM6dQBmc-Xg",
      status: "not_started",
    },
    completedLessonsIds: [],
    lessons: [
      {
        id: "l1",
        title: "Introduction And What Is JavaScript ?",
        videoId: "GM6dQBmc-Xg",
        status: "not_started",
      },
      {
        id: "l2",
        title: "How To Study The Course ?",
        videoId: "MAauLwSHO6Y",
        status: "not_started",
      },
      {
        id: "l3",
        title: "Setting Up Environment And Tools",
        videoId: "5wAtDN_CLgI",
        status: "not_started",
      },
      {
        id: "l4",
        title: "Work With Chrome Developer Tools",
        videoId: "ig_1bvufUPo",
        status: "not_started",
      },
    ],

    comments: comments,
    quiz: {
      timer: 300,
      MCQS,
      userAnswers: [],
    },
  },
  {
    id: "4",
    title: "Mastering Python",
    instructor: "Elzero Web School",
    description:
      "A step-by-step guide to learning Python from scratch, perfect for beginners in coding.",
    thumbnailImage: "/coursesImages/pythonCourse.avif",
    status: "not_started",
    lastVisitedLesson: {
      id: "l1",
      title: "Introduction And What's Python",
      videoId: "mvZHDpCHphk",
      status: "not_started",
    },
    completedLessonsIds: [],
    lessons: [
      {
        id: "l1",
        title: "Introduction And What's Python",
        videoId: "mvZHDpCHphk",
        status: "not_started",
      },
      {
        id: "l2",
        title: "What I Need To Learn ?",
        videoId: "02a5T6ktx8M",
        status: "not_started",
      },
      {
        id: "l3",
        title: "Syntax And Your First App",
        videoId: "xiMHoMVWdI4",
        status: "not_started",
      },
      {
        id: "l4",
        title: "Comments And How To Use It",
        videoId: "YsENRLNaYug",
        status: "not_started",
      },
    ],

    comments: comments,
    quiz: {
      timer: 300,
      MCQS,
      userAnswers: [],
    },
  },
  {
    id: "5",
    title: "Mastering Laravel",
    instructor: "Elzero Web School",
    description:
      "Learn routing, authentication, Eloquent ORM, and RESTful APIs to develop professional modern backend systems.",
    thumbnailImage: "/coursesImages/laravelCourse.jpg",
    status: "not_started",
    lastVisitedLesson: {
      id: "l1",
      title: "Introduction And What You Need To Learn ?",
      videoId: "bXjRQM_VK_I",
      status: "not_started",
    },
    completedLessonsIds: [],
    lessons: [
      {
        id: "l1",
        title: "Introduction And What You Need To Learn ?",
        videoId: "bXjRQM_VK_I",
        status: "not_started",
      },
      {
        id: "l2",
        title: "Learn How To Learn",
        videoId: "ZOQ_gX7iigU",
        status: "not_started",
      },
      {
        id: "l3",
        title: "Everything About Requirements And Issues",
        videoId: "wbGVi3fnbiQ",
        status: "not_started",
      },
      {
        id: "l4",
        title: "Composer And Packages",
        videoId: "Ib3e7HFZ3ko",
        status: "not_started",
      },
    ],

    comments: comments,
    quiz: {
      timer: 300,
      MCQS,
      userAnswers: [],
    },
  },
  {
    id: "6",
    title: "Create Template With HTML, CSS, JavaScript",
    instructor: "Elzero Web School",
    description:
      "A complete beginner guide to mastering structure, styling, and interactivity for modern web projects.",
    thumbnailImage: "/coursesImages/templateCourse.jpg",
    status: "not_started",
    lastVisitedLesson: {
      id: "l1",
      title: "Intro And Prepare Everything",
      videoId: "vedT2jk3hi4",
      status: "not_started",
    },
    completedLessonsIds: [],
    lessons: [
      {
        id: "l1",
        title: "Intro And Prepare Everything",
        videoId: "vedT2jk3hi4",
        status: "not_started",
      },
      {
        id: "l2",
        title: "Get Inspiration and Create Landing Page",
        videoId: "B09V4oeeNBM",
        status: "not_started",
      },
      {
        id: "l3",
        title: "Styling Landing Page Part 1",
        videoId: "0RMHmPJMwRM",
        status: "not_started",
      },
      {
        id: "l4",
        title: "Styling Landing Page Part 2",
        videoId: "NSWsn5oz-Z0",
        status: "not_started",
      },
      {
        id: "l5",
        title: "Randomly Change Background With JavaScript",
        videoId: "ArZsrX3osX0",
        status: "not_started",
      },
      {
        id: "l6",
        title: "Create The Settings Box",
        videoId: "_HFognT7dnA",
        status: "not_started",
      },
      {
        id: "l7",
        title: "Settings Box Toggle Main Classes",
        videoId: "rgreeHMjtXI",
        status: "not_started",
      },
    ],

    comments: comments,
    quiz: {
      timer: 300,
      MCQS,
      userAnswers: [],
    },
  },
];

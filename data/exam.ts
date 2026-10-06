import { Quiz } from "../types/course";

export const quiz: Quiz[] = [
  {
    id: "q1",
    question: "Which language is used to structure the content of a web page?",
    options: ["HTML", "CSS", "Python", "Java"],
    correctAnswerIndex: 0,
  },
  {
    id: "q2",
    question: "Which CSS property is used to change the text color?",
    options: ["Font", "Background", "Display", "Color"],
    correctAnswerIndex: 3,
  },
  {
    id: "q3",
    question:
      "Which component is used to store multiple values in a single variable?",
    options: ["Function", "Array", "String", "Boolean"],
    correctAnswerIndex: 1,
  },
  {
    id: "q4",
    question:
      "Which keyword is used to stop a loop execution immediately in most programming languages?",
    options: ["Continue", "Stop", "Break", "Exit"],
    correctAnswerIndex: 2,
  },
  {
    id: "q5",
    question:
      "What is the term for a programming error that prevents the code from running properly?",
    options: ["Feature", "Bug", "Loop", "Variable"],
    correctAnswerIndex: 1,
  },
];

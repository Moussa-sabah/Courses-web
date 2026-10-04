export interface Lecture {
  id: string;
  title: string;
  videoSrc: string;
  status: "not_started" | "completed";
}

export interface Exam {
  id: string;
  question: string;
  choices: string[];
  correctAnswerIndex: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnailImage: string;
  status: "not_started" | "in_progress" | "completed";
  lectures: Lecture[];
  comments: string[];
}

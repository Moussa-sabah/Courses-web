export interface Lecture {
  id: string;
  title: string;
  videoSrc: string;
  status: "not_started" | "completed";
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
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

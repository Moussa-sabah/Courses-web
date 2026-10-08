export interface Lecture {
  id: string;
  title: string;
  videoId: string;
  status: "not_started" | "completed";
}

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  selected: boolean;
}

export interface Comment {
  id: string;
  text: string;
  username: string;
  userImage: string;
  createdAt: string;
}

export interface Quiz {
  timer: number;
  MCQS: MCQ[];
  userAnswers: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnailImage: string;
  status: "not_started" | "in_progress" | "completed";
  lastLecture: Lecture;
  lectures: Lecture[];
  completedLecturesIds: string[];
  comments: Comment[];
  quiz: Quiz;
}

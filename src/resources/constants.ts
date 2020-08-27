// TYPES & INTERFACES
export type QUIZ_STAGE = "HOME" | "IN_QUIZ" | "RESULTS"
export type TYPE_ANSWER = "True" | "False"
export type TYPE_ANSWER_INCORRECT = Array<TYPE_ANSWER>

export interface QuestionFormat {
  category: string
  type: string
  question: string
  correct_answer: TYPE_ANSWER
  incorrect_answers: TYPE_ANSWER_INCORRECT

  attempted_answer: TYPE_ANSWER
  is_correct: boolean
}

export interface QuizState {
  stage: QUIZ_STAGE
  timeStart: Date
  timeEnd: Date
  questionsWithAnswers: Array<QuizState>
  questionCurrentIndex: number
  goToQuestion: number

  startNew: boolean
  getFreshQuestions: boolean
  autoStart: boolean
}

// CONSTANTS
export const ANSWER_TYPES = {
  boolean: {
    True: "True",
    False: "False",
  },
}

export const DEFAULT_QUESTION: QuestionFormat = {
  category: "TOPIC: UNKNOWN",
  type: "boolean",
  question: "BAD QUESTION?",
  correct_answer: "True",
  incorrect_answers: ["False"],

  attempted_answer: null,
  is_correct: null,
}

export const DEFAULT_STATE_QUIZ: QuizState = {
  stage: "HOME",
  timeStart: null,
  timeEnd: null,
  questionsWithAnswers: [],
  questionCurrentIndex: 0,
  goToQuestion: 0,

  startNew: false,
  getFreshQuestions: false,
  autoStart: false,
}

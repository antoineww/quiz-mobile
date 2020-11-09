// @ts-ignore
import { XmlEntities } from "html-entities"
import { DEFAULT_QUESTION, QuestionFormat } from "../constants/constants

export const getQuizProgess = (
  questionCurrentIndex = -1,
  questionsWithAnswers = []
) => `${questionCurrentIndex + 1} of ${questionsWithAnswers.length}`

export const getQuizScore = (questionsWithAnswers = []) => {
  const numerator = questionsWithAnswers.filter(
    (question) => question.is_correct === true
  ).length
  const denominator = questionsWithAnswers.length

  let percentage = 0
  let fraction = ""
  if (numerator > 0 && denominator > 0) {
    percentage = Math.round((numerator / denominator) * 100)
    fraction = `${numerator} / ${denominator}`
  }

  return {
    fraction,
    percentage,
  }
}

// TODO: Can be replaced with Typescript interface 'QuestionFormat'
export const ensureCriticalQuestionProperties = (
  possibleQuestionWithAnswer: QuestionFormat
) => {
  const questionWithAnswer = { ...possibleQuestionWithAnswer }

  questionWithAnswer.attempted_answer = DEFAULT_QUESTION.attempted_answer

  questionWithAnswer.is_correct = DEFAULT_QUESTION.is_correct

  if (
    typeof questionWithAnswer.correct_answer !== "string" ||
    !Array.isArray(questionWithAnswer.incorrect_answers)
  ) {
    questionWithAnswer.correct_answer = DEFAULT_QUESTION.correct_answer

    questionWithAnswer.incorrect_answers = DEFAULT_QUESTION.incorrect_answers
  }

  return questionWithAnswer
}

export const makeAQuizQuestion = (questionWithAnswer: QuestionFormat) => {
  // TODO: Can be replaced with Typescript interface 'QuestionFormat'
  const processedQuestionWithAnswer = {
    ...DEFAULT_QUESTION,
    ...questionWithAnswer,
  }

  ensureCriticalQuestionProperties(processedQuestionWithAnswer)
  //

  // Parse html characters
  const entities = new XmlEntities()
  const parsedQuestion = entities.decode(processedQuestionWithAnswer.question)
  processedQuestionWithAnswer.question = parsedQuestion

  return processedQuestionWithAnswer
}

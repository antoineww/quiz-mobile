import React from "react";
import { getQuizProgess } from "../../../helpers/common";
import { BooleanButtonsSection } from "./booleanButtonsSection";
import { QuizNotFound } from "./quizNotFound";

export const QuizContent = (props = {}) => {
  const { stateQuiz, setStateQuiz } = props;

  const { questionsWithAnswers, questionCurrentIndex } = stateQuiz;

  if (!Array.isArray(questionsWithAnswers) || questionsWithAnswers.length < 1)
    return <QuizNotFound />;

  const currentQuestion = questionsWithAnswers[questionCurrentIndex];

  const booleanButtonsSection = (
    <BooleanButtonsSection
      {...{
        stateQuiz,
        setStateQuiz,
        questionCurrentIndex,
        questionsWithAnswers,
        currentQuestion
      }}
    />
  );

  const quizProgress = getQuizProgess(
    questionCurrentIndex,
    questionsWithAnswers
  );

  return (
    <View className="quiz-content">
      <Text>{currentQuestion.category}</Text>
      <View className="box">
        <Text className="question">{currentQuestion.question}</Text>
        {booleanButtonsSection}
      </View>
      <Text>{quizProgress}</Text>
    </View>
  );
};

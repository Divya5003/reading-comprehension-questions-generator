import React from 'react';
import { useLocation } from 'react-router-dom';

const Answer = () => {
    const location = useLocation();
    const { userAnswers, questionnaire } = location.state;

    const checkAnswer = (question, userAnswer) => {
        if (questionnaire.singlewordques?.ques.includes(question)) {
            const index = questionnaire.singlewordques.ques.indexOf(question);
            return userAnswer === questionnaire.singlewordques.answer[index];
        } else if (questionnaire.mcqtypeque?.ques.includes(question)) {
            const index = questionnaire.mcqtypeque.ques.indexOf(question);
            return userAnswer === questionnaire.mcqtypeque.ans[index];
        } else {
            const index = questionnaire.truefalse.findIndex((q) => q[0] === question);
            return userAnswer === questionnaire.truefalse[index][1];
        }
    };

    return (
        <div className="bg-[url('../public/bg.png')] bg-opacity-95 bg-no-repeat bg-cover flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 m-8 rounded shadow-md w-full max-w-5xl">
                <h2 className="text-2xl mb-4">Compare Answers</h2>
                {Object.keys(userAnswers).map((question, index) => (
                    <div key={index} className="mb-4">
                        <p className="mb-2">{index + 1}. {question}</p>
                        <p className={`mb-2 ${checkAnswer(question, userAnswers[question]) ? 'text-green-600' : 'text-red-600'}`}>
                            Your Answer: {userAnswers[question]}
                        </p>
                        {!checkAnswer(question, userAnswers[question]) && (
                            <p className="text-green-600">Correct Answer: {checkAnswer(question, userAnswers[question]) ? '' : (questionnaire.singlewordques.ques.includes(question) ? questionnaire.singlewordques.answer[questionnaire.singlewordques.ques.indexOf(question)] : (questionnaire.mcqtypeque.ques.includes(question) ? questionnaire.mcqtypeque.ans[questionnaire.mcqtypeque.ques.indexOf(question)] : questionnaire.truefalse.find((q) => q[0] === question)[1]))}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Answer;

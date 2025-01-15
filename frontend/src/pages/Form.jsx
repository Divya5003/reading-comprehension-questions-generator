import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import data from '../Data';

const Form = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [questionnaire, setQuestionnaire] = useState({});
    const [userAnswers, setUserAnswers] = useState({});
    const { paragraph } = location.state;
    var count = 1;

    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].para === paragraph) {
                setQuestionnaire(data[i]);
                break;
            }
        }
    }, [paragraph]);

    const handleInputChange = (e, question) => {
        setUserAnswers({
            ...userAnswers,
            [question]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/compare-answers', { state: { userAnswers, questionnaire } });
    };

    return (
        <div className="bg-[url('../public/bg.png')] bg-opacity-95 bg-no-repeat bg-cover flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 m-8 rounded shadow-md w-full max-w-5xl">
                <h2 className="text-2xl mb-4">Comprehension Paragraph</h2>
                <p>{paragraph}</p>
                <h2 className="text-2xl my-4">Generated Questions</h2>
                {questionnaire.singlewordques?.ques.map((question, index) => (
                    <div key={index} className="mb-4">
                        <label className="block mb-2">{count++}. {question}</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => handleInputChange(e, question)}
                        />
                    </div>
                ))}
                {questionnaire.mcqtypeque?.ques.map((question, index) => (
                    <div key={index} className="mb-4">
                        <label className="block mb-2">{count++}. {question}</label>
                        {[...questionnaire.mcqtypeque?.distractor[index], questionnaire.mcqtypeque.ans[index]].map((option, i) => (
                            <label key={i} className="mr-4">
                                <input
                                    type="radio"
                                    name={question}
                                    value={option}
                                    className="mr-2"
                                    onChange={(e) => handleInputChange(e, question)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
                {questionnaire.truefalse?.map((question, index) => (
                    <div key={index} className="mb-4">
                        <label className="block mb-2">{count++}. {question[0]}</label>
                        <div>
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    name={question[0]}
                                    value="True"
                                    className="mr-2"
                                    onChange={(e) => handleInputChange(e, question[0])}
                                />
                                True
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name={question[0]}
                                    value="False"
                                    className="mr-2"
                                    onChange={(e) => handleInputChange(e, question[0])}
                                />
                                False
                            </label>
                        </div>
                    </div>
                ))}
                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
                    Submit Answers
                </button>
            </form>
        </div>
    );
};

export default Form;

// import bg from '../../public/bg.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [paragraph, setParagraph] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/questionnaire', { state: { paragraph } });
    };

    return (
        <div className="bg-[url('../public/bg.png')] bg-opacity-95 bg-no-repeat bg-cover flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-8 m -8 rounded-xl shadow-md w-full max-w-lg">
                <h2 className="text-2xl mb-4">Enter a Paragraph</h2>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    rows="10"
                    value={paragraph}
                    onChange={(e) => setParagraph(e.target.value)}
                    required
                />
                <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded">
                    Generate Questions
                </button>
            </form>
        </div>
    );
};

export default Home;

import React, { useState } from 'react';
import './GeminiAPI.css';

const GeminiAPI = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
    const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

    const callGeminiAPI = async (promptText) => {
        try {
            const response = await fetch(`${API_URL}?key=${API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: promptText
                        }]
                    }]
                })
            });
            
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                return data.candidates[0].content.parts[0].text;
            } else {
                throw new Error('Unexpected response format from API');
            }
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!prompt.trim()) {
            setError('Please enter a question or prompt.');
            return;
        }
        
        setError('');
        setResponse('');
        setLoading(true);
        
        try {
            const result = await callGeminiAPI(prompt);
            setResponse(result);
            setPrompt('');
        } catch (error) {
            setError(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Ask Gemini</h1>
            </div>
            
            <div className="input-section">
                <form onSubmit={handleSubmit} className="input-group">
                    <input 
                        type="text" 
                        className="input-field" 
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter your question or prompt..."
                        disabled={loading}
                    />
                    <button 
                        type="submit" 
                        className="submit-btn" 
                        disabled={loading}
                    >
                        {loading ? 'Asking...' : 'Ask'}
                    </button>
                </form>
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}
            </div>
            
            {loading && (
                <div className="loading-section">
                    <div className="spinner"></div>
                    <p>Thinking...</p>
                </div>
            )}
            
            {response && (
                <div className="response-section">
                    <h2 className="response-title">Response</h2>
                    <div className="response-content">
                        {response}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GeminiAPI;
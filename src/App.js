import React from 'react';
import GeminiAPI from './components/GeminiAPI';
import BlurText from './components/BlurText';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Gemini API Project</h1>
            </header>
            
            <main>
                <section className="task-section">
                    <h2>Task A - Gemini API Integration</h2>
                    <GeminiAPI />
                </section>
                
                <section className="task-section">
                    <h2>Task B - Blur Text Component</h2>
                    <BlurText text="Hover over me to become sharp!" initiallySharp={false} />
                    <br />
                    <BlurText text="I'm always sharp!" initiallySharp={true} />
                </section>
            </main>
        </div>
    );
}

export default App;
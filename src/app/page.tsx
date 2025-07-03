'use client';

import { useState } from 'react';

export default function Home() {
  const [role, setRole] = useState('');
  const [question, setQuestion] = useState('');
  const [trapQuestion, setTrapQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPromptPopup, setShowPromptPopup] = useState(false);

  const generateTrapQuestion = async () => {
    if (!role.trim() || !question.trim()) {
      alert('Please fill in both your role and interview question');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/generate-trap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role, question }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setTrapQuestion(data.trapQuestion);
      } else {
        alert('Error generating trap question: ' + data.error);
      }
    } catch (error) {
      alert('Error generating trap question: ' + error);
    } finally {
      setLoading(false);
    }
  };

  const showPromptHelp = () => {
    setShowPromptPopup(true);
  };

  const closePromptPopup = () => {
    setShowPromptPopup(false);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>🎯 BeatCluely.com</h1>
        <p>Detect AI Interview Cheating with Hallucination Traps</p>
        <p className="disclaimer">Not Associated, Sponsored by, or otherwise related to Cluely in any way</p>
      </div>

      <div className="content">
        {/* Strategy Explanation */}
        <div className="section">
          <h2>How It Works: The Hallucination Trap Strategy</h2>
          
          <div className="problem-box">
            <h3>The Problem</h3>
            <p>
              Interview cheating tools like Cluely use AI to listen to interview questions and suggest answers. 
              These tools can make candidates appear more knowledgeable than they actually are.
            </p>
          </div>

          <div className="solution-box">
            <h3>The Solution</h3>
            <p>
              Create questions that are syntactically and semantically similar to real technical questions, 
              but contain fictional elements that any human expert would recognize as nonsensical.
            </p>
          </div>

          <div className="example-box">
            <h3>Example Trap</h3>
            <p>
              <strong>Real Question:</strong> &quot;I need to change the IP address of a network device to be on the same subnet.&quot;
            </p>
            <p>
              <strong>Trap Question:</strong> &quot;I need to change the IP address of a <span className="highlight">H0TD0G protocol</span> device 
              to be on the same subnet as the meeting room system.&quot;
            </p>
          </div>

          <div className="warning-box">
            <h3>What Happens</h3>
            <ul>
              <li><strong>Human Expert:</strong> &quot;I&apos;m not familiar with H0TD0G protocol - that doesn&apos;t sound like a real networking standard.&quot;</li>
              <li><strong>AI Tools:</strong> Often hallucinate explanations and provide detailed but incorrect answers about fictional protocols.</li>
            </ul>
          </div>
        </div>

        {/* Generator Form */}
        <div className="form-container">
          <div className="form-title">
            Generate Your Hallucination Trap 
            <button onClick={showPromptHelp} className="help-button" title="View AI Prompt">
              ?
            </button>
          </div>
          
          <div className="form-group">
            <label htmlFor="role" className="form-label">
              Interview Role/Position:
            </label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g., Senior Software Engineer, Network Administrator, Data Scientist"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="question" className="form-label">
              Your Interview Question:
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter a technical question you plan to ask in the interview"
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <button
              onClick={generateTrapQuestion}
              disabled={loading}
              className="button"
            >
              {loading ? 'Generating...' : 'Generate Hallucination Trap'}
            </button>
          </div>

          {trapQuestion && (
            <div className="result-box">
              <div className="result-title">
                🎭 Your Hallucination Trap Question
              </div>
              <div className="result-content">
                {trapQuestion}
              </div>
              <div className="usage-instructions">
                <strong>How to use:</strong> Ask this question during the interview. A real expert will identify the fictional elements, 
                while AI tools will likely provide detailed but incorrect explanations.
              </div>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="section">
          <h2>Tips for Detecting AI Usage</h2>
          
          <div className="warning-box">
            <h3>🚩 Red Flags (Possible AI Usage)</h3>
            <ul>
              <li>Detailed explanations of fictional technologies</li>
              <li>Confident answers about non-existent protocols/methods</li>
              <li>Technical-sounding but nonsensical responses</li>
              <li>Immediate responses without hesitation</li>
            </ul>
          </div>

          <div className="solution-box">
            <h3>✅ Green Flags (Likely Human)</h3>
            <ul>
              <li>&quot;I&apos;m not familiar with that&quot;</li>
              <li>&quot;That doesn&apos;t sound like a real technology&quot;</li>
              <li>Questions about the fictional elements</li>
              <li>Honest admission of not knowing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2025 BeatCluely.com - Helping maintain interview integrity since 2024</p>
        <p>
          <strong>Privacy & AI Usage:</strong> We use the free version of DeepSeek to keep hosting costs low. 
          Questions may be used for model training, but we do not collect any personal information otherwise.
        </p>
        <p>Use responsibly and in accordance with your organization&apos;s policies.</p>
      </div>

      {/* Prompt Help Popup */}
      {showPromptPopup && (
        <div className="popup-overlay">
          <div className="popup-dialog">
            <div className="popup-header">
              <span className="popup-title">AI Prompt Details</span>
              <button onClick={closePromptPopup} className="popup-close">×</button>
            </div>
            <div className="popup-content">
              <p><strong>This is the exact prompt sent to DeepSeek AI:</strong></p>
              <div className="prompt-text">
                You are an expert at creating &quot;hallucination trap&quot; questions to detect AI interview cheating tools. These questions should be syntactically and semantically similar to real technical questions but contain fictional elements that would make a human expert say &quot;I don&apos;t know&quot; or &quot;that doesn&apos;t sound right,&quot; while AI models often hallucinate detailed answers.
                <br/><br/>
                <strong>Role:</strong> [Your Role]<br/>
                <strong>Original Question:</strong> [Your Question]
                <br/><br/>
                <strong>Create a hallucination trap version of this question by:</strong><br/>
                1. Keeping the same general structure and context<br/>
                2. Replacing 1-2 key technical terms with fictional but super plausible-sounding alternatives<br/>
                3. Making it sound technical enough that an AI will try to answer it<br/>
                4. Ensuring a real expert would immediately recognize it as a nonsense question
                <br/><br/>
                <strong>Examples of good hallucination trap questions:</strong><br/>
                • &quot;How do you change the IP address of a H0TD0G protocol networked peripheral device to match the same subnet as the meeting room system?&quot; instead of real networking protocols<br/>
                • &quot;How do you sort a linked list using a bidirectional flutter sort?&quot; instead of real algorithms<br/>
                • &quot;How do you encrypt a file using a chaotic encryption method?&quot; instead of real encryption methods<br/>
                • &quot;When would you use a microservice code-logic container for a web application?&quot; instead of Docker containers
                <br/><br/>
                It must sound plausible and not like a joke, don&apos;t make it too obvious or it will be easy to detect.
                <br/><br/>
                Generate only the trap question, nothing else. Make it specific to the role and maintain the professional tone of the original question.
              </div>
            </div>
            <div className="popup-footer">
              <button onClick={closePromptPopup} className="button">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

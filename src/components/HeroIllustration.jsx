import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

export default function HeroIllustration() {
  const [typedText, setTypedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  // Hardcoded primary/secondary colors so text is visible on the dark terminal bg
  // We use var(--accent) so the keywords switch from Purple (Dark Mode) to Sky Blue (Light Mode)
  const termAccent = "var(--accent)";
  const termPrimary = "#ffffff"; 
  const termSecondary = "#b0b0c0";

  const codeLines = [
    { text: "const developer = {", color: termAccent },
    { text: `name: "${personalInfo.name}",`, color: termSecondary },
    { text: 'skills: ["React", "Node.js", "Python", "TypeScript"],', color: termSecondary },
    { text: "hardWorker: true,", color: termAccent },
    { text: "problemSolver: true,", color: termAccent },
    { text: "hireable: function() {", color: termPrimary },
    { text: "return this.hardWorker && this.problemSolver;", color: termSecondary },
    { text: "}", color: termPrimary },
    { text: "};", color: termAccent },
  ];

  useEffect(() => {
    if (lineIndex < codeLines.length) {
      const currentLine = codeLines[lineIndex].text;
      if (typedText.length < currentLine.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentLine.slice(0, typedText.length + 1));
        }, 30); // typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLineIndex(lineIndex + 1);
          setTypedText("");
        }, 400); // delay before next line
        return () => clearTimeout(timeout);
      }
    }
  }, [typedText, lineIndex, codeLines]);

  return (
    <div className="hero-illustration-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="close-btn"></span>
            <span className="min-btn"></span>
            <span className="max-btn"></span>
          </div>
          <div className="terminal-title">developer.js</div>
        </div>
        <div className="terminal-body">
          {codeLines.slice(0, lineIndex).map((line, i) => (
            <div key={i} className="code-line">
              <span className="line-number">{i + 1}</span>
              <span style={{ color: line.color }}>{line.text}</span>
            </div>
          ))}
          {lineIndex < codeLines.length && (
            <div className="code-line active">
              <span className="line-number">{lineIndex + 1}</span>
              <span style={{ color: codeLines[lineIndex].color }}>
                {typedText}
              </span>
              <span className="cursor">|</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Terminal from "@/components/global/terminal";
import { FaCircle } from "react-icons/fa";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState("");
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState(""); // ✅ Now used inside the Terminal

  const handleRun = async () => {
    try {
      const response = await fetch("http://localhost:5000/compile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      setTerminalOutput((prev) => prev + data.output + "\n");
    } catch (error) {
      console.error("Error:", error);
      setTerminalOutput((prev) => prev + "Error compiling code.\n");
    }
  };

  return (
    <div className="relative flex flex-col w-full bg-gray-900 bg-opacity-25 rounded-xl overflow-hidden shadow-lg border border-gray-700">
      {/* VS Code Style Title Bar */}
      <div className="flex items-center justify-between bg-gray-800 bg-opacity-25 px-4 py-2">
        <div className="flex space-x-2">
          <FaCircle className="text-red-500" size={12} />
          <FaCircle className="text-yellow-500" size={12} />
          <FaCircle className="text-green-500" size={12} />
        </div>
        <button
          onClick={handleRun}
          className="text-white px-3 bg-opacity-25 py-1 rounded"
        >
          ▸
        </button>
        <div></div>
      </div>

      {/* Editor & Terminal Container */}
      <div
        className="relative transition-all duration-300"
        style={{ height: isTerminalOpen ? "300px" : "300px" }}
      >
        <Editor
          height={isTerminalOpen ? "50%" : "100%"}
          defaultLanguage="python"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            fontSize: 14,
            minimap: { enabled: true },
            scrollBeyondLastLine: false,
            cursorBlinking: "smooth",
          }}
          onMount={(editor, monaco) => {
            monaco.editor.defineTheme("transparent-theme", {
              base: "vs-dark",
              inherit: true,
              rules: [],
              colors: {
                "editor.background": "#11182740",
              },
            });
            monaco.editor.setTheme("transparent-theme");
          }}
          className="p-2 bg-opacity-75"
        />

        {/* Terminal Section */}
        {isTerminalOpen && (
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/95 bg-opacity-25 border-t border-gray-700 p-2 transition-all duration-300">
            <Terminal height="100%" className="h-full w-full" output={terminalOutput} />
          </div>
        )}
      </div>

      {/* Terminal Toggle Button */}
      <button
        className="bg-gray-900 text-white bg-opacity-25 px-4 py-2 text-sm font-semibold border-t border-gray-700 flex justify-between items-center w-full"
        onClick={() => setIsTerminalOpen(!isTerminalOpen)}
      >
        Terminal {isTerminalOpen ? "⬇️" : "⬆️"}
      </button>
    </div>
  );
};

export default CodeEditor;

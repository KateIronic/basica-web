import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Terminal from "@/components/global/terminal";
import { FaCircle } from "react-icons/fa";
import axios from "axios";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState("");
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState("");

  const API_URL = "https://basica-py.onrender.com/";

  const handleRun = async () => {
    const processedCode = code.replace(/\r/g, "").split("\n").join(";");

    try {
      const response = await axios.post(`${API_URL}/run`, { code: processedCode });

      setTerminalOutput(response.data.error || response.data.result);
    } catch (error: unknown) {
      console.error("Error:", error);
      
      if (axios.isAxiosError(error)) {
        setTerminalOutput(`Server Error: ${error.response?.data?.message || "Unknown error"}`);
      } else {
        setTerminalOutput("Error: Request failed.");
      }
    }
  };

  return (
    <div className="relative flex flex-col w-full bg-[#00000030] rounded-xl overflow-hidden">
      <div className="flex items-center justify-between bg-[#00000030] px-4 py-2">
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
      <div
        className="relative transition-all duration-300"
        style={{ height: isTerminalOpen ? "300px" : "300px" }}
      >
        <Editor
          height={isTerminalOpen ? "50%" : "100%"}
          defaultLanguage="basic"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            fontSize: 14,
            minimap: { enabled: true },
            scrollBeyondLastLine: false,
            cursorBlinking: "smooth",
          }}
        />
        {isTerminalOpen && (
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/95 bg-opacity-25 border-t border-[#181a1c20] p-2 transition-all duration-300">
            <Terminal height="100%" className="h-full w-full" output={terminalOutput} />
          </div>
        )}
      </div>
      <button
        className="bg-[#181a1c40] text-white bg-opacity-25 px-4 py-2 text-sm font-semibold flex justify-between items-center w-full"
        onClick={() => setIsTerminalOpen(!isTerminalOpen)}
      >
        Terminal {isTerminalOpen ? "⬇️" : "⬆️"}
      </button>
    </div>
  );
};

export default CodeEditor;

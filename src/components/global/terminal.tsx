import { cn } from "@/lib/utils";

const Terminal = ({ height, className, output }: { height: string; className?: string; output?: string }) => {
  return (
    <div
      style={{
        height,
        whiteSpace: "pre-wrap", // Ensures \n becomes newlines
        fontFamily: "Courier New, monospace", // Monospace font for terminal look
        fontSize: "14px",
      }}
      className={cn(
        "bg-[#181a1c20] text-[#E2CBFF] p-4 rounded-b-xl border-t border-[#181a1c20] overflow-auto",
        className
      )}
    >
      {output || "No output yet."}
    </div>
  );
};

export default Terminal;
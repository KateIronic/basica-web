const Terminal = ({ height, className, output }: { height: string; className?: string; output?: string }) => {
  return <div style={{ height }} className={`${className || ""} bg-black bg-opacity-25 text-white p-2`}>Terminal Output: <div>${output}</div></div>;
};

export default Terminal;

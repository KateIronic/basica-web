import { useEffect, useState } from "react";
import type { PyodideInterface } from "pyodide"; // Import proper type

export function usePyodide() {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPyodide() {
      try {
        const { loadPyodide } = await import("pyodide");
        const pyInstance = await loadPyodide();
        setPyodide(pyInstance);
      } catch (error) {
        console.error("Failed to load Pyodide", error);
      } finally {
        setLoading(false);
      }
    }
    loadPyodide();
  }, []);

  return { pyodide, loading };
}
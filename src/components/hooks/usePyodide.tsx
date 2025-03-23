import { useEffect, useState } from "react";

export function usePyodide() {
    const [pyodide, setPyodide] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPyodide() {
            try {
                const { loadPyodide } = await import("pyodide");
                const pyInstance = await loadPyodide(); // No need to pass indexURL when using npm
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

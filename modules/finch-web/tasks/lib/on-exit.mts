type ExitHandler = () => void | Promise<void>;

const exitHandlers: ExitHandler[] = [];

export function onExit(handler: ExitHandler): void {
    exitHandlers.push(handler);
}

// Set up the signal handler once
process.on("SIGINT", () => {
    (async () => {
        try {
            // Wait for all exit handlers to complete
            await Promise.all(exitHandlers.map(handler => handler()));
        } catch (error) {
            console.error("Error during shutdown:", error);
        }

        process.exit(0);
    })();
});

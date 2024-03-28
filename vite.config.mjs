import { defineConfig } from "vitest/config";

export default defineConfig({
    root: "src",
    build: {
        ssr: true,
    },
    test: {
        include: ["**/*.test.{ts,js}"],
        watch: false,
        coverage: {
            enabled: true,
            provider: "istanbul",
            reporter: ["text-summary"]
        }
    }
});
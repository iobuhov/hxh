export default {
    files: ["tests/**/*.test.js"],
    require: [],
    extensions: ["js"],
    timeout: "2m",
    failFast: true,
    failWithoutAssertions: false,
    environmentVariables: {
        NODE_ENV: "test"
    }
};

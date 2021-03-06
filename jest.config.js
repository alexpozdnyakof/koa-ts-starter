module.exports = {
    // The bail config option can be used here to have Jest stop running tests after
    // the first failure.
    bail: false,

    // Indicates whether each individual test should be reported during the run.
    verbose: false,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: false,

    // The directory where Jest should output its coverage files.
    coverageDirectory: './coverage/',

    // If the test path matches any of the patterns, it will be skipped.
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],

    // If the file path matches any of the patterns, coverage information will be skipped.
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
        ".(ts|tsx)": "ts-jest"
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    moduleFileExtensions: ["ts", "tsx", "js"],
    // The pattern Jest uses to detect test files.
    // This option sets the URL for the jsdom environment.
    testURL: 'http://localhost',
};

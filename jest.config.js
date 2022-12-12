const config = {
  reporters: ["default", "jest-screenshot/reporter"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = config;

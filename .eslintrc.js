const base = require("./node_modules/@mendix/pluggable-widgets-tools/configs/eslint.ts.base.json");

module.exports = {
    plugins: ["jest"],
    ...base,
    env: {
        ...base.env,
        jest: true
    }
};

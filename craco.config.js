const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@containers": path.resolve(__dirname, "src/containers"),
            "@services": path.resolve(__dirname, "src/services"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@utilities": path.resolve(__dirname, "src/utilities"),
        },
    },
};

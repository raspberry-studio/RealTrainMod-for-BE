const MinecraftAddonBuilder = require("minecraft-addon-toolchain/v1");
const TerserSupport = require("minecraft-addon-toolchain-terser");

const builder = new MinecraftAddonBuilder("RTMBE");
builder.addPlugin(new TerserSupport());

module.exports = modBuilder.configureEverythingForMe();
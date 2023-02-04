const { withContentlayer } = require("next-contentlayer");
const withExportImages = require("next-export-optimize-images");

module.exports = withExportImages(withContentlayer({}));

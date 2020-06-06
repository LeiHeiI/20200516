module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("toISOString", function(date) {
    return date.toISOString().split('T')[0];
  });
}

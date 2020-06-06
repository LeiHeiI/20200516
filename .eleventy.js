module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("toISOString", function(date) {
    return date.toISOString().split('T')[0];
    
    // Folders to copy into output.
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");

    // If we use Netlify and has the _redirects file.
    eleventyConfig.addPassthroughCopy("_redirects");

  });
}

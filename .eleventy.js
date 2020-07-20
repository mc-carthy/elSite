module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets');
    return {
        dir: {
            markdownTemplateEngine: 'njk',
            templateFormats: ['html', 'md', 'njk'],
            input: 'src'
        }
    }
}
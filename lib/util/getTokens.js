const lexer = require('@startupjs/pug-lexer')

module.exports = (template) => {
  try {
    return lexer(template)
  } catch (error) {
    return []
  }
}

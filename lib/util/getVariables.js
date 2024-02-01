const { findVariablesInTemplate } = require('@startupjs/pug-uses-variables')

module.exports = (template) => {
  try {
    return findVariablesInTemplate(template)
  } catch (error) {
    return []
  }
}

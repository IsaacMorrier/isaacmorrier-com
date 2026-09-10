module.exports = {
  extends: ['standard', 'standard-react'],
  ignorePatterns: ['dist/'],
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '18'
    }
  }
}

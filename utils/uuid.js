module.exports = () =>
Math.floor(Math.random() * (100 - 1) + 1)
  .toString(36)
  .substring(0, 2);
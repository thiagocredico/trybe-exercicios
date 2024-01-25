const snakeize = require('snakeize');

const getFormattedColumnsNames = (object) =>
  Object.keys(snakeize(object)).join(', ');

const getFormattedPlaceholders = (object) =>
  Object.keys(object)
    .map((_key) => '?')
    .join(', ');

const getFormattedUpdateColumns = (object) =>
  Object.keys(snakeize(object))
    .map((key) => `${key}= ?`)
    .join(', ');

module.exports = {
  getFormattedColumnsNames,
  getFormattedPlaceholders,
  getFormattedUpdateColumns,
};

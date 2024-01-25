const welcomeUser = (username) => {
  if (typeof username !== 'string') {
    return 'O parâmetro username deve ser do tipo texto!';
  } else if (username.length <= 1) {
    return 'O parâmetro username deve conter pelo menos dois caracteres!';
  }
  return `Boas-vindas, ${username}!`;
};

module.exports = welcomeUser;

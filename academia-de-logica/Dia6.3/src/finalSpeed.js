const finalSpeed = (tempo) => {
  if (!tempo || typeof tempo !== 'number') return 0;
  const gravidade = 9.8;
  return tempo * gravidade;
};

module.exports = finalSpeed;

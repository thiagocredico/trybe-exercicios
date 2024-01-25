const valuesValidation = (req, res, next) => {
    const blogPost = req.body;

  const isValid = Object.values(blogPost).every((value) => value.length >= 5);
  if (!isValid) {
    return next({ message: 'Invalid attributes', statusCode: 422 });
  }
  next();
};
module.exports = valuesValidation;
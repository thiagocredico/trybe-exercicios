const fieldValidation = (req, _res, next) => {
  const blogPost = req.body;
  
  const requiredProperties = ['title', 'description', 'author'];
  const hasProperties = requiredProperties.every((property) => property in blogPost);
  if (!hasProperties) {
    return next({ message: 'Attributes are missing', statusCode: 400 });
  }
  next();
};

module.exports = fieldValidation;
const fs = require('fs/promises');

const readBlogPostFile = async () => {
  try {
    const arrayPosts = await fs.readFile('src/trybitter.json', 'utf8');

    return JSON.parse(arrayPosts);
  } catch (error) {
    return null;
  }
};

const getBlogPostLastId = async () => {
  const arrayPosts = await readBlogPostFile();
  return arrayPosts[0];
};

const insertBlogPostFile = async (post) => {
  try {
    const arrayPosts = await readBlogPostFile();
    arrayPosts.push(post);
    arrayPosts[0] += 1;

    return await fs.writeFile('src/trybitter.json', JSON.stringify(arrayPosts));
  } catch (error) {
    return null;
  }
};

const changeBlogPostFile = async (blogPost, id) => {
  try {
    const arrayPosts = await readBlogPostFile();
    const pos = arrayPosts.findIndex((post, index) => {
      if (index !== 0 && post.id === id) return true;
      return false;
    });
    arrayPosts[pos] = {id, ...blogPost};

    return await fs.writeFile('src/trybitter.json', JSON.stringify(arrayPosts));
  } catch (error) {
    return null;
  }
};

module.exports = {
  readBlogPostFile,
  insertBlogPostFile,
  getBlogPostLastId,
  changeBlogPostFile,
};

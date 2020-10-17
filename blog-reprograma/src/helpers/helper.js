// Incrementa o ID
const getNewValue = (array) => {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  } else {
    return 1;
  }
};

// Calcula a data de criação
const newDate = () => new Date().toString();

// Checar a tag
const checkTag = (array, tag) => {
  return array.filter((post) => post.tag == tag);
};

// Checar o título
const checkTitle = (array, title) => {
  return array.find((post) => post.title == title);
};

module.exports = {
  getNewValue,
  newDate,
  checkTag,
  checkTitle
};

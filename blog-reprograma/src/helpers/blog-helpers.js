const blogController = require("../controller/blog-controller");
const { push } = require("../models/blog-models");
const posts = require("../models/blog-models");

//Auxiliador para auto incremento do ID
const newId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

//Auxiliador para converter a data em string
const dateCreate = () => new Date().toString();


//Auxiliador para não permitir inserção de tags já existentes
const checkTags = (array) =>{
    return array.find(blogController=>(blogController.tags == tags));
}




module.exports = {
    newId,
    dateCreate,
    checkTags
}
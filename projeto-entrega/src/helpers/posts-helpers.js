function isAnArray(array) {
    return Array.isArray(array)
}

function findTheTag(array, etiqueta) {
    return array.includes(etiqueta)    
}


function checkTitle(oldTitle, newTitle) {
    if (newTitle == oldTitle) {return true}
    else {return false}
}

module.exports = {
    isAnArray,
    findTheTag,
    checkTitle
}
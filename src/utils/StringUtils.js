function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}

const formatField = (value) => {
    if(!!!value) return "";
    else return value.toString();
}

export {capitalize, formatField};
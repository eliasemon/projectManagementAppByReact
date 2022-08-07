const findingMatchIdorName = (idsOrnameArray = [] , key) =>{
    const keyRgex = new RegExp(`${key}`, 'i')
    idsOrnameArray = idsOrnameArray.filter((ArrayItem) =>{
        return Boolean(ArrayItem.match(keyRgex))
    })
    return idsOrnameArray;
}
export default findingMatchIdorName;
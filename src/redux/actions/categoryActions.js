import * as actionTypes from './actionTypes'
export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY, payload:category}
}

export function getCategoriesSuccess(categories)//getCategories() fonksiyonu burayı çalıştırır.
{
    return {type:actionTypes.GET_CATEGORIES_SUCCESS, payload:categories}//bir obje dönüyor obje payload ve type taşıyor
}

export function getCategories(){ //bu fonksiyonu çağırırız //bu fonksiyonu redux thunk ile bağlarız

    return function(dispatch){
        let url="http://localhost:3000/categories"

        return fetch(url).then(response=>response.json())
                         .then(result=>dispatch(getCategoriesSuccess(result)));
    }
}
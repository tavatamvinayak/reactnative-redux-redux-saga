import {put, takeEvery} from 'redux-saga/effects'
import {SET_USER_DATA, USER_LIST} from '../Constant/contant'   

 function* userList() {
    const url = "https://dummyjson.com/users"
    let data = yield fetch(url)
    data = yield data.json();
    // console.warn( "data"+data)
    yield put({type:SET_USER_DATA,data})
}

 function* Products_data() {
    yield takeEvery( USER_LIST,userList)
}

export default Products_data
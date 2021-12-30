import { put, takeEvery, call } from 'redux-saga/effects';
import {FETCH_GET_WEATHER, getWeather} from '../store/apiReducer';
// import axios from "axios";

// export const fetchWeatherApi = async (city) => {
//     let weather
//     await axios.get(`http.//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
//         .then((res) => {
//             weather = res.data
//         })
//         .catch(err => {
//             console.log('====>err<====', err)
//         })
//     return weather
// }

function* fetchWeatherWorker(city) {
    const data = yield call(() => fetch(`http.//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`))
    const json = JSON.parse(data)
    yield put(getWeather(json))
}

export function* WeatherWatcher() {
    yield takeEvery(FETCH_GET_WEATHER, fetchWeatherWorker)
}

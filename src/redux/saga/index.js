import { all } from 'redux-saga/effects';
import {WeatherWatcher} from "./weatherSaga";

export function* rootWatcher() {
    yield all([WeatherWatcher()])
}

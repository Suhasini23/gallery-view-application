import * as CONST from "../comman/actionTypes";
import { Dispatch } from "redux";
import axios from "axios";
import _ from "../Utils/lodashUtils";

export const setShowLoader = () => ({
    type: CONST.SHOW_LOADER,
    loading: true
});
export const setHideLoader = () => ({
    type: CONST.HIDE_LOADER,
    loading: false
});

export const setAllData = (response) => ({
    type: CONST.SET_DATA,
    payload: response
});

export const setClearAllData = () => ({
    type: CONST.CLEAR_ALL_DATA,
});

export const getData = (count = 10): any => {
    const API_KEY = "8z0Z4beHzJOnKDoOeGEByREs3jhLV6vapHu2T12zjPs";
    const API_URL = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=${count}`;
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch(setShowLoader())
            const response = await axios.get(API_URL)
            if ((response && response.data)) {
                dispatch(setAllData(response.data))
                dispatch(setHideLoader())
            }
        } catch (ex) {
            console.log(ex);
        }
    };
};

export const getSearchedCategoryData = (keyword: string): any => {
    const API_KEY = "8z0Z4beHzJOnKDoOeGEByREs3jhLV6vapHu2T12zjPs";
    const API_URL = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${keyword}`;
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch(setShowLoader())
            dispatch(setClearAllData())
            const response = await axios.get(API_URL)
            if ((response && response.data)) {
                const data = _.get(response, "data.results", [])
                dispatch(setAllData(data))
                dispatch(setHideLoader())
            }
        } catch (ex) {
            console.log(ex);
        }
    };
};


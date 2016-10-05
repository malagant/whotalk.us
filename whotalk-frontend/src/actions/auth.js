import AUTH from './ActionTypes/auth';
import { createAction } from 'redux-actions';
import * as service from 'services/auth';

export const checkUsername = (username) => ({
    type: AUTH.CHECK_USERNAME,
    payload: {
        promise: service.checkUsername(username)
    }
});

export const checkEmail = (email) => ({
    type: AUTH.CHECK_EMAIL,
    payload: {
        promise: service.checkEmail(email)
    }
});

export const localRegister = (params) => ({
    type: AUTH.LOCAL_REGISTER,
    payload: {
        promise: service.localRegister(params)
    }
});

export const localRegisterPrior = createAction(AUTH.LOCAL_REGISTER_PRIOR);


export const resetRegisterStatus = createAction(AUTH.RESET_REGISTER_STATUS);


/*
    payload: {
        name,
        value
    }
*/
export const setSubmitStatus = createAction(AUTH.SET_SUBMIT_STATUS);
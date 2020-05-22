import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formreducer } from 'redux-form';
import streamReducer from './streamReducer';
export default combineReducers({
    auth: authReducer,
    form: formreducer,
    streams:streamReducer
});

// here we just combining all teh reducers 
// since we have one one here it is what it is trynna be happy with simple things too
// we taking that reducer into authobject so that
// in amapstatetoprop while returning state object we refer to it as state.auth.isSignedIn
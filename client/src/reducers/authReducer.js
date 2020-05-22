const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ("SIGN_IN"):
            return { ...state, isSignedIn: true,userId:action.payload }
        case ("SIGN_OUT"):
            return { ...state, isSignedIn: false,userId:null }
        default:
            return state;
    };
};

// reducer has things which changes during the lifetime of component
// for instance authreducer here it is sign in change which is intrepreted with the state of issignedin flag
// the if iof the user changes depending on the diff user that logs in 
// thats waht the key here is 
// with google authentication we just wanna know wether the user is signed in or not 
// incase yes we grab their userid's and assign it the action.payload property 

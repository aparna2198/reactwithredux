// sample
// array based approach
const sampleReducer = (state=[],action) => {
    switch (action.type) {
        case ("EDIT_STREAM"):
            return state.map(stream => {
                if (stream.id === action.payload.id)
                    return action.payload;
                else 
                    return stream;   
            })
        default:
            return state;
            
    }
}


// object based approcach 

const sampleReducer = (state = {}, action) => {
    switch (action.type) {
        case ("EDIT_STREAM"):
            // const newState = { ...state };//brand new object
            // newState[action.payload.id] = action.payload;//asign a property to it overwriting any existing property there is
            // return newState;//and return it

            // es2015 syntax
            return { ...state, [action.payload.id]: action.payload };
        // [action.payload.id] this is not reading an array , it is not an array being created 
        // [action.payload.id] this is key interpolation 
        // means look at [action.payload.id] property  look at that id whatever the id is  no or string or vlue it is 
        // take that and create a new key  using it inside of this overall object  which is state here 
        // and to that key [action.payload.id] asssign action.payload object 
        // suppose key is 5  on id 5 assign action.payload 
/*return(state 
1: jsj
2:udshih
3: sjsijosj
4:bsudhs
[action.payload.id]:action.payload)*/
        default:
            return state;
 }   
}
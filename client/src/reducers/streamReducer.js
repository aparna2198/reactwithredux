import _ from 'lodash';


export default (state = {}, action)=>{
    switch (action.type) {
        case ("FETCH_STREAM"):
            return { ...state, [action.payload.id]: action.payload };
        case ("CREATE_STREAM"):
            return { ...state, [action.payload.id]: action.payload };
        case ("EDIT_STREAM"):
            return { ...state, [action.payload.id]: action.payload };
        case ("FETCH_STREAMS"):
            return { ...state, ..._.mapKeys(action.payload, 'id') };//mapkeys convert array][] into object{}
        /*creating new object and taking currnt records (...state) and adding them in 
        then calling mapkeys here wwe going to take list of streams(action.payload)
         that we just got back from out api and 
         we're going to create a object out of it using mapkeys and the keys inside that object are going to be t
         he ids of the  individual streams themselves
         mapkes returns a big object and we want to take all the key value pairs from that object 
         and add them into the new object that gets created 
         ..._.mapkeys--> take whatever big object comes from map keys take all the key-value pairs out of it nd add it into the
         bnew big overall object  */
        case ("DELETE_STREAM"):
            return _.omit(state, action.payload);//creates new object with all the properties from states except with id=state.payload

        default:
            return state;     
    }
}
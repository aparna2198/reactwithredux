import axios from 'axios';
export default axios.create({
    baseURL: "http://localhost:3001"
})
// i have used this in createStream action creator 
// createStream action creator  makes post request to baseurl+streams bascially
// "http://localhost:3001/streams" with form valuess whatever data u filled before submission 
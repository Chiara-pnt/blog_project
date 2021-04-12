

export default (state = [], action) => {
    if(action.type === 'FETCH_POSTS') {
        return action.payload;
    }

    return state;
    
};




//bad
   // return document.querySelector('input')

    //bad
   // return axios.get('/posts')

    //good  (code not valid, just an example)
   // return state + action
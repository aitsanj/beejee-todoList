const initialState = {
    registerError: null,
    loginError: null,
    user: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    };
};

export default userReducer;
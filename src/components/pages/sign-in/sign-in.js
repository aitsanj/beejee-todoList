import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../store';
import { Alert } from '../../molecules';
import './sign-in.css';

export const SignIn = () => {
    const [userState, setUserState] = useState({
        username: '',
        password: '',
    });
    const [isDisable, setIsDisable] = useState(true);

    const status = useSelector(state => state.users.status);
    const dispatch = useDispatch();

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setUserState((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const onFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('username', userState.username);
        formData.set('password', userState.password);
        await dispatch(loginUser(formData, userState));
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <form onSubmit={onFormSubmit} className="d-flex flex-column align-items-center justify-content-center">
                <input 
                    placeholder="username" 
                    className="input p-2 my-2" 
                    name="username"
                    value={userState.username}
                    type="text" 
                    onChange={inputHandler}
                />
                <input 
                    placeholder="password" 
                    type="password" 
                    name="password"
                    value={userState.password}
                    className="input p-2" 
                    onChange={inputHandler}
                />
                <button 
                    className="default-button mt-3" 
                    type="submit"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

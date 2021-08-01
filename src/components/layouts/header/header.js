import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserOutlined from '@ant-design/icons/UserOutlined';
import './header.css';
import { AnonMenu, LogedMenu } from '../../molecules';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../store';

export const Header = () => {
    const username = useSelector(state => state.users.username);
    const dispatch = useDispatch();
    const onLogOutClick = () => {
        dispatch({type: 'LOGOUT_USER'});
    };

    return (
        <div className="header-wrapper py-3 mb-4">
            <div className="container d-flex align-items-center justify-content-between">
                <p>
                    {username ? username : 'Anon'}
                </p>
                <Link to="/">
                    Tasks
                </Link>
                {
                    !username ? <AnonMenu className="default-button" /> : <LogedMenu logOutClick={onLogOutClick} className="logout-butoon" /> 
                }
            </div>
        </div>
)};

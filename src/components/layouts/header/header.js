import React from 'react';
import { useSelector } from 'react-redux';
import UserOutlined from '@ant-design/icons/UserOutlined';
import './header.css';
import { AnonMenu, LogedMenu } from '../../molecules';

export const Header = () => {
    const user = useSelector(state => state.users.user);
    return (
        <div className="container d-flex align-items-center justify-content-between py-4">
            <UserOutlined />
            {
                !user ? <AnonMenu className="enter-button" /> : <LogedMenu className="logout-butoon" /> 
            }
        </div>
)};

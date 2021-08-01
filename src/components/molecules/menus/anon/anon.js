import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export const AnonMenu = ({ className }) => {
    return (
        <div>
            <Link 
                type="button" 
                className={classnames(className, 'py-2 px-3')}
                to="/sign-in"
            >
                Sign in
            </Link>
        </div>
    );
};
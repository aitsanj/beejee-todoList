import classNames from 'classnames';
import React from 'react';

export const LogedMenu = ({ className, logOutClick }) => (
    <div>
        <div>
            <button 
                type="button" 
                className={classNames(className, 'py-2 px-3')}
                onClick={logOutClick}
            >
                Log out
            </button>
        </div>
    </div>
);
import React from 'react';
import classnames from 'classnames';

export const AnonMenu = ({ className }) => {
    return (
        <div>
            <button 
                type="button" 
                className={classnames(className, 'py-2 px-3')}
            >
                Войти
            </button>
        </div>
    );
};
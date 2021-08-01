import classNames from 'classnames';
import React from 'react';

export const LogedMenu = ({ className }) => (
    <div>
        <div>
            <button 
                type="button" 
                className={classNames(className, 'py-2 px-3')}
            >
                Выйти
            </button>
        </div>
    </div>
);
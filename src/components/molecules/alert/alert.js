import React, { useEffect, useState } from 'react';

export const Alert = ({status}) => {
    const [isShown, setIsShown] = useState(true);

    useEffect(() => {
        if (isShown) {
            setTimeout(() => {
                setIsShown(!isShown);
            }, 3000);
        }
    }, []);
    return (
        <div>
            <div className={isShown ? 'toast show ' : 'toast'} aria-live="assertive" aria-atomic="true">
                {status === 'ok' && <div className='toast-body alert-success col-11 d-flex'>
                    Успешно!
                    <button onClick={() => setIsShown(!isShown)} type="button" className="btn-close m-auto" data-bs-dismiss="toast" aria-label="Close" />
                </div>}
                {status === 'error' && <div className='toast-body alert-danger col-11 d-flex'>
                    Произошла ошибка
                    <button onClick={() => setIsShown(!isShown)} type="button" className="btn-close m-auto" data-bs-dismiss="toast" aria-label="Close" />
                </div>}
            </div>
        </div>
    );
};

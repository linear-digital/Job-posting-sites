
import React from 'react';
import Login from '../Login';

const LoginDialog = () => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                   <Login dialog={true}/>
                </div>
            </dialog>
        </div>
    );
};

export default LoginDialog;
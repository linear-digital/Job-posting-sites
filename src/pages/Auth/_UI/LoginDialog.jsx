
import React from 'react';
import Login from '../Login';

const LoginDialog = () => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <Login dialog={true} />
                </div>
                {/* <div className="modal-box">
                 
                </div> */}
            </dialog>
        </div>
    );
};

export default LoginDialog;
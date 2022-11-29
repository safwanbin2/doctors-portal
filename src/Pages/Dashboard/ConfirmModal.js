import React from 'react';

const ConfirmModal = ({ title, message, deleteItem, successAction }) => {
    return (
        <div>
            <input type="checkbox" id="confirmModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="confirmModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className='text-end'>
                        <button onClick={() => successAction(deleteItem._id)} className='btn btn-error btn-outline '>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
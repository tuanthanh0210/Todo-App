import React, { useState } from 'react';
import './AddNewTodo.scss'
import PropsTypes from 'prop-types'

AddNewTodo.propsTypes = {
    onSubmit: PropsTypes.func,
}

AddNewTodo.defaultProps = {
    onSubmit: null
}


function AddNewTodo(props) {
    const user = {
        name: 'Thành'
    }
    const { isOpen, closeModal, onSubmit } = props;
    const [value, setValue] = useState('')

    function handleValueChange(e) {
        // console.log(e.target.value)
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;
        if (!value) return;
        const formValue = {
            title: value.trim()
        }

        onSubmit(formValue);
        closeModal();
        setValue('')
    }

    return (
        isOpen && <div className="AddNewTodo">
            <div className="Modal" >
                <h3>Hi, {user.name}</h3>
                <h3>Today, what needs to be done ?</h3>
                <form action="" onSubmit={handleSubmit} className="form">
                    <input type="text" value={value} onChange={handleValueChange} placeholder="todo..." />
                    <div className="button">
                        <button className="btn btn-accept" type="submit" onClick={handleSubmit}>Accept</button>
                        <button className="btn btn-close" onClick={closeModal}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddNewTodo;
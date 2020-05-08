import React, { useState } from 'react';
import './TodoList.scss'
import Header from './Header';
import welcome from '../images/welcome.svg'
import AddNewTodo from './AddNewTodo';
import shortid from 'shortid';
import classNames from 'classnames'


function TodoList(props) {
    // const { todoList } = props;
    const [todoList, setTodoList] = useState([])
    const [todoListComplete, setTodoListComplete] = useState([])
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)

    function closeModal() {
        setModal(false)
    }

    function handleTodoFormSubmit(formValue) {
        const newTodo = {
            id: shortid.generate(),
            ...formValue
        }
        const newTodoList = [...todoList]
        newTodoList.push(newTodo);
        setTodoList(newTodoList)
    }

    function onComplete(todo) {
        let todoNonComplete = todoList.filter(item => item.id !== todo.id)
        let todoComplete = todoList.filter(item => item.id === todo.id)
        setTodoList(todoNonComplete)
        setTodoListComplete(todoListComplete.concat(todoComplete))
    }

    function onRemoveTodoItem(todo) {
        let todoNonComplete = todoList.filter(item => item.id !== todo.id);
        setTodoList(todoNonComplete)
    }

    return (
        <div className='TodoList ' >
            <Header />
            <div className="title">
                TODOLIST
            </div>
            {

            !modal && 
            <div className={classNames("main", {
                "open-modal": modal
            })}>
                {
                    todoList.length === 0 && todoListComplete.length === 0 &&
                    <div className="non-todo">
                        <h3>Hi, Thành</h3>
                        <p>What needs to be done ?</p>
                        <i className="far fa-comment"></i>
                        <img width={250} src={welcome} alt="" />
                    </div>
                }
                {
                    todoList.length > 0 &&
                    <div className="todo">
                        <h4>Upcoming</h4>
                        <ul>
                            {
                                todoList.map((todo, index) => (
                                    <div key={todo.id}>
                                        <li onClick={() => onComplete(todo)}>
                                            {index + 1}. {todo.title}
                                        </li>
                                        <i className="fas fa-trash-alt" onClick={() => onRemoveTodoItem(todo)} ></i>
                                    </div>
                                ))
                            }
                        </ul>

                    </div>

                }
                {
                    todoListComplete.length > 0 &&
                    <div className="todo complete">
                        <h4>Finished</h4>
                        <ul>
                            {
                                todoListComplete.map((todo, index) => (
                                    <div key={todo.id}>
                                        <li >{index + 1}. {todo.title}</li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                }
            </div>
            }
            <button className="add-new-todo" onClick={toggle}>
                <i className="fas fa-plus"></i>
            </button>
            <AddNewTodo
                className="AddNewTodo"
                isOpen={modal}
                closeModal={closeModal}
                onSubmit={handleTodoFormSubmit}
            />
        </div>
    );
}

export default TodoList;
import React, { useState, useEffect } from 'react';
import './TodoList.scss'
import Header from './Header';
import welcome from '../images/welcome.svg'
import AddNewTodo from './AddNewTodo';
import classNames from 'classnames'
import axios from 'axios'

function TodoList(props) {
    const [todoList, setTodoList] = useState([])
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)
    const localHost = 'http://localhost:8081/api/todos';
    const url = 'https://express-book-codersx-2020.herokuapp.com/api/todos'


    useEffect(() => {
        async function fetchData() {
            const todoListAPI = await axios.get(url);
            // console.log(todoList)
            setTodoList(todoListAPI.data)
        };
        fetchData()
    },[])

    function closeModal() {
        setModal(false)
    }

    async function addNewTodo(formValue) {
        let newTodoList = await axios.post(url, formValue);
        setTodoList(newTodoList.data)
    }

    async function onComplete(todo) {
        let updateTodo = await axios.post(`${url}/${todo.id}`, todo)
        setTodoList(updateTodo.data)
        // console.log(todoList)
    }

    async function onRemoveTodoItem(todo) {
        let deleteTodo = await axios.get(`${url}/${todo.id}/delete`)
        setTodoList(deleteTodo.data)
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
                        todoList.length === 0 &&
                        <div className="non-todo">
                            <h3>Hi, Thành</h3>
                            <p>What needs to be done ?</p>
                            <i className="far fa-comment"></i>
                            <img width={250} src={welcome} alt="" />
                        </div>
                    }
                    {
                        todoList.filter(todo => todo.isComplete === false).length > 0 &&
                        <div className="todo">
                            <h4>Upcoming</h4>
                            <ul>
                                {
                                    todoList.filter(todo => todo.isComplete === false).map((todo, index) => (
                                        <div key={todo.id}>
                                            <li onClick={() => onComplete(todo)}>
                                                {index + 1}. {todo.title}
                                            </li>
                                            <span onClick={() => onRemoveTodoItem(todo)} >
                                                <i className="fas fa-trash-alt" ></i>
                                            </span>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>

                    }
                    {
                        todoList.filter(todo => todo.isComplete === true).length > 0 &&
                        <div className="todo complete">
                            <h4>Finished</h4>
                            <ul>
                                {
                                    todoList.filter(todo => todo.isComplete === true).map((todo, index) => (
                                        <div key={todo.id}>
                                            <li >{index + 1}. {todo.title}</li>
                                            <span onClick={() => onRemoveTodoItem(todo)} >
                                                <i className="fas fa-trash-alt" ></i>
                                            </span>
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
                onSubmit={addNewTodo}
            />
        </div>
    );
}

export default TodoList;
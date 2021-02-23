import React, {useState, useEffect} from 'react';


const TodoList = ( {users}) => {

    const [deleteTask, setDeleteTask] = useState(false);
    const [todoList, setTodoList] = useState([]);
    const [completed, setCompleted] = useState(true);

    useEffect( () => {

        const getTodoList = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${users}/todos`);
            const taskList = await response.json();
      
            //console.log("taskList", taskList);
            setTodoList(taskList);
      
        }
      
          getTodoList();
    }, [todoList]);

    const handleAddTask = () => {
        const newTask = document.querySelector("#tarea").value;
       // console.log('todos', userTodoList);

        setTodoList((prevState)=>{
            return [...prevState, newTask];
        });

        document.querySelector("#tarea").value="";

    }

    const handleDeleteTask = (index) =>{
       
    }

    const completeTask = (index) => {
       
    }
    return(
        <div>
            <label>Tarea</label>
            <input id="tarea" placeholder="Ingrese una tarea"></input>
            <button onClick={handleAddTask}>Agregar tarea</button>
            <h1>Lista de tareas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th> 
                        <th>Estado</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.map((todo)=>{
                            
                            return(
                                
                            <tr key= {todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? (<p>Completada</p>): (<button onClick={completeTask}>{completed ? "Completada" : "Marcar como completada"}</button>)}</td>
                            <td><button onClick={handleDeleteTask} >Eliminar</button></td>
                            </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
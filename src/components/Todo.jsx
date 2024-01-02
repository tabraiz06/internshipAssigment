import React, { useState } from 'react'
import data from '../data.json'
const Todo = () => {
    const [newTodo, setnewTodo] = useState('');
    const [Todos, setTodos] = useState([]);
const [editIndex, seteditIndex] = useState(-1);
const [editedTask, seteditedTask] = useState('');



    const onChange = (e) => {
        setnewTodo(e.target.value)
    }
    const addTask = () => {
        setTodos([...Todos, newTodo])
        setnewTodo('')
    }

const deleteTask=(index)=>{
   
    Todos.splice(index,1)
   setTodos( [...Todos])
}

const editTask=(index)=>{
seteditIndex(index)
seteditedTask(Todos[index])
}

const sevetask=(index)=>{
    const updatedtask=[...Todos]
    updatedtask[index]=editedTask
    setTodos(updatedtask)
    seteditedTask('')
    seteditIndex(-1)
}
console.log(data)
    return (
        <div>
            <input type="text" name='todo' onChange={onChange} value={newTodo} />
            <button onClick={addTask}>Add</button>
            <div>
                {Todos.map((task, index) =>
                    <div key={index}>

                       
                        <h2 >{task}</h2>
                        <button onClick={()=>deleteTask(index)}>Delete</button>
                        <button onClick={()=>editTask(index)}>Edit</button>
                        <div>
                            {editIndex===index?<>
                                <textarea name="edited todos"   onChange={(e)=>seteditedTask(e.target.value)

} value={editedTask} >{editedTask}</textarea>
<button onClick={()=>sevetask(index)}>save</button>
                            </>:<></>}
                            
                        </div>
                    </div>
               
                )}
            </div>
        </div>

    )
}

export default Todo

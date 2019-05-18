import React from 'react'

const Todos = ({todos,deleteTodo}) => {
  //return a template to work with
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item"/*collection item materialize*/ key={todo.id}/*id from arr*/>
        <i class="tiny material-icons">arrow_forward</i>
        <span>{todo.content}</span> {/*content comes from arr*/}

        <button onClick={() => {deleteTodo(todo.id)}} className="right">Delete</button>{/*use fucntion to activate fucntion with (id)*/}
        </div>
      )
    })
  ) : (<p className='center'>You have no todo's now!</p>) ;
  //use .lenght to check if any thing in todos object arr
  return (
    <div className="todos collection"/*collection is materialize class name*/>
    {todoList} {/*output our list*/}

    </div>
  )
}

export default Todos;

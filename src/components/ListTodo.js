const ListTodo = ({ storage, delFromStorage, checkboxChange }) => {
  return (
    <div className="list-css">
      {storage.length ? (
        storage.map((todo) => (
          <p key={todo.id} className={todo.checked ? "list-fade" : ""}>
            <input type="checkbox" onChange={() => checkboxChange(todo.id)} />
            &nbsp;<label>{todo.text}</label>
            <button onClick={() => delFromStorage(todo.id)}>del</button>
          </p>
        ))
      ) : (
        <p className="p-justify">No tasks</p>
      )}
    </div>
  );
};
export default ListTodo;

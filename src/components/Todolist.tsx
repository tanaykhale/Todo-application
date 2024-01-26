const Todolist = ({ todo, handleCheckbox, handleDelete }: any) => {
  return (
    <div>
      {todo.map((val: any, index: number) => (
        <li key={val.id}>
          <input
            type="checkbox"
            onChange={() => handleCheckbox(index)}
            checked={val.completed}
          />
          {val.value}{" "}
          <button type="button" onClick={() => handleDelete(val.id)}>
            Del
          </button>{" "}
        </li>
      ))}
    </div>
  );
};

export default Todolist;

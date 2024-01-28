import "./Todolist.css";
const Todolist = ({ todo, handleCheckbox, handleDelete }: any) => {
  return (
    <>
      <div className="outer-div">
        {todo.map((val: any, index: number) => (
          <div className="inner-div">
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Todolist;

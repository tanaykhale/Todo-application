import "./Todoform.css";

export default function Todoform({ tasks, handleChange, handleTodo }: any) {
  return (
    <>
      <form>
        <div className="inputItems">
          <input
            type="text"
            value={tasks}
            onChange={handleChange}
            placeholder="Enter Your work"
          />
          <button type="submit" onClick={handleTodo}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

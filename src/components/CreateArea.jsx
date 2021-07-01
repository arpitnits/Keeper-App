import React from "react";

function CreateArea(props) {
  const [task, setTask] = React.useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = React.useState(false);

  function updateTask(e) {
    const { name, value } = e.target;

    setTask((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function addTask(e) {
    props.onAdd(task);
    setTask((prev) => {
      return { title: "", content: "" };
    });
    e.preventDefault();
    setExpanded(false);
  }

  function Expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            onChange={updateTask}
            type="text"
            placeholder="Title"
            name="title"
            value={task.title}
          />
        )}
        <input
          onChange={updateTask}
          type="text"
          placeholder="Write your task..."
          row={isExpanded ? "3" : "1"}
          name="content"
          value={task.content}
          onClick={Expand}
        />

        <button onClick={addTask}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g>
                <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" />
              </g>
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

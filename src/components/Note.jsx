import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function Delete() {
    var c = props.id;
    console.log(c);
    props.ondelete(c);
  }

  return (
    <div className="note">
      <h1> {props.title}</h1>
      <p> {props.content}</p>
      <button onClick={Delete}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;

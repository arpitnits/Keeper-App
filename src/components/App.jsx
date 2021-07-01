import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = React.useState([]);

  function addNewTask(newNote) {
    setnotes((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteTask(c) {
    setnotes(notes.filter((note, index) => index !== c));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewTask} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            ondelete={deleteTask}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

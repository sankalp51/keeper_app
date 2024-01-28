import React from "react";

function Note({ id, title, content, deleteItem }) {

    function removeNote() {
        deleteItem(id);
    }

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={removeNote}>DELETE</button>
        </div>
    );
}

export default Note;

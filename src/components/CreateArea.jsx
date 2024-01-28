import React from "react";

function CreateArea({ getData, value, collectNotes, validity }) {
    function handleChange(e) {
        const { name, value } = e.target;
        getData(name, value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        collectNotes();
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onFocus={() => validity(false)} onChange={handleChange} name="title" placeholder="Title" value={value.title} />
                <textarea onFocus={() => validity(false)} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={value.content} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;

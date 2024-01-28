import React from "react";
import Header from './components/Header'
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
    const [invalid, setIsInvalid] = React.useState(false);
    const [inputData, setInputData] = React.useState({
        title: '',
        content: ''
    })

    const [notes, setNotes] = React.useState([]);

    function retriveData(name, value) {
        return setInputData(prevState => ({
            ...prevState,
            [name]: value
        }));

    }

    function collectNotes() {
        if (inputData.title.trim() === '' || inputData.content.trim() === '') {
            setIsInvalid(prevState => !prevState);
        }
        else {
            setNotes(prevState => { return [...prevState, inputData] })
            setInputData({ title: '', content: '' });
        }


    }

    function handleDelete(id) {
        setNotes((prevState) => {
            return prevState.filter((note, index) => index !== id);
        });
    }

    function handleValidity(value) {
        setIsInvalid(value);
    }


    return (
        <div>
            <Header />
            <CreateArea
                getData={retriveData}
                value={inputData}
                collectNotes={collectNotes}
                validity={handleValidity}
            />

            {invalid && <p className="warning">Cannot add empty item</p>}

            {notes.map((note, index) => (
                <Note
                    key={index}
                    title={note.title}
                    content={note.content}
                    id={index}
                    deleteItem={handleDelete}
                />
            ))}


            <Footer />
        </div>
    );
}

export default App;

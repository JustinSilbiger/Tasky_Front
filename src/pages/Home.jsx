import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../api";
import Note from "../components/Note";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Footer from '../components/Footer';

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [alert, setAlert] = useState({ message: '', type: '' });
    const navigate = useNavigate();

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
            })
            .catch((err) => setAlert({ message: err.message, type: 'danger' }));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/${id}/`)
            .then((res) => {
                if (res.status === 204) setAlert({ message: "Congrats! You completed a task!", type: 'success' });
                else setAlert({ message: "Failed to delete note.", type: 'danger' });
                getNotes();
            })
            .catch((error) => setAlert({ message: error.message, type: 'danger' }));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) setAlert({ message: "Task created!", type: 'success' });
                else setAlert({ message: "Failed to make task.", type: 'danger' });
                getNotes();
            })
            .catch((err) => setAlert({ message: err.message, type: 'danger' }));
    };

    const updateNote = (id, updatedNote) => {
        api
            .put(`/api/notes/${id}/`, updatedNote)
            .then((res) => {
                if (res.status === 200) {
                    setAlert({ message: "Your changes have been saved!", type: 'success' });
                    getNotes();
                } else {
                    setAlert({ message: "Failed to update task.", type: 'danger' });
                }
            })
            .catch((err) => setAlert({ message: err.message, type: 'danger' }));
    };

    const handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        navigate("/logout");
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-dark text-light">
            <div className="container-fluid p-5 flex-grow-1">
                {alert.message && (
                    <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                        {alert.message}
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => setAlert({ message: '', type: '' })}></button>
                    </div>
                )}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2>Create a Task:</h2>
                    <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                </div>
                <form onSubmit={createNote}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title:</label>
                        <input
                            type="text"
                            className="form-control bg-secondary text-light"
                            id="title"
                            name="title"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">What do you need to get done?</label>
                        <textarea
                            className="form-control bg-secondary text-light"
                            id="content"
                            name="content"
                            required
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div>
                    <h2 className="mt-5">Your Tasks:</h2>
                    <div className="row">
                        {notes.map((note) => (
                            <div className="col-md-4" key={note.id}>
                                <Note note={note} onDelete={deleteNote} onUpdate={updateNote} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;

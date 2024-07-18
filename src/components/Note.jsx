// src/components/Note.jsx
import React, { useState } from 'react';

const Note = ({ note, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const handleUpdate = (e) => {
        e.preventDefault();
        onUpdate(note.id, { title, content });
        setIsEditing(false);
    };

    return (
        <div className="card mb-3">
            {isEditing ? (
                <form onSubmit={handleUpdate} className="card-body">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">What else do you need to get done?</label>
                        <textarea
                            className="form-control"
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                    <button type="button" className="btn btn-secondary ms-2" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.content}</p>
                    <button className="btn btn-warning" onClick={() => setIsEditing(true)}>Edit</button>
                    <button className="btn btn-success ms-2" onClick={() => onDelete(note.id)}>Completed?</button>
                </div>
            )}
        </div>
    );
};

export default Note;

import React from "react";
import NoteItem from "./NoteItem";

const NoteList = (props) => {
  const { notes, onDelete, onArchive, onUnarchive } = props;
  if (notes.length > 0) {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            id={note.id}
            archived={note.archived}
            onDelete={onDelete}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
          />
        ))}
      </div>
    );
  } else {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  }
};

export default NoteList;

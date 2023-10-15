import React from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./NoteHeader";
import InputNote from "./InputNote";
import NoteList from "./NoteList";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      archiveNotes: [],
      searchKeyword: "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onSearchHandler({ title }) {
    this.setState((prevState) => ({
      ...prevState,
      searchKeyword: title,
    }));
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const deletNotes = this.state.notes.filter((note) => note.id !== id);
    const deleteArchivedNote = this.state.archiveNotes.filter(
      (note) => note.id !== id
    );
    this.setState(() => ({
      notes: deletNotes,
      archiveNotes: deleteArchivedNote,
    }));
  }

  onArchiveHandler(id) {
    const updateNotes = this.state.notes.filter((note) => note.id !== id);
    const archivedNote = this.state.notes.find((note) => note.id === id);
    archivedNote.archived = true;

    this.setState((prevState) => ({
      notes: updateNotes,
      archiveNotes: [...prevState.archiveNotes, archivedNote],
    }));
  }

  onUnarchiveHandler(id) {
    const updatedArchiveNotes = this.state.archiveNotes.filter(
      (note) => note.id !== id
    );
    const unarchivedNote = this.state.archiveNotes.find(
      (note) => note.id === id
    );
    unarchivedNote.archived = false;
    this.setState((prevState) => ({
      notes: [...prevState.notes, unarchivedNote],
      archiveNotes: updatedArchiveNotes,
    }));
  }

  render() {
    return (
      <>
        <NoteHeader searchNote={this.onSearchHandler} />
        <div className="note-app__body">
          <div className="note-input">
            <h1>Buat Catatan</h1>
            <InputNote addNote={this.onAddNoteHandler} />
          </div>
          <h2>Catatan Aktif</h2>

          <NoteList
            notes={
              this.state.searchKeyword !== null
                ? this.state.notes.filter((note) => {
                    return note.title
                      .toLowerCase()
                      .includes(this.state.searchKeyword.toLowerCase());
                  })
                : this.state.notes
            }
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <h2>Arsip</h2>
          <NoteList
            notes={
              this.state.searchKeyword !== null
                ? this.state.archiveNotes.filter((note) => {
                    return note.title
                      .toLowerCase()
                      .includes(this.state.searchKeyword.toLowerCase());
                  })
                : this.state.archiveNotes
            }
            onDelete={this.onDeleteHandler}
            onUnarchive={this.onUnarchiveHandler}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;

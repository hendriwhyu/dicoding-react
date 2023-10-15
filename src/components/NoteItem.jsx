import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";
import { showFormattedDate } from "../utils";

const NoteItem = (props) => {
  const { title, body, id, createdAt, onDelete, onArchive,onUnarchive, archived } = props;
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} />
      <NoteItemAction
        onDelete={onDelete}
        archived={archived}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
        id={id}
      />
    </div>
  );
};

export default NoteItem;

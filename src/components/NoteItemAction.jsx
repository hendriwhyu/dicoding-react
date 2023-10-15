import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

const NoteItemAction = (props) => {
  const { onDelete, onArchive, id, archived, onUnarchive } = props;
  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} archived={archived} onArchive={onArchive}  onUnarchive={onUnarchive}/>
    </div>
  );
};

export default NoteItemAction;

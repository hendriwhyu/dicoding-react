import React from "react";

const ArchiveButton = (props) => {
  const { id, onArchive, archived, onUnarchive } = props;
  return (
    <button
      className="note-item__archive-button"
      onClick={archived === false ? () => onArchive(id) : () => onUnarchive(id)}
    >
      {archived === false ? "Arsipkan" : "Pindahkan"}
    </button>
  );
};


export default ArchiveButton;

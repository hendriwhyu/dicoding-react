import React from "react";

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
  const title = event.target.value;
  this.setState({ title }, () => {
    this.props.searchNote({ title });
  });
}

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari catatan ..."
            value={this.state.title}
            onChange={this.onSearchChangeEventHandler}
          />
        </div>
      </div>
    );
  }
}

export default NoteHeader;

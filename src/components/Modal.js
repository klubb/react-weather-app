import React, { Component } from "react";
import Popup from "reactjs-popup";
import Deletebutton from "./Deletebutton";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      edit: false
    };
  }
  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  openInput = () => {
    this.setState({
      edit: !this.state.edit
    });
  };
  handleEdit = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleUpdate = () => {
    this.props.editActivity();
    this.setState({
      edit: !this.state.edit
    });
  };

  render() {
    console.log(this.props.displayItem);
    return (
      <div>
        <button onClick={this.openModal}>My Activities</button>
        <Popup
          open={this.state.open}
          onClose={this.closeModal}
          modal
          closeOnDocumentClick
          closeOnEscape
        >
          <div className="header"> My Activities</div>
          <hr />
          <span>
            {this.state.edit ? (
              <input onChange={this.handleEdit} placeholder="edit activity" />
            ) : (
              this.props.displayItem
            )}
          </span>
          <Deletebutton handleDelete={this.props.handleDelete} />
          <button onClick={this.closeModal}>Close</button>
          <button onClick={this.openInput}>Edit</button>
        </Popup>
        {/* <button onClick={this.openModal}>Create Activity</button> */}

        <Popup
          onOpen={this.props.handleClick}
          trigger={<button className="button"> Create Activity </button>}
          modal
          closeOnDocumentClick
          closeOnEscape
        >
          <span>
            Activity - {this.props.createPost}
            <hr />
            Participants - {this.props.numberInput}
            <hr />
            Price - {this.props.priceInput}
            <hr />
            Type - {this.props.typeInput}
          </span>
          <div>
            <button onClick={this.props.handleSave}>Save</button>

            <Deletebutton handleDelete={this.props.handleDelete} />
          </div>
        </Popup>
      </div>
    );
  }
}

export default Modal;

// {close => (
//     <div className="modal">
//       <div className="actions">
//         <button
//           className="button"
//           onClick={() => {console.log("modal closed ");
//             close();
//           }}>
//           close modal
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { Component } from "react";
import axios from "axios";
import Modal from "./Modal";
import Popup from "reactjs-popup";

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createPost: "",
      numberInput: "",
      priceInput: "",
      typeInput: "",
      createdItem: [],
      
    };
  }

  handleCreateActivity = e => {
    this.setState({
      createPost: e.target.value
    });
  };

  handleCreatePeople = e => {
    this.setState({
      numberInput: e.target.value
    });
  };

  handleCreatePrice = e => {
    this.setState({
      priceInput: e.target.value
    });
  };
  handleCreateType = e => {
    this.setState({
      typeInput: e.target.value
    });
  };

  handleSave = () => {
    this.setState({
      createPost: "",
      numberInput: "",
      priceInput: "",
      typeInput: ""
    })
  }

  handleClick = () => {
    axios
      .post("/api/items", {
        input: this.state.createPost,
        number: this.state.numberInput,
        price: this.state.priceInput,
        type: this.state.typeInput
      })
      .then(res => {
        
        this.setState({
          
          createdItem: [
            [res.data[0].input],
            [res.data[0].number],
            [res.data[0].price],
            [res.data[0].type]
          ]
          
        });
        
      });
  };

  handleDelete = () => {
    this.props.deleteActivity();
    this.setState({
      createdItem: []
    });
  };

  editActivity = (str, index) => {
    axios.put(`/api/items/${index}`, { newMessage: str, index }).then((res) => {
      this.setState({
        createdItem: res.data
      })
    })
  }

  render() {

    
    const displayItem = this.state.createdItem.map((item, i) => {
      return (
        <div key={i}>
          <p>{item}</p>
          <hr />
        </div>
      );
    });
    console.log(this.state.createPost);
    console.log(this.state.numberInput);
    console.log(this.state.priceInput);
    console.log(this.state.typeInput);
    

    return (
      <div className="form">
        <input 
          value={this.state.createPost}
          onChange={this.handleCreateActivity}
          placeholder="Create Activity"
          type="text"
        />
        <input
          value={this.state.numberInput}
          onChange={this.handleCreatePeople}
          placeholder="# of people"
          type="text"
        />
        <input
          value={this.state.priceInput}
          onChange={this.handleCreatePrice}
          placeholder="Price"
          type="text"
        />
        <input
          value={this.state.typeInput}
          onChange={this.handleCreateType}
          placeholder="Type "
          type="text"
        />
        <Modal
          createdItem={this.state.createdItem}
          editActivity={this.editActivity}
          handleSave={this.handleSave}
          createPost={this.state.createPost}
          numberInput={this.state.numberInput}
          priceInput={this.state.priceInput}
          typeInput={this.state.typeInput}
          displayItem={displayItem}
          handleClick={this.handleClick}
          handleDelete={this.handleDelete}
        />
        
      </div>
    );
  }
}

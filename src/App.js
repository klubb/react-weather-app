import React from "react";

import Titles from "./components/Titles";
import axios from "axios";
import Form from "./components/Form";
import Activity from "./components/Activity";
import Modal from "./components/Modal";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: "",
      type: undefined,
      participants: undefined,
      price: undefined,
      display: false
    };
  }

  // componentDidMount = () => {
  //   axios.get("http://boredapi.com/api/activity/").then(response => {
  //     console.log(response.data);
  //   });
  // };

  getResults = () => {
    axios.get("http://boredapi.com/api/activity/").then(response => {
      console.log(response.data);
      this.setState({
        activity: response.data.activity,
        participants: response.data.participants,
        price: response.data.price * 50,
        type: response.data.type
      });
    });
  };

  deleteActivity = () => {
    axios.delete(`/api/items/`).then(res => {
      this.setState({

      });
    });
  };

  

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                  
                  
                </div>
                <div className="col-xs-7 form-container">
                  <Form results={this.getResults} />
                  <Activity
                    display={this.state.display}
                    deleteActivity={this.deleteActivity}
                  />
                  <div className="results">
                    {this.state.display ? (
                      <div>
                        <p>Activity - {this.state.activity}</p>
                        <hr />

                        <p>Participants - {this.state.participants}</p>
                        <hr />
                        <p>Price - ${this.state.price}</p>
                        <hr />
                        <p>Type - {this.state.type}</p>
                      </div>
                    ) : (
                      (this.state.display = true)
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

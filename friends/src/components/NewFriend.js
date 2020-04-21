import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

class NewFriend extends React.Component {
    state = {
        newFriend: {
            id: "",
            name: "",
            age: "",
            email: ""
        }
      };

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value, [e.target.age]: e.target.value, [e.target.email]: e.target.email
            }
        });
    };

    addNewFriend = () => {
        axiosWithAuth()
        .post("/api/friends", this.state.newFriend)
        .then(res => {
            console.log("Post New Friend Success: ", res);
            this.updateId();
        })
        .catch(err => {
            console.log("Post New Friend Error: ", err)
        })
    }

    updateId = e => {
        axiosWithAuth()
        .put("./api/friends/:id", this.state.newFriend.id)
        .then(res => {
            console.log("ID update success: ", res)
        })
        .catch(err => {
            console.log("ID update error: ", err )
        })
    }

    render() {
        return (
            <div className="newFriend">
            <form onSubmit={this.addNewFriend}>
                <span>Name:</span>
                <input 
                    type="text"
                    name="name"
                    value={this.state.newFriend.name}
                    onChange={this.handleChange}
                />
                <span>Age:</span>
                <input 
                    type="text"
                    name="age"
                    value={this.state.newFriend.age}
                    onChange={this.handleChange}
                />
                <span>Email:</span>
                <input 
                    type="text"
                    name="email"
                    value={this.state.newFriend.email}
                    onChange={this.handleChange}
                />
                <button>Add New Friend</button>
            </form>
        </div>
        )
    }
};

export default NewFriend;
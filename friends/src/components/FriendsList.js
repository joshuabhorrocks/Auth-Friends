import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import NewFriend from "./NewFriend";

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            console.log("Axios Get Succeeded: ", res)
            this.setState({
                friendsList: res.data
            })
        })
        .catch(err => {
            console.log("Axios Get Failed: ", err)
        })
    };


    render() {
        return (
            <div className="your-friends">
                <h1>Your Friends!</h1>
                {this.state.friendsList.map(item => (
                    <div className="data-return">
                    <h3>Name: {item.name}</h3>
                    <p>Age: {item.age}</p>
                    <p>Email: {item.email}</p>
                    </div>
                ))}
                <h2>Add a New Friend!</h2>
                <NewFriend />
            </div>
        )
    }

}

export default FriendsList;
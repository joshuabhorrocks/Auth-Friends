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
            <div>
                <h1>Your Friends!</h1>
                {this.state.friendsList.map(item => (
                    <div>
                    <h3>{item.name}</h3>
                    <p>{item.age}</p>
                    <p>{item.email}</p>
                    </div>
                ))}
                <h2>Add a New Friend!</h2>
                <NewFriend />
            </div>
        )
    }

}

export default FriendsList;
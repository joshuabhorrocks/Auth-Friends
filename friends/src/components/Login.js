import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/login", this.state.credentials)
        .then(res => {
            console.log("Post Success: ", res);
            localStorage.setItem("token", res.data.payload);
            this.props.history.push("/friends");
        })
        .catch(err => {
            console.log("Post Error: ", err)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
import React, {useState} from "react";

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitData: null
        }
    }

    componentDidMount() {

    }

    getGitData = () => {
        // TODO commented out to save on the API call limit during testing
        // const repoAPI = "https://api.github.com/users/maxorozco213/repos";
        const repoAPI = ""
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        }
        fetch(repoAPI, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log(error));

        console.log(this.state.gitData)
    }

    render() {
        return (
            <div key={2}>
                Test
            </div>
        );
    }
}
import React from "react";
// 3rd Party Components
import Draggable from "react-draggable";
// Custom Components
import SkipButton from "../Components/Main/SkipButton";
// Styles
import "../Styles/Home/Main.css";
import AnimatedTerminal from "../Components/Main/AnimatedTerminal";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDrags: 0
        }
    }

    onStart = () => {
        let change = this.state.activeDrags
        this.setState({activeDrags: ++change})
    }

    onStop = () => {
        let change = this.state.activeDrags
        this.setState({activeDrags: --change})
    }

    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop}
        const commands = {
            echo: {
                description: "Pass as string",
                usage: "echo <string>",
                fn: function () {
                    return `${Array.from(arguments).join(` `)}`
                }
            },
            goto: {
                description: "Navigate to a page",
                usage: "echo <experience, education, projects>",
                fn: function () {
                    return `Navigate to ${Array.from(arguments)}`
                }
            }
        }

        /*
            Have the user type in a few command to show contact information and social media links
            Allow skip button to skip the terminal window
        */

        return(
            <div className={"main-container"}>
                <SkipButton />
                <div className={"info-container"}>
                    <h1 className={"main-text"}>Maximilian H. Orozco</h1>
                    <h2 className={"main-text"}>Software Engineer</h2>
                    <h3 className={"link-text"}>GitHub</h3>
                    <a href={"https://www.linkedin.com/in/maximilian-h-orozco/"} target={"_blank"} rel={"noopener noreferrer"}>
                        <h3 className={"link-text"}>LinkedIn</h3>
                    </a>
                </div>
                <Draggable
                    handle={".handle"}
                    {...dragHandlers}
                    axis={"both"}
                    defaultPosition={{x: 910, y: 150}}
                    grid={[30, 25]}
                >
                    <div className={"handle"} style={{width: "initial", maxWidth: "30%", height: "500px"}}>
                        <AnimatedTerminal commands={commands} />
                    </div>
                </Draggable>
            </div>
        )
    }
}
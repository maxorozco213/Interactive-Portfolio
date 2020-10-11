import React from "react";
// 3rd Party Components
import Draggable from "react-draggable";
import Terminal from "react-console-emulator";
// Styles
import "../Styles/Home/Main.css";

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
                usage: "echo <string>",
                fn: function () {
                    return `${Array.from(arguments).join(` `)}`
                }
            }
        }

        return(
            <div className={"main-container"}>
                <div className={"skip-button-container"}>
                    <button>Skip the intro page -></button>
                </div>
                <Draggable
                    handle={".handle"}
                    {...dragHandlers}
                    axis={"both"}
                    defaultPosition={{x: 1000, y:350}}
                    grid={[5, 5]}
                    scale={1}
                >
                    <div className={"handle"} style={{width: "initial", maxWidth: "25%"}}>
                        <Terminal
                            autoFocus
                            commands={commands}
                            welcomeMessage={"Maximilian Orozco"}
                            backgroundSize={"inherit"}
                        />
                    </div>
                </Draggable>
            </div>
        )
    }
}
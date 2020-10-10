import React from "react";
// 3rd Party Components
import Draggable from "react-draggable";
import Terminal from "terminal-in-react";
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
        this.setState({activeDrags: ++this.state.activeDrags})
    }

    onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags})
    }

    render() {
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop}
        return(
            <div className={"main-container"}>
                <Draggable
                    handle={".handle"}
                    {...dragHandlers}
                    axis={"both"}
                    defaultPosition={{x: 1000, y:350}}
                    grid={[5, 5]}
                    scale={1}
                    style={{height: "20%", width: "30%"}}
                >
                    <div className={"handle"} style={{width: "22%", height: "auto"}}>
                        <Terminal
                            color={"green"}
                            backgroundColor={"black"}
                            barColor={"black"}
                            allowTabs={false}
                            msg={"Enter a command to get started"}
                            style={{
                                fontSize: "2em",
                                width: "inherit",
                                height: "inherit"
                            }}
                        />
                    </div>
                </Draggable>
            </div>
        )
    }
}
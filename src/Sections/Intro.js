import React from "react";
// 3rd Party Components
import Draggable from "react-draggable";
// Custom Components
import SkipButton from "../Components/Main/SkipButton";
// Styles
import "../Styles/Home/Main.css";
import AnimatedTerminal from "../Components/Main/AnimatedTerminal";
import {Redirect} from "react-router-dom";

export default class Intro extends React.Component {
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
                    if (arguments[0] === 'main')
                    return <Redirect exact to={"/Main"} />
                }
            },
            contact: {
                description: "Show contact information",
                usage: "contact <show-all, socials, info>",
                fn: function () {
                    let phone = "Phone: (213)369-8412";
                    let email = "Email: maxorozco213@gmail.com";
                    let linkedIn = "LinkedIn: /in/maximilian-h-orozco/";
                    let github = "GitHub: /maxorozco213"
                    if (arguments[0] === 'show-all') {
                        return `${phone}\n${email}\n${linkedIn}\n${github}`
                    } else if (arguments[0] === 'contact-info') {
                        return `${phone}\n${email}`
                    } else if (arguments[0] === 'socials') {
                        return `${linkedIn}\n${github}`
                    } else {
                        return "Invalid command"
                    }

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
                    <h1 className={"default-text"}>Maximilian H. Orozco</h1>
                    <h2 className={"default-text"}>
                        Software Engineer <br /><br />
                        <a href={"https://github.com/maxorozco213"} target={"_blank"} rel={"noopener noreferrer"}>
                            <span className={"link-text"}>GitHub</span>
                        </a>
                        <span> | </span>
                        <a href={"https://www.linkedin.com/in/maximilian-h-orozco/"} target={"_blank"} rel={"noopener noreferrer"}>
                            <span className={"link-text"}>LinkedIn</span>
                        </a>
                    </h2>


                </div>
                <div className={"terminal-container"}>
                    <Draggable
                        handle={".handle"}
                        {...dragHandlers}
                        axis={"both"}
                        grid={[30, 25]}
                    >
                        <div className={"handle"} style={{height: "500px"}}>
                            <AnimatedTerminal commands={commands} />
                        </div>
                    </Draggable>
                </div>
            </div>
        )
    }
}
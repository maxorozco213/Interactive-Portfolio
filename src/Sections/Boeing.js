import React from "react";
// Styles
import "../Styles/SectionContents/Boeing.css";
// Data
import * as data from "../education.json";
import {Divider} from "semantic-ui-react";

const Boeing = () => {
    const dataVar = data.internship;
    return (
        <div className={"odas-container"}>
            <div className={"odas-title"}>
                <h1>Operations Data Analysis & Management System</h1>
                <h2 style={{fontStyle: "italic"}}>sponsored by Boeing</h2> <br/>
            </div>
            <div style={{marginTop: "1%"}}>
                <h3>Abstract</h3>
                <Divider />
                <span>{dataVar.abstract}</span>
            </div>
            <div>
                <div className={"odas-top-row"}>
                    <div>
                        <h3>Front-end</h3>
                        <Divider />
                        <span>{dataVar.frontend}</span>
                    </div>
                    <div>
                        <h3>Backend</h3>
                        <Divider />
                        <span>{dataVar.backend}</span>
                    </div>
                    <div>
                        <h3>Machine Learning</h3>
                        <Divider />
                        <span>{dataVar.machine}</span>
                    </div>
                </div>
                <div className={"odas-bot-row"}>
                    <div>
                        <h3>Docker Containers</h3>
                        <Divider />
                        <span>{dataVar.container}</span>
                    </div>
                    <div>
                        <h3>Amazon Web Services</h3>
                        <Divider />
                        <span>{dataVar.aws}</span>
                    </div>
                    <div>
                        <h3>Database</h3>
                        <Divider />
                        <span>{dataVar.database}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boeing;
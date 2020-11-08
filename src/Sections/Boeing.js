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
                <h2>Operations Data Analysis & Management System</h2>
                <h3 style={{fontStyle: "italic"}}>sponsored by Boeing</h3> <br/>
            </div>
            <div style={{marginTop: "1%"}}>
                <h3>Abstract</h3>
                <div>{dataVar.abstract}</div>
            </div>
            <div>
                <div className={"odas-top-row"}>
                    <div>
                        <span>Front-end</span>
                        <Divider />
                        {dataVar.frontend}
                    </div>
                    <div>
                        <span>Backend</span>
                        <Divider />
                        {dataVar.backend}
                    </div>
                    <div>
                        <span>Machine Learning</span>
                        <Divider />
                        {dataVar.machine}
                    </div>
                </div>
                <div className={"odas-bot-row"}>
                    <div>
                        <span>Containers</span>
                        <Divider />
                        {dataVar.container}
                    </div>
                    <div>
                        <span>Amazon Web Services</span>
                        <Divider />
                        {dataVar.aws}
                    </div>
                    <div>
                        <span>Database</span>
                        <Divider />
                        {dataVar.database}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boeing;
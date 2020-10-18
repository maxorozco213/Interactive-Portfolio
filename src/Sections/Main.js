import React from 'react';
// Custom components
import Header from "../Components/Main/Header";
import Section from "./Section";
// Styles
import "../Styles/Image.css";
import "../Styles/Pages/Main.css";
import profileImage from "../Images/profileImage.jpg";

export default class Main extends React.Component {
    render() {
        return (
            <div className={"main"}>
                <div className={"main-container"}>
                    <div>
                        <Header />
                        <div className={"image-container"}>
                            <img
                                className={"profile-image"}
                                src={profileImage}
                                alt={"Self portrait"}
                            />
                        </div>
                        <div className={"info-container"}>
                            <h1>Maximilian Hawk Orozco</h1>
                            <h2>Software Engineer</h2>
                            <h2>Los Angeles, CA</h2>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
import React from 'react';
// Custom components
import Header from "../Components/Main/Header";
import Section from "./Section";
// Styles
import "../Styles/Image.css";
import "../Styles/Pages/Main.css";
import profileImage from "../Images/profileImage.jpg";
// Variables
let sectionsArray = ["Education", "Experience", "Projects", "Senior Design"];

const sectionID = ["education", "experience", "projects"];

export default class Main extends React.Component {
    // Takes the titles from array defined above
    // Passes to section component to get the correct content and display on alternating sides
    // Even number is left side and odd number is right side
    showSections = () => {
        return sectionsArray.map((section, index) => {
            return (
                <div key={index} id={sectionID[index]}>
                    <Section
                        title={section}
                        isLeftOrRight={index}
                    />
                </div>
            );
        });
    }

    render() {
        return (
            <div className={"main"}>
                <div>
                    <div id={"back"} />
                    <div id={"front"} />
                </div>
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
                            <h2>Front-end Software Engineer</h2>
                            <h2>Los Angeles, CA</h2>
                        </div>
                    </div>
                </div>
                {this.showSections()}
                {/*
                    TODO ->
                        Need to call a function that loops and returns the sections
                        Can use index from the map function to get the even/odd pattern
                            i.e. .map(value, index)
                        Using this means the isRightSide logic needs to be reversed so left is even
                */}
            </div>
        );
    }
}
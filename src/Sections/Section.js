import React from "react";
// Custom components
import SectionHeader from "../Components/Main/SectionHeader";
import Education from "../Components/TextContent/Education";
import Experience from "../Components/TextContent/Experience";
import Projects from "../Components/TextContent/Projects";
// Styles
import "../Styles/Components/SectionHeader.css";
import "../Styles/Pages/Section.css";
// Images
import education from "../Images/interface.png";
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";

const Section = ({title, isLeftOrRight}) => {
    // Determine current section and return the matching component - Contains the text
    function getTextContent() {
        console.log(title, "Section.js line 13")
        switch (title) {
            case "Education":
                return <Education />
            case "Experience":
                return <Experience />
            case "Projects":
                return <Projects />
            default:
                console.log("Error - Section.js Line 21")
        }
    }

    // Contains the image
    function imageContent() {
        switch (title) {
            case "Education":
                return (
                    <Parallax ref={ref => (this.parallax = ref)} pages={3}>
                        <ParallaxLayer offset={0} speed={0.5}>
                            <img src={education} alt={"Education"} />
                        </ParallaxLayer>
                    </Parallax>
                );
            case "Experience":
                return (
                    <img
                        src={education}
                        alt={"Education"}
                    />
                );
            case "Projects":
                return (
                    <img
                        src={education}
                        alt={"Education"}
                    />
                );
            default:
                console.log("Error - Section.js Line 35")
        }
    }

    /*
        Determines what side the passed items will render on - Odd is left and even is right
        Headers and images will be decided here
        Text/Formatting is decided on the returned text sections
    */

    if (isLeftOrRight % 2 === 0) {
        return (
            // Left side
            <div key={isLeftOrRight}>
                <SectionHeader
                    title={title}
                    isRightSide={false}
                />
                <div className={"section-content"}>
                    {getTextContent()}
                    {imageContent()}
                </div>
            </div>
        );
    } else {
        // Right side
        return (
            <div key={isLeftOrRight}>
                <SectionHeader
                    title={title}
                    isRightSide={true}
                />
                <div className={"section-content"}>
                    {imageContent()}
                    {getTextContent()}
                </div>
            </div>
        );
    }
}

export default Section;
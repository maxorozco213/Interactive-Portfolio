import React from "react";
// Custom components
import SectionHeader from "../Components/Main/SectionHeader";
import Education from "../Components/TextContent/Education";
import Experience from "../Components/TextContent/Experience";
import Projects from "../Components/TextContent/Projects";
// Styles
import "../Styles/Components/SectionHeader.css";

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
                return ""
            case "Experience":
                return ""
            case "Projects":
                return ""
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
            <div className={""}>
                <SectionHeader
                    title={title}
                    isRightSide={false}
                />
                {getTextContent()}
            </div>
        );
    } else {
        return (
            <div>
                <SectionHeader
                    title={title}
                    isRightSide={true}
                />
                {getTextContent()}
            </div>
        );
    }
}

export default Section;
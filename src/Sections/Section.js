import React from "react";
// Custom components
import SectionHeader from "../Components/Main/SectionHeader";
import Education from "../Components/TextContent/Education";
import Experience from "../Components/TextContent/Experience";
import Projects from "../Components/TextContent/Projects";
// Styles
import "../Styles/Components/SectionHeader.css";

const Section = ({isLeftOrRight, title}) => {
    function getTextContent() {
        if (title === "Education") {
            return <Education />
        } else if (title === "Experience") {
            return <Experience />
        } else if (title === "Projects") {
            return <Projects />
        }
    }

    function imageContent() {
        if (title === "Education") {
            return <Education />
        } else if (title === "Experience") {
            return <Experience />
        } else if (title === "Projects") {
            return <Projects />
        }
    }

    if (isLeftOrRight % 2 === 0) {
        return (
            <div className={""}>
                <SectionHeader
                    title={title}
                    isRightSide={false}
                />
                <div id={"text-container"}>
                    {getTextContent}
                </div>
                <div id={"image-container"}>
                    {imageContent}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <SectionHeader
                    title={title}
                    isRightSide={true}
                />
                <div id={"image-container"}>
                    {imageContent}
                </div>
                <div id={"text-container"}>
                    {getTextContent}
                </div>

            </div>
        );
    }
}

export default Section;
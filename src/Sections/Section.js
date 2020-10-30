import React, {useEffect, useRef} from "react";
// Custom components
import SectionHeader from "../Components/Main/SectionHeader";
import Education from "../Components/TextContent/Education";
import Experience from "../Components/TextContent/Experience";
import Projects from "../Components/TextContent/Projects";
// 3rd party components
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
import {animated, useSpring} from "react-spring";
// Styles
import "../Styles/Components/SectionHeader.css";
import "../Styles/Pages/Section.css";
// Images
import education from "../Images/interface.png";

const calc = o => `translateY(${o * 0.04}px)`;

const Section = ({title, isLeftOrRight}) => {
    const ref = useRef();
    const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

    const handleScroll = () => {
        const posY = ref.current.getBoundingClientRect().top;
        const offset = window.pageYOffset - posY;
        set({ offset });
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return() => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

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

    // Contains the
    // image
    function imageContent() {
        switch (title) {
            case "Education":
                return (
                    <animated.div
                        style={{
                            transform: offset.interpolate(calc)
                        }}
                    >
                        <img
                            className={"section-image-right"}
                            src={education}
                            alt={"Education"}
                        />
                    </animated.div>
                );
            case "Experience":
                return (
                    <animated.div
                        style={{
                            transform: offset.interpolate(calc)
                        }}
                    >
                        <img
                            className={"section-image-left"}
                            src={education}
                            alt={"Education"}
                        />
                    </animated.div>
                );
            case "Projects":
                return (
                    <animated.div
                        style={{
                            transform: offset.interpolate(calc)
                        }}
                    >
                        <img
                            className={"section-image-right"}
                            src={education}
                            alt={"Education"}
                        />
                    </animated.div>
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
            <div key={isLeftOrRight} ref={ref}>
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
            <div key={isLeftOrRight} ref={ref}>
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
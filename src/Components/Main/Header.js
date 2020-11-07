import React from "react";
import pdf from "../../Images/resume.pdf";
// Styles
import "../../Styles/Components/Header.css";
import {Button} from "semantic-ui-react";

const Header = () => {
    return (
        <div className={"header-container"}>
            <div className={"section-links"}>
                <a href={"#education"}><button><h3>Education</h3></button></a>
                <a href={"#experience"}><button><h3>Experience</h3></button></a>
                <a href={"#projects"}><button><h3>Projects</h3></button></a>
                <a href={"#senior-design"}><button><h3>Senior Design</h3></button></a>
            </div>
            <div className={"resume-link"}>
                <a href={pdf} target={"_blank"} rel={"noopener noreferrer"}>
                    <Button>
                        Resume
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default Header;
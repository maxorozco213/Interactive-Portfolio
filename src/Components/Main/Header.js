import React from "react";
import pdf from "../../Images/resume.pdf";
// Styles
import "../../Styles/Components/Header.css";
import {Button} from "semantic-ui-react";

const Header = () => {
    return (
        <div className={"header-container"}>
            <div className={"section-links"}>
                <a href={"#education"}><button>Education</button></a>
                <a href={"#experience"}><button>Experience</button></a>
                <a href={"#projects"}><button>Projects</button></a>
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
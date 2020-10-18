import React from "react";
import "../../Styles/Components/SectionHeader.css";

const SectionHeader = ({title, isRightSide}) => {
    return (
        <div className={isRightSide ? "section-header-left": ""}>
            <div className={"section-header"}>
                <h2 className={"section-title"}>{title}</h2>
            </div>
        </div>
    );
}

export default SectionHeader;
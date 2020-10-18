import React from 'react';
// Custom components
import SectionHeader from "../Components/Main/SectionHeader";
// Styles
import "../Styles/Components/SectionHeader.css";

const RightSection = () => {
    return (
        <div className={""}>
            <SectionHeader
                title={"Education"}
                justification={"right"}
            />
        </div>
    );
}

export default RightSection;
import React, {useState} from "react";
// 3rd Party components
import {animated, useSpring, useTransition} from "react-spring";
// Styles
import "../../Styles/Components/SectionHeader.css";

const SectionHeader = ({title, isRightSide}) => {
    const slideInFromLeft = useSpring({
        opacity: 1,
        marginRight: 0,
        from: {
            opacity: 0,
            marginRight: 500
        },
        delay: 1000
    });

    const slideInFromRight = useSpring({
        opacity: 1,
        marginLeft: 0,
        from: {
            opacity: 0,
            marginLeft: 500
        },
        delay: 1000
    });

    // const [show, set] = useState(false);
    // const slideInFromRightTransition = useTransition(show, null, {
    //     from: {
    //         opacity: 0,
    //         marginLeft: 500
    //     },
    //     enter: { opacity: 1, marginLeft: 0 },
    //     leave: { opacity: 0, marginLeft: 500 }
    // })

    return (
        <div className={isRightSide ? "section-header-right": "section-header-left"}>
            <div className={isRightSide ? "title-container-right" : "title-container-left"}>
                <h2 className={isRightSide ? "section-title-right" : "section-title-left"}>{title}</h2>
                <animated.div style={isRightSide ? slideInFromRight : slideInFromLeft} className={"section-divider"} />
                {/*<animated.div style={slideInFromRightTransition} className={"section-divider"} />*/}
            </div>
        </div>
    );
}

export default SectionHeader;
import React, {useState} from 'react';
import {Link} from "react-router-dom";
// 3rd party components
import {useSpring, animated} from 'react-spring';
// Styles
import "../../Styles/Components/SkipButton.css";

const SkipButton = () => {
    const [isToggle] = useState(false)

    const props = useSpring({
        opacity: isToggle ? 1 : 16,
        marginTop: "20%",
        from: {
            marginTop: "-500px",
            opacity: 0,
        },
        delay: 1000,
        config: {mass: 1, tension: 280, friction: 60}
    });

    return (
        <animated.div
            style={props}
            className={"skip-button-container"}
        >
            <Link to={"/Main"}>
                <button
                    className={"skip-button"}
                >
                    <span className={"skip-button-font"}>Skip the terminal</span>
                </button>
            </Link>
        </animated.div>
    );
}

export default SkipButton;
import React, {useState} from 'react';
// 3rd party components
import {useSpring, animated} from 'react-spring';
// Styles
import {Button} from "semantic-ui-react";

const SkipButton = () => {
    const [isToggle, setToggle] = useState(false)

    const props = useSpring({
        opacity: isToggle ? 1 : 16,
        marginTop: "20%",
        from: {
            marginTop: "-500px",
            opacity: 0,
        },
        delay: 1000
    });

    return (
        <animated.div
            style={props}
            className={"skip-button-container"}
        >
            <Button
                className={"skip-button"}
                onClick={() => console.log("Go to homepage")}
            >
                <span className={"skip-button-font"}>Skip the terminal</span>
            </Button>
        </animated.div>
    );
}

export default SkipButton;
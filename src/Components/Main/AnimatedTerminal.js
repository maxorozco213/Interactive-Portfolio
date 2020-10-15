import React from 'react';
import {useSpring, animated} from 'react-spring';
import Terminal from "react-console-emulator";

const AnimatedTerminal = ({commands}) => {
    const fadeIn = useSpring({
        opacity: 1,
        from: {
            opacity: 0
        },
        delay: 2000
    })

    return (
        <animated.div style={fadeIn}>
            {/*<h4 className={"default-text"}>Try entering "help" below</h4>*/}
            <Terminal
                autoFocus
                commands={commands}
                welcomeMessage={"Maximilian H. Orozco | Portfolio and Resume, 2020 \n Enter 'help' to get started"}
                className={"terminal-window"}
            />
        </animated.div>
    )
}

export default AnimatedTerminal;
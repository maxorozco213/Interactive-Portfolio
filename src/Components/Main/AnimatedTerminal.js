import React from 'react';
import {useSpring, animated} from 'react-spring';
import Terminal from "react-console-emulator";

const AnimatedTerminal = ({commands}) => {
    const fadeIn = useSpring({
        opacity: 1,
        from: {
            opacity: 0
        },
        delay: 1500
    })

    return (
        <animated.div style={fadeIn}>
            <Terminal
                autoFocus
                commands={commands}
                welcomeMessage={"Maximilian H. Orozco \n Portfolio and Resume, 2020"}
                className={"terminal-window"}
            />
        </animated.div>
    )
}

export default AnimatedTerminal;
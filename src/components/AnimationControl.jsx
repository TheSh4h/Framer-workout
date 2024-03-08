import { motion, useAnimationControls } from "framer-motion";

const AnimationControl = () => {
    const controls = useAnimationControls();

    const handleClick = () => {
        controls.start("flip")
    }
    return ( 
        <div
          style={{
              display: "grid",
              placeContent: "center",
              height: "100vh",
              gap: "0.8rem",
          }}
        >
            <motion.button
             onClick={handleClick}
             className="example-button">
                Flip It
            </motion.button>
            <motion.div
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: "black",
                }}
                variants={{
                    initial: {
                        rotate: "0deg",
                    },
                    flip: {
                        rotate: "360deg",
                    },
                }}
                initial="initial"
                animate={controls}
            ></motion.div>

        </div>
     );
}
 
export default AnimationControl;
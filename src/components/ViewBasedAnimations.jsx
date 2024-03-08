import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ViewBasedAnimations = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    useEffect(() => {
        console.log("is in view ->", isInView)
    }, [isInView])

    return ( 
        <>
          <div style={{height: "150vh"}} />
          <motion.div 
            style={{ height: "100vh", background: "black "}}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ duration: 1 }}
          />
          <div
            ref={ref}
            style={{
              height: "100vh", 
              background: isInView ? "blue": "red",
              transition: "2s background",
            }}
          />
        </>
     );
}
 
export default ViewBasedAnimations;
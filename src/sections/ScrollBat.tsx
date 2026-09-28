import { m as motion, useScroll, useTransform } from "framer-motion";
import { Bat } from "../art/Spooky";

/** Page progress: a thread across the top of the viewport with a bat flying along it. */
export default function ScrollBat() {
  const { scrollYProgress } = useScroll();
  const left = useTransform(scrollYProgress, (v) => `calc(${v * 100}% - ${v * 44}px)`);
  return (
    <div className="pop-progress" aria-hidden="true">
      <motion.div className="pop-progress-fill" style={{ scaleX: scrollYProgress }} />
      <motion.div className="pop-progress-bat" style={{ left }}>
        <Bat />
      </motion.div>
    </div>
  );
}

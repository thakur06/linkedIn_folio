import React from "react";
import { Util } from "../libs/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

const Input = React.forwardRef((props, ref) => {
  const { value, func, data, className, type, ...restProps } = props;
  const radius = 300; 
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            var(--blue-500),
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <input
        type={type}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          func(e.target.value);
        }}
        className={Util(
          `flex h-10 w-full border-none  bg-[#E1EBED] dark:text-[#291c3a] shadow-input rounded-md px-3 py-2 text-sm file:border-0 
          file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
          disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
          group-hover/input:shadow-none transition duration-400`,
          className
        )}
        ref={ref}
        {...restProps}
      />
    </motion.div>
  );
});

Input.displayName = "Input";

export default Input;
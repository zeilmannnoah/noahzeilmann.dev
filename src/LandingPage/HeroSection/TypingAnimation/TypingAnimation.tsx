import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const TypingAnimation = () => {
  // Create a ref to store the DOM element where the typing animation will be rendered
  const el = useRef(null);
  // Create a ref to store the Typed instance itself, so we can destroy it when the component unmounts
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "loves to solve problems.",
        "creates seamless user experiences.",
        "builds responsive and interactive websites.",
        "transforms ideas into code.",
        "is always learning new technologies.",
      ],
      typeSpeed: 30,
      backSpeed: 20,
      backDelay: 5000,
      startDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    // Destroy Typed instance on unmounting to prevent memory leaks
    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <Box
      component="div"
      sx={{
        "@media(max-width: 900px)": {
          minHeight: "130px",
        },
      }}
    >
      Hi, I'm Noah Zeilmann. A passionate Front-end Developer
      <br />
      who <span ref={el}></span>
    </Box>
  );
};

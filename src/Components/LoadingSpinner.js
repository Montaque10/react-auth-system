import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Box } from "@mui/material";

const LoadingSpinner = () => {
  const spinnerRef = useRef();
  const dotsRef = useRef([]);

  useEffect(() => {
    const spinner = spinnerRef.current;
    const dots = [...dotsRef.current];

    gsap.to(spinner, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "linear"
    });

    dots.forEach((dot, index) => {
      gsap.to(dot, {
        y: -10,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        delay: index * 0.2,
        ease: "sine.inOut"
      });
    });

    return () => {
      gsap.killTweensOf([spinner, ...dots]);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: 2
      }}
    >
      <Box
        ref={spinnerRef}
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          border: "5px solid #3f51b5",
          borderTopColor: "transparent"
        }}
      />
      <Box sx={{ display: "flex", gap: 1 }}>
        {[...Array(3)].map((_, i) => (
          <Box
            key={i}
            ref={el => (dotsRef.current[i] = el)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: "primary.main"
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LoadingSpinner;
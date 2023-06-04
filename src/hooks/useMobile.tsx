import { useState, useEffect } from "react";

/**
 * 화면 크기 변경을 감지하여 mobile 기기인지 반환하는 훅
 * @return mobile: true
 * @return pc: false
 */
const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobile;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PreventRefresh() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; // 대부분의 브라우저에서 사용자에게 경고를 표시하는데 필요
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    navigate("/");


    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);


  return null; // UI가 없는 컴포넌트
}

export default PreventRefresh;

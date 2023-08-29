import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectChallange() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to "/challange/form" when this component mounts
    navigate("/challange/form");
  }, [navigate]);

  return null; // This component doesn't render anything
}

export default RedirectChallange;

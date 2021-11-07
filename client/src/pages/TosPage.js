import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function TosPage(props) {
  const location = useLocation();

  useEffect(() => {
    props.handleIsHome(location);
  },[]);

  return <div>I am Terms of Service Page</div>;
}

export default TosPage;

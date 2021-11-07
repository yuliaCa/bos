import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function PolicyPage(props) {
  const location = useLocation();

  useEffect(() => {
    props.handleIsHome(location);
  },[]);

  return <div>I am Policy Page</div>;
}

export default PolicyPage;

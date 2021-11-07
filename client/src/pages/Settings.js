import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function SettingsPage(props) {
  const location = useLocation();

  useEffect(() => {
    props.handleIsHome(location);
  },[]);

  return <div style={ {marginTop:"10rem",}}>I am Settings Page</div>;
}

export default SettingsPage;

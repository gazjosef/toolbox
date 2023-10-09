import { FaPhone } from "react-icons/fa";
import MapContainer from "../components/Snippets/Map/Map.tsx";
import useGsapFadeIn from "../hooks/useGsapFadeIn";

const Contact = () => {
  const [contactTitleRef, contactMapRef, contactDetailsRef] = useGsapFadeIn();

  return <div>Contact</div>;
};
export default Contact;

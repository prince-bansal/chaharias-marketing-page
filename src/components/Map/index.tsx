import Heading from "../Heading";
import InnerWrapper from "../InnerWrapper";

const Map = () => {
  return (
    <InnerWrapper>
      <Heading>Locate us</Heading>
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.67003702528!2d77.60691977581052!3d12.928916415811138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d6300a8057%3A0xa37f368d1c1a1179!2sMizpah%20Fitness!5e0!3m2!1sen!2sin!4v1726073833990!5m2!1sen!2sin"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </InnerWrapper>
  );
};

export default Map;

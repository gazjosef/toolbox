import React from "react";

const Map: React.FC = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.1942932364777!2d151.0550044!3d-33.83309969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a4a3bcfccaeb%3A0x3c02a6d3b7608d84!2sUnit%205%2F8%20Ave%20of%20the%20Americas%2C%20Newington%20NSW%202127!5e0!3m2!1sen!2sau!4v1700476209350!5m2!1sen!2sau"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
};
export default Map;

import React from "react";
import PropTypes from "prop-types";

function Logo(props) {
  return (
    <div className="h-[64px] sm:min-w-[200px] min-w-[262px] sm:border-r-0 border-r-2 border-solid border-inherit">
      <img
        className="w-28 ml-[30px] h-[100%]"
        src="https://studio.builder.ai/assets/images/engineer-logo.svg"
        alt="logo"
      />
    </div>
  );
}
Logo.propTypes = {};
export default Logo;

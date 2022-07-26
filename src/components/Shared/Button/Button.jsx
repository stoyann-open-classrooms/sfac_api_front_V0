import PropTypes from "prop-types";

import "./styles/Button.css";

function Button({ toogle, children, icone, version, type, isDisabled }) {

 
  
  
  
  return (
    <button  onClick={toogle} icone={icone} type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.prototypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default Button;

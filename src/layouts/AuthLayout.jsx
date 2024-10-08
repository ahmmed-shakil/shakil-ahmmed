import PropTypes from "prop-types";

const AuthLayout = ({ children }) => {
  return <div className="auth-layout">{children}</div>;
};

// Add prop validation
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired, // Validates that 'children' is a valid React node and is required
};

export default AuthLayout;

import { connect } from "react-redux";
import SignIn from "./SignIn";
import { toggle_sign_in } from "../../actions/modal";

const mapStateToProps = state => ({
  open: state.modal.sign_in
});

const mapDispatchToProps = { toggle_sign_in };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

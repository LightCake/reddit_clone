import { connect } from "react-redux";
import SignUp from "./SignUp";
import { toggle_sign_up } from "../../actions/modal";
import { sign_up } from "../../actions/user";

const mapStateToProps = state => ({
  open: state.modal.sign_up
});

const mapDispatchToProps = { toggle_sign_up, sign_up };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

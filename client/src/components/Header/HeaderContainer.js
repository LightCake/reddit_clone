import { connect } from "react-redux";
import Header from "./Header";
import { toggle_sign_in, toggle_sign_up } from "../../actions/modal";

const mapStateToProps = state => ({});

const mapDispatchToProps = { toggle_sign_in, toggle_sign_up };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

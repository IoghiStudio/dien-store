import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../Assets/084 crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from "react-redux/es/exports";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to='/'>
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to='/shop'>
        SHOP
      </Link>
      <Link className="option" to=''>
        CONTACT
      </Link>
      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}
        > SIGN OUT 
        </div>
        :
        <Link className="option" to='/signin'
        >
        SIGN IN
        </Link>
      }
      <CartIcon />
    </div>
    <CartDropdown />
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
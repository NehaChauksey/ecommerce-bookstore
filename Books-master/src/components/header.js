import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { CART, MY_ORDERS } from '../actions/types'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div class="navbar-container" style={{ backgroundColor: "#FFFFFF", fontWeight: 'bold' }}>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Crossword Bookstore </Link>


          </div>

          <div className="collapse navbar-collapse" >
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">
                Home
              </Link>
              </li>
              <li><Link to="/myorders">
                My Orders</Link>
              </li>

              <li><Link to="/cart">
                Cart</Link>
              </li>            </ul>
          </div>
        </div>
      </nav>
    </div>

  }
}

function mapStateToProps(state, ownProps) {
  return {
    bookdetails: state.bookReducer,
    title: state.headerTitle
  }
}

function mapDispatchToProps(dispatch) {
  return {
    titleHeader: (data) => {
      dispatch({
        type: CART, payload: data,
        type: MY_ORDERS, payload: data
      })
    }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
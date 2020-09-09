import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { ADD_TO_CART,GET_BOOK_DETAILS, Buy_Checkout} from '../actions/types';

class DetailBook extends Component {
    constructor(props){
        super(props)
        // let id = this.props.match.params.id;
        // this.props.getDetails(id)
      }
    
    state = {
        inCart: false
    }
    
    checkOut = (e) => {
        this.props.checkOutCart(e)
        // this.setState({
        //     inCart: true
        // })
        this.props.history.push('/buy')
    }
    addCart = (e) => {
        this.props.addToCart(e)
        this.setState({
            inCart: true
        })
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-3">
                   
                        <div className="img-wrap">
                            <img className="img-responsive" style={{marginLeft:'50px',marginTop:'30px'}} src={this.props.details.imageLink}/>
                        </div>

                </div>
                <div className='col-md-3' style={{ marginTop: '20px' }}>
                    <h5>Book Title :{this.props.details.title}</h5>
                    <p>Book price :{this.props.details.price} </p>
                    <p>Book Auther Name :{this.props.details.author} </p>

                    <div className="bottom-wrap">

                        {
                            this.state.inCart ? (
                                <span className="btn btn-success">Added to cart</span>
                            ) : (

                                    <button className="btn btn-sm btn-primary" onClick={() => this.addCart(this.props.details)}>Add to Cart</button>
                                )
                        }
                        {' '}
                        <button onClick={() => this.checkOut(this.props.details)} className="btn btn-sm btn-primary">Buy Book</button>
                    </div>
                </div>
            </div>
            <div className="row" >
                <div className="card" style={{ backgroundColor: 'Lightgrey', width: '35%', height: '200px', marginLeft: '450px' }}>
                    <div className="">
                    <h5>Book Description :{this.props.details.title}</h5>
                    </div>

                </div>
            </div>
        </div>


    }
}
function mapStateToProps(state,ownProps) {
    let id = ownProps.match.params.id;
    return {
        details: state.bookReducer.find((w) => w.id === id),
        cartitems: state.cartReducer.cartDetail,
        buyitem : state.buyReducer.itemdata
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (data) => {
            dispatch({
                type: ADD_TO_CART, payload: data
            })
        },
        getDetails:(data)=>{
            dispatch({
                type: GET_BOOK_DETAILS, payload: data
            })
        },
        checkOutCart: (data) => {
            dispatch({
                type: Buy_Checkout, payload: data
            })
        },

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(DetailBook)
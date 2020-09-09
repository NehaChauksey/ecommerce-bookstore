import React from 'react';
import { connect } from 'react-redux'




class Myorders extends React.Component {

    state = {
        date: this.props.orderdata.date
    }


    render() {
        const date = new Date()
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        
        let mon = monthNames[date.getMonth()]
        const monthyear = mon + date.getFullYear();
        const year = date.getFullYear();
        let dmy = date.getDate()
        const datemonthyear = dmy + mon + year
        const myorders = this.props.orderdata.length > 0 ? (

            this.props.orderdata.map(item => {
                return (
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <div className="panel-title">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <h5>Order Placed : {dmy}&nbsp;{mon}{','}{year}</h5>
                                            </div>
                                            <div className="col-xs-4">

                                            </div>
                                            <div className="col-xs-2">
                                                <h5>Status: Delivered</h5>
                                            </div>

                                        </div>
                                    </div>
                                </div>




                                <div className="row">
                                    <div className="col-md-3">

                                        <div className="img-wrap">
                                            <img className="img-responsive" style={{ marginLeft: '50px', marginTop: '0px' }} src={item.imageLink} />
                                        </div>

                                    </div>
                                    <div className='col-md-3' style={{ marginTop: '20px' }}>
                                        <h4><strong>Book Title :{item.title}</strong></h4>
                                        <p>Book price :{item.price} </p>
                                        <p>Book Auther Name :{item.author} </p>

                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                )
            })


        ) : (
                <div className="panel-body" style={{color:'red',paddingLeft:'500px',marginTop:'200px'}}>
                   <h3>No Orders</h3> 
                </div>
            )


        return <div style={{ marginTop: '30px' }} className="container">


            {myorders}


        </div>
    }
}

function mapStateToProps(state) {
    return {
        orderdata: state.orderReducer
    }
}


export default connect(mapStateToProps)(Myorders)


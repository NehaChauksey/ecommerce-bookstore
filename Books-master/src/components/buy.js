import React from 'react';
import { connect } from 'react-redux'




class Buy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ph: '',
            address: '',
            name: '',
            edit: false,
            formdata: false,
            error: ''
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    editForm = () => {
        this.setState({
            edit: true
        })
    }

    handleCancel = () => {

        window.location.href = '/cart'
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.submitted = true;
        this.props.getData(this.state)
        this.setState({ name: '', address: '', ph: '', formdata: true });

    }

    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleCheckout = () => {
        if (this.props.itemsData.length > 0 && this.state.formdata===true) {
            this.props.addOrders(this.props.itemsData)
            this.props.history.push('/myorders')
        } else {
            this.setState({
                error: "Please Fill the Address Form before Checkout"
            })
        }

    }

    render() {
        let Items = this.props.itemsData.map(item => {
            return (

                <li className="collection-item avatar" key={item.id}>

                    <span className="title">{item.title}</span>

                </li>

            )
        })
        const form = <form onSubmit={this.handleFormSubmit}>
            <div className="label">

                <label style={{ color: 'black', fontSize: '15px' }} htmlFor="name">Name : </label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div className="label">

                <label htmlFor="address" style={{ color: 'black', fontSize: '15px' }}>Address : </label>
                <textarea
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter address"
                    value={this.state.address}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div className="label" style={{ color: 'black', fontSize: '15px' }}>

                <label htmlFor="ph">Phone Number : </label>
                <input
                    type="text"
                    className="form-control"
                    name="ph"
                    placeholder="Enter Phone number"
                    value={this.state.ph}
                    onChange={this.handleInputChange}
                    required
                />
            </div>
            <div><br />
                <button type='submit' className="btn btn-sm btn-primary">Save Address</button>{' '}
                <button type='submit' onClick={this.editForm} className="btn btn-sm btn-primary">Edit Address</button>
            </div>
            <br />

        </form>





        let editcode = <div style={{marginLeft:'130px',marginTop:'60px'}}>
        <table>
        <tr>
        <td>Name: {this.props.formdata.name}</td>
        </tr>
        <tr>
        <td>Address: {this.props.formdata.address}</td>
        </tr>
        <tr>
        <td>Phone Number: {this.props.formdata.ph}</td>
        </tr>
        </table>
    </div>
        


        let total = 0;
        let Charge = 5;
        let Tax = 2;

        this.props.itemsData.map(item => total += item.price)


        return <div><div className="row" >

            <div className='col-md-6'>
                <br />

                <h4 style={{ marginLeft: '50px', marginTop: '-20px' }}>Shipping Address</h4>
                <div className="card" style={{ width: '80%', height: '310px', marginLeft: '50px' }}>
                    <div>

                    {this.state.edit?editcode:form}
                    </div>
                </div>
            </div>

            {''}
            
        </div>
            <br />

            <div className="row" style={{ marginTop: '50px', marginLeft: '800px' }}>
                <div className='col-md-6' style={{ marginTop: '-50px' }}>
                    <div style={{ width: '130%', height: '300%', marginLeft: '-650px', color: 'red' }}>


                        <strong>{this.state.error}</strong>
                    </div>

                </div>
                <div className='col-md-6' style={{ marginTop: '-70px' }}>
                    <div style={{ width: '100%', height: '300%', marginLeft: '0px', background: 'Lightgrey' }}>
                        <h5><strong>Payment Info</strong></h5>
                        {this.props.itemsData.length > 0 ? <div>
                            <div style={{ textAlign: 'right' }}>
                                Items Price :{total} $
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                Charge :{Charge} $
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                Tax :{Tax} $
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <strong> Total : </strong><strong>{total + Charge + Tax} $</strong>
                            </div>

                        </div> : <div>
                                <div style={{ textAlign: 'right' }}>
                                    Items Price :0 $
                        </div>
                                <div style={{ textAlign: 'right' }}>
                                    Charge :0 $
                        </div>
                                <div style={{ textAlign: 'right' }}>
                                    Tax :0 $
                        </div>

                                <div style={{ textAlign: 'right' }}>
                                    <strong> Total : </strong><strong>0 $</strong>
                                </div>

                            </div>
                        }


                        <div style={{ width: '80%', height: '300%', marginTop: '0px' }}>
                            <button onClick={this.handleCheckout} className="btn btn-sm btn-primary">Checkout</button>{' '}
                            <button onClick={this.handleCancel} className="btn btn-sm btn-primary">Cancel</button>

                        </div>

                    </div>

                </div>
            </div>
            <br />


        </div>
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer.cartDetail,
        itemsData: state.buyReducer.itemdata,
        formdata: state.formReducer,
        orderdata: state.orderReducer

    }
}
function mapDispatchToProps(dispatch) {
    return {
        getData: (data) => {
            dispatch({
                type: "SUBMIT_FORM", payload: data
            })
        },
        addOrders: (data) => {
            dispatch({
                type: "ORDERS", payload: data
            })
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)



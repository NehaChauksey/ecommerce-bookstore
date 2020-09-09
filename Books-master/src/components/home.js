import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './home.css'



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookitems: [],
            rowsToDisplay: 20,
            expand: false,
            
        
        }
        this.showMore = this.showMore.bind(this);
        this.showLess = this.showLess.bind(this);
    }
    showMore() {
        let Length = this.props.books.length;
        this.setState({ rowsToDisplay: Length, expand: true });
    }
    showLess() {
        this.setState({ rowsToDisplay: 20, expand: false });
    }
    // componentDidMount(){
    //     this.props.getBooks(this.state.bookdata)
    //     this.setState({ loading:false });
    // }


    render() {
       

        const books = this.props.books.slice(0, this.state.rowsToDisplay).map((book, i) => (
            <div className='col-md-3'>
                <br />
                <br />
                <div className="card" style={{width: '60%', height: '85%', marginLeft: '50px' }}>
                    <div style={{ marginTop: '80px'}}>
                        <h5 style={{ fontWeight: 'bold' }}>Book {book.id}</h5>
                        <p style={{ fontWeight: 'bold' }}>{book.description} </p>
                        <Link style={{ textDecoration: 'none' }} to={`/details/${book.id}`}><button className="btn btn-sm btn-primary">Buy Book</button></Link>
                    </div>
                </div>
            </div>

        ))

        return <div><div className="row" >
            {books}
        </div><br />
            {this.state.expand ? <div style={{ textAlign: 'center' }}>
                <Link style={{ textDecoration: 'none' }} onClick={this.showLess}><strong>Show Less</strong></Link>
            </div> : <div style={{ textAlign: 'center' }}>
                    <Link style={{ textDecoration: 'none' }} onClick={this.showMore}><strong>Show More...</strong></Link>
                </div>

            }
        </div>
      



    }
}

function mapStateToProps(state) {
    return {
        books: state.bookReducer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // getBooks: (data) => {
        //     dispatch({
        //         type: "Get_books", payload: data
        //     })
        // }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Home)

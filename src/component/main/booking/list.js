import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import * as actions from 'actions'
import RentalCard from '../index/rentalCard'
import { connect } from 'react-redux'
import Loading from 'component/main/user/loading'
class List extends Component {
    constructor(props) {
        super(props);
        this.renderRentals = this.renderRentals.bind(this);
    }
    componentWillMount() {
        this.props.dispatch(actions.fetchRentals());
    }

    renderRentals() {
        return this.props.rentals.map((rental, index) => {
            return (
                <RentalCard key={index} rental={rental} />
            )
        })
    }
    render() {
        {console.log(this.props.rentals)}
        if(this.props.rentals && this.props.rentals.length > 0){
        return (
            <div>
                <div className="container">
                    <h3 className="text-left title_h3 type1 animated fadeInLeft">Tổng hợp thông tin</h3>
                    <div id="sub_home" className="text-center ">
                        <div className="container mg-top-20">
                            <div className="row">
                                {this.renderRentals()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else return <Loading/>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        rentals: state.rentals.data
    }
}
export default connect(mapStateToProps)(List);
import axiosService from 'services/axios-service';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { toast } from "react-toastify";
import {orderByDesc,orderByAsc} from 'helpers'

import {FETCH_CUSTOMER_BOOKINGS_SUCCESS,SORT_BY_CUSTOMER_BOOKINGS} from 'actions/types'
const axiosInstance = axiosService.getInstance();

const fetchCustomersBookingsSuccess = (data) => {
    return {
        type: FETCH_CUSTOMER_BOOKINGS_SUCCESS,
        data
    }
}
const sortByOrders = (data) => {
    return {
        type: SORT_BY_CUSTOMER_BOOKINGS,
        data
    }
}
export const getCustomerBookings = (req, res) => {
    return dispatch => {
        axiosInstance.get('/bookings/getCustomerBookings')
        .then(res => {
            dispatch(fetchCustomersBookingsSuccess(res.data))
        })
        .catch(({response}) =>{
            toast.error(response.data.detail)
        })
    }
}
export const sortBy = (array, sort) => {
    return dispatch => {
        let data = []
        switch (sort) {
            case 'totalPriceAsc':
                data = orderByAsc(array, 'totalPrice');
                return dispatch(sortByOrders(data));
            default:
                data = orderByDesc(array, sort);
                console.log(data)
                return dispatch(sortByOrders(data))
        }
    }
}
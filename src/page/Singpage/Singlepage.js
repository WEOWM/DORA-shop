import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FeatchCategoiesGet } from '../../store/Slice/Shops/CategoriesGetSlice'

import { useCart } from "react-use-cart"


const Singlepage = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const { addItem } = useCart();


    useEffect(() => {
        dispatch(FeatchCategoiesGet({ CategoriesGETID: id }))
    }, [])
    const { categoiesGet } = useSelector((state) => state.categoiesGETSlice)

    const carting = () => {
        addItem(categoiesGet)
        console.log("carting:", categoiesGet);
    }


    console.log("data", categoiesGet);
    return (
        <div className="container-fluid ">
            <div className="row mt-5 ">

                <div className="left  col-md-6 " >
                    <img className='w-100' src={categoiesGet.thumbnail} alt="" />
                </div>
                <div className="right col-md-6 col-sm-12 mt-5  " style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", justifyContent: "center", }} >
                    <div>
                        <h2>{categoiesGet.title}</h2>
                        <h4>{categoiesGet.price}</h4>
                        <p>{categoiesGet.description}</p>
                        <a href='/cart' onClick={carting} class="btn btn-outline-dark " >Buy Now</a>
                        <a href='/' class="btn btn-outline-danger ms-1" >Cancle</a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Singlepage
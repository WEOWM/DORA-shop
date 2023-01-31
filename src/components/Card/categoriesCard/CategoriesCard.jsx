import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import { FeatchCategories } from '../../../store/Slice/Shops/CategoriesSlice'
import { FeatchCategoiesGet } from '../../../store/Slice/Shops/CategoriesGetSlice'



const CategoriesCard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(FeatchCategories())
    

  }, [])


  const CategoriesGet = (e,id) =>{
    dispatch(FeatchCategoiesGet({CategoriesGETID : id}))
    navigate(`singlecart/${id}`)

    console.log("CategoriesGet:",id);
    

  }

  const { categories } = useSelector((state) => state.categoriesSlice)

  console.log("as", categories);
  return (

    <>
    <h3 className='text-center mt-5 p-4' >Produts</h3>
    <hr />
      <div className="container-fulid ">
        <div className="row p-0 m-0">
          {
            categories.map((data, index) => {
              return (
                <div className="card-d col-md-3 mb-4 pb-1" key={data.id}>
                  <div className="card h-100 text-center p-4">
                    <img src={data.thumbnail} className="card-img-top w-100" alt="" height='220px' />
                    <div className="card-body ">
                      <h5 className="card-title ">{data.description.substring(0, 12)}..</h5>
                      <p className="card-text lead fw-bold"> ₹ {data.price}</p>
                      <a  className="btn btn-outline-dark" onClick={(e)=>CategoriesGet(e, data.id)}>Buy Now</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>

  )
}

export default CategoriesCard
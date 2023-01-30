import axios from "axios"

 const ActionHandle =(payload)=>{
    return new Promise((resolve, reject) => {
        payload.baseURL = "https://dummyjson.com"
        axios(payload).then((response)=>{
            if (response.status >= 200 && response.status < 300){
                resolve(response)
            }
            else
            console.log("fall", response)
            reject(response)
        })
        .catch((error)=>{
            reject(error)
        })
    })

 }

 export default{
    categories:"/products",
    categoriesGET:"/products/{id}",
    
    ActionHandle
 }
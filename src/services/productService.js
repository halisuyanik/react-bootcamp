import axios from 'axios'





export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall");
    }
    getProductDetail(productName){
        return axios.get(`http://localhost:8080/api/products/getByProductName?productName=${productName}`);
    }
    postProductAdd(productName, unitPrice){
        return axios.post(`http://localhost:8080/api/products/add`,{
            productName:productName,
            unitPrice:unitPrice
        })
        .catch(function (error) {
            console.log(error);
        });
    }

}
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Button } from 'semantic-ui-react'
import DevTextInput from '../utilities/customFormControls/DevTextInput'
import ProductService from '../services/productService'
export default function ProductAdd() {
    const initialValues={productName:"", unitPrice:""}

    const schema=Yup.object({
        productName:Yup.string().required("Product name required"),
        unitPrice:Yup.number().required("Product price required"),
    })
    let productService=new ProductService();
    // const handleProductAdd=async(e)=>{
    //     e.preventDefault();
    // }

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={async (values)=>{productService.postProductAdd(values.productName, values.unitPrice)}}>
                <Form className='ui form'>
                    <DevTextInput id="productName" name="productName" placeholder="Product name"></DevTextInput>
                    <DevTextInput id="unitPrice" name="unitPrice" placeholder="Unit Price"></DevTextInput>
                    <Button color='green' type='submit'>Submit</Button>
                </Form>
            </Formik>
        </div>
    )
}

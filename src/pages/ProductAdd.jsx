import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Button, FormField, Label } from 'semantic-ui-react'
export default function ProductAdd() {
    const initialValues={productName:"", unitPrice:""}

    const schema=Yup.object({
        productName:Yup.string().required("Product name required"),
        unitPrice:Yup.number().required("Product price required"),
    })

    const handleProductAdd=async(e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={()=>{handleProductAdd()}}>
                <Form className='ui form'>
                    <FormField>
                        <Field name="productName" placeholder="Product Name"></Field>
                        <ErrorMessage name="productName" render={error=><Label pointing basic color='red' content={error}></Label>}></ErrorMessage>
                    </FormField>
                    <FormField>
                        <Field name="unitPrice" placeholder="Unit Price"></Field>
                        <ErrorMessage name="unitPrice" render={error=><Label pointing basic color='red' content={error}></Label>}></ErrorMessage>
                    </FormField>
                    <Button color='green' type='submit'>Submit</Button>
                </Form>
            </Formik>
        </div>
    )
}

import React from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import { ProductActions } from '../actions/ProductActions';

const AddProductForm = ({errors, isSubmitting, touched}) => (
    <div>
        <Form>
            <p>
                <Field type="text" name="productName" placeholder="Product Name" />
                {touched.productName && errors.productName && <span style={{color: 'red'}}>{ errors.productName }</span>}
            </p>
            <p>
                <Field type="number" name="productQuantity" placeholder="Quantity" />
                {touched.productQuantity && errors.productQuantity && <span style={{color: 'red'}}>{ errors.productQuantity }</span>}
            </p>
            <p>
                <Field type = "number" name="productPrice" placeholder="Price" />
                {touched.productPrice && errors.productPrice && <span style={{color: 'red'}}>{ errors.productPrice }</span>}
            </p>
            <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
    </div>
);

const FormikAddProductForm = withFormik({
    mapPropsToValues({productName, productQuantity, productPrice}) {
        return {
            productName: '',
            productQuantity: '',
            productPrice: ''
        }
    },
    validationSchema: Yup.object().shape({
        productName: Yup.string().required('Product Name is required'),
        productQuantity: Yup.number().integer().moreThan(0, 'Quantity cannot be zero').required('Quantity is required'),
        productPrice: Yup.number().moreThan(0, 'Price cannot be zero').required('Price is required')
    }),
    handleSubmit(values, { resetForm, setSubmitting, setErrors }) {
        console.log(values);
        ProductActions.addProduct(values);
    }
}) (AddProductForm);

export default FormikAddProductForm;
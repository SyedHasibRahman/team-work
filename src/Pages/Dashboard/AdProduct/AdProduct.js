import axios from 'axios';
import React from 'react';
import {useForm} from "react-hook-form";
import './AdProduct.css';

const AdProduct = () => {
  const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios
            .post('https://infinite-tor-54657.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
  return (
    <div>
            <div className="add-product-area">
                <h2>Please add a service
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true, maxLength: 40 })}
                        placeholder="Name"/>
                    <textarea {...register("discription")} placeholder="Description"/>
                    <input type="number" {...register("price")} placeholder="Price"/>
                    <input {...register("img")} placeholder="Img url"/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
  );
};

export default AdProduct;
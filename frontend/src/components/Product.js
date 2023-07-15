import React, { useState, useEffect } from 'react'

const Product = () => {
    const deleteProduct = (event) => {
        const prodId = event.target.value;
        fetch('http://localhost:8000/products/' + prodId, {
            method: "delete"
        })
    }
    const [error, seterror] = useState(false)
    const addAProduct = (event) => {
        event.preventDefault();

        if (Object.keys(value).length === 0) { seterror(true); return; }
        for (let prop in value) {
            if (value[prop].length === 0) { seterror(true); return; }
        }
        if (Object.keys(value).length !== 7) { seterror(true); return; }
        fetch('http://localhost:8000/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value)
        })
            .then(result => {
                return result.json();
            })
            .then(data => {
                console.log(data);
                setValue({});
                setAddProduct(false);
                seterror(false);
            })
    }
    const updateTheProduct = () => {
        console.log(Object.keys(value).length);
        if (Object.keys(value).length === 0) { seterror(true); return; }
        for (let prop in value) {
            if (value[prop].length === 0) { seterror(true); return; }
        }
        if (Object.keys(value).length !== 9) { seterror(true); return; }
        const prodId = value._id;
        fetch('http://localhost:8000/products/' + prodId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value)
        })
            .then(result => {
                return result.json();
            })
            .then(data => {
                console.log(data);
                setValue({});
                setUpdateProduct(false);
                seterror(false);
            })

    }
    const [products, setProducts] = useState([]);
    const [addProduct, setAddProduct] = useState(false);
    const [updateProduct, setUpdateProduct] = useState(false);
    const [value, setValue] = useState({});
    useEffect(() => {

        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
            })
    })
    const updateAProduct = (event) => {

        const prodId = event.target.value;
        fetch('http://localhost:8000/products/' + prodId)
            .then(res => res.json())
            .then((data) => {
                console.log(data[0]);
                setValue(data[0]);
                setUpdateProduct(true);
            })
    }

    if (addProduct) {
        return (
            <div className="text-center">
                <div className="container products ">
                    <h1 style={{ marginBottom: 20 }}>Add Product</h1>
                    {error && <p style={{ color: 'red' }}>Enter correct details</p>}
                    <form className='form_container ' onSubmit={() => { console.log("Hello") }}>

                        <input type="text" className='form-control ' placeholder='Name' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, name: event.target.value }
                                )
                            })

                        }} />
                        <input type="number" className='form-control' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, price: Number(event.target.value) }
                                )
                            })

                        }} placeholder='Price' />
                        <input type="text" className='form-control' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, color: event.target.value }
                                )
                            })

                        }} placeholder='Color' />
                        <input type="number" className='form-control' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, rating: Number(event.target.value) }
                                )
                            })

                        }} placeholder='Rating' />
                        <input type="number" className='form-control' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, quantity: Number(event.target.value) }
                                )
                            })

                        }} placeholder='Quantity' />
                        <input type="text" className='form-control' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, category: event.target.value }
                                )
                            })

                        }} placeholder='Category' />
                        <input type="text" className='form-control' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, desc: event.target.value }
                                )
                            })

                        }} placeholder='Description' />
                        <div className="text-center">
                            <button type='submit' className='btn btn-primary' onClick={addAProduct}>Add</button>
                            <button type='submit' className='btn btn-danger' onClick={() => {
                                setAddProduct(false);
                            }}>Cancel</button>
                        </div>
                    </form>

                </div>
            </div>

        )
    }
    if (updateProduct) {

        return (
            <div className="text-center">
                <div className="container products ">
                    <h1 style={{ marginBottom: 20 }}>Update Product</h1>
                    {error && <p style={{ color: 'red' }}>Enter correct details</p>}
                    <div className='form_container '>
                      
                        <input type="text" value={value.name} className='form-control ' placeholder='Name' onChange={(event) => {
                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, name: event.target.value }
                                )
                            })

                        }} />
                  
                        <input type="number" value={value.price} className='form-control' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, price: Number(event.target.value) }
                                )
                            })

                        }} placeholder='Price' />
                        <input type="text" value={value.color} className='form-control' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, color: event.target.value }
                                )
                            })

                        }} placeholder='Color' />
                        <input type="number" value={value.rating} className='form-control' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, rating: Number(event.target.value) }
                                )
                            })

                        }} placeholder='Rating' />
                        <input type="number" value={value.quantity} className='form-control' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, quantity: Number(event.target.value) }
                                )
                            })

                        }} placeholder='Quantity' />
                        <input type="text" value={value.category} className='form-control' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, category: event.target.value }
                                )
                            })

                        }} placeholder='Category' />
                        <input type="text" value={value.desc} className='form-control' onChange={(event) => {

                            setValue((prevValue) => {
                                return (
                                    { ...prevValue, desc: event.target.value }
                                )
                            })

                        }} placeholder='Description' />
                        <button type='submit' className='btn btn-primary' onClick={updateTheProduct}>Update</button>
                        <button type='submit' className='btn btn-danger' onClick={() => {
                            setUpdateProduct(false);
                        }}>Cancel</button>
                    </div>
                </div>
            </div>

        )
    }
    if (products.length === 0) {
        return (
            <>
                <div className='container products'>
                    <h1>No products found</h1>
                </div>
                <div className="text-center">

                    <button className='btn btn-primary' onClick={() => {
                        setAddProduct(true)
                    }}>Add a product</button>
                </div>
            </>
        )
    }

    return (

        <>
            <div className='container products'>
                <h1 style={{ marginBottom: 20 }}>All products</h1>






                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Rating</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => {
                            return (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.color}</td>
                                    <td>{product.rating}</td>
                                    <td>{product.category}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button value={product._id} className='btn btn-success' onClick={updateAProduct}>Update</button>
                                        &nbsp;&nbsp;
                                        <button value={product._id} className='btn btn-danger' onClick={deleteProduct}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
                <div className="text-center">

                    <button className='btn btn-primary' onClick={() => {
                        setAddProduct(true)
                    }}>Add a product</button>
                </div>

            </div>

        </>

    )
}

export default Product;
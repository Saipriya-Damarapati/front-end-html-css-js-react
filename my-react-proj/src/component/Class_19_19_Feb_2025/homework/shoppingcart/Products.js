import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const[product, setProductCount] = useState({id: 1, path:"images/toordal.jpg", description: "Tata Sampann Toor Dal", count: 0, amount: 0});

    const incrementCount = () => {
        setProductCount(product.count++);
    }

    const decrementCount = () => {
        setProductCount(product.count--);
    }

    return (
        <ProductContext.Provider value={{product, incrementCount, decrementCount}}>
            {children}
        </ProductContext.Provider>
    );
}

const ProductsDiv = () => {

    const {product, incrementCount, decrementCount} = useContext(ProductContext);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Shopping Cart</h2>
            <div style={styles.items}>
                <div style={styles.item}>
                    <div style={styles.productImage}>
                        <img src={product.path} alt="cannot be loaded" />
                    </div>
                    <div style={styles.productDescription}>
                        <div>
                            <label style={styles.labelDesc}>{product.description}</label>
                        </div>
                        <div style={styles.productQty}>
                            <label>Rs. 185/kg</label>
                            <button onClick={decrementCount}>-</button>
                            <input type="text" id="toordalCount" value={product.count} disabled></input>
                            <button onClick={incrementCount}>+</button>
                        </div>
                    </div>
                    <div style={styles.productPrice}>
                        <input type="text" id="toordalPrice" value="Rs. 0" disabled />
                    </div>
                </div>

            </div>
        </div>
    );
}

const Products = () => {
    return (
        <ProductProvider>
            <ProductsDiv />
        </ProductProvider>
    );
}

const styles = {
    container: {fontSize: "larger", fontFamily: "Verdana, Geneva, Tahoma, sans-serif"},
    title: {textAlign: "center", fontStyle: "italic", textShadow: "2px 2px lightcoral"},
    items: {marginLeft: "15px", marginRight: "15px", padding: "10px 10px 10px 10px", borderRadius: "20px", background: "mediumseagreen", boxShadow: "10px 10px lightgreen"},
    item: {
        marginTop: "10px",
        marginBottom: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
        display: "grid",
        gridTemplateAreas: "productImage productDescription productPrice",
        gridTemplateColumns: "25% 50% 25%",
        gap: "10px",
        background: "lightblue",
        borderRadius: "20px"
    },

    /*
    productImage: { gridArea: "productImage", marginLeft: "35%"},
    productDescription: {
        gridArea: "productDescription", 
        display: "grid", gridTemplateColumns: "40% 60%",
        gridTemplateAreas: "productDesc productQty"
    },
    labelDesc: {marginLeft: "20px"},
    productQty: {marginLeft: "40px", gridArea: "productDesc", marginTop: "45px"},
    productDesc: {gridArea: "productDesc", marginTop: "45px"},
    productPrice: {gridArea: "productPrice", marginTop: "30px"}
    */
};

export default Products;


/*

import './App.css';
import React from 'react';
import Products from './component/Class_19_19_Feb_2025/homework/shoppingcart/Products';

class App extends React.Component {
  render() {
    return (
      <div>
        <Products />
      </div>
    )
  }
}

export default App;


*/
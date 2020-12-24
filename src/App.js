import React, { Component } from "react";
import Header from './components/header'
import Message from "./components/message";
import Footer from "./components/footer"
import ProductsContainer from "./containers/productsContainer";
import CartContainer from "./containers/cartContainer";
import MessageContainer from "./containers/messageContainer"

class App extends Component {
    render (){
        //terminal: npm install redux react-redux --save
        //npm install react react-dom react-scripts --save
        return (
        <div>
            
            <Header />

            <main id="mainContainer">
                <div className="container">
                    
                    <ProductsContainer />

                    <MessageContainer/>
                    
                    <CartContainer />
                </div>
            </main>

            <Footer />
        </div>
        )
    }
}

export default App;

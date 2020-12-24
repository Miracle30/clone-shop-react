import React, { Component } from "react";

class productList extends Component {
    render() {
        return (
            //https://www.apple.com/fr/shop/sitemaps/sitemap-buy-images.xml
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {this.props.children}
                </div>
            </section>
        );
    }   
}
export default productList
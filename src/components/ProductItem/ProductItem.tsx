/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 06/01/2024 14:54:07
*/
import React, { FC, useEffect } from 'react';
import './ProductItem.css';
import { Product } from '../../models/product';
import { Link } from 'react-router-dom';


interface ProductItemProps {
  product: Product
}


const ProductItem : FC<ProductItemProps> = ({product}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ProductItem">
          <div className="product">
                        <div className="product_img">
                          <Link to={"/product/" + product.slug}>
                            <img alt="product_img1" src={product.imageUrls[0]} />
                          </Link>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded" /> Add To Cart </a>
                              </li>
                              <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle" /></a></li>
                              <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add" /></a></li>
                              <li><a href="#"><i className="icon-heart" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                          <Link to={"/product/" + product.slug}>
                              {product.name}
                          </Link>
                          </h6>
                          <div className="product_price"><span className="price">${product.solde_price}</span><del>${product.regular_price}</del>
                            <div className="on_sale"><span>35% Off</span></div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div className="product_rate" style={{ width: "80%" }} />
                            </div><span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Phasellus blandit massa enim.
                              Nullam id varius nunc id varius nunc.</p>
                          </div>
                          <div className="pr_switch_wrap">
                            <div className="product_color_switch"><span data-color="#87554B" className="active" /><span data-color="#333333" /><span data-color="#DA323F" />
                            </div>
                          </div>
                        </div>
                      </div>
      </div>
  );
}

export default ProductItem;
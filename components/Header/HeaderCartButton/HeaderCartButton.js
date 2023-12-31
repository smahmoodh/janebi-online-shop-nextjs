'use client'

import React, { useState, useContext } from "react";
import { CartContext } from "@/app/context/Cart/CartContext";
import HeaderCartItem from "./HeaderCartItem/HeaderCartItem";
import { seperatNumber } from '@/utils/Utilities';

import "./HeaderCartButton.css";
import Link from "next/link";


const HeaderCartButton = () => {
    const [activeBasket, setActiveBasket] = useState(false);
    const { state, removeFromCart } = useContext(CartContext);
    // console.log('state');
    // console.log(state);
    const { items } = state;
    
    
    // const cart = [{ "items": [{ "product_id": 163168, "variant_id": 187387, "type": 1, "type_label": "\u06a9\u0627\u0644\u0627", "title": "\u0647\u0646\u062f\u0632\u0641\u0631\u06cc \u062c\u06a9 3.5 \u0645\u06cc\u0644\u06cc\u0645\u062a\u0631\u06cc akg \u0633\u0627\u0645\u0633\u0648\u0646\u06af Samsung EO-IG955 AKG Earphone", "variant_title": "\u0645\u0634\u06a9\u06cc | \u0647\u0627\u06cc\u200c\u06a9\u067e\u06cc A++ | \u0633\u0627\u062e\u062a \u0648\u06cc\u062a\u0646\u0627\u0645", "image": "https:\/\/janebi.com\/janebi\/9fd2\/files\/thumb\/253877.jpg", "price": 398000, "old_price": 552000, "count": 1, "sum_price": 398000, "quantity": "234", "unit": "", "brand_name": "\u0633\u0627\u0645\u0633\u0648\u0646\u06af", "category": "\u062e\u0631\u06cc\u062f \u0648 \u0644\u06cc\u0633\u062a \u0642\u06cc\u0645\u062a \u0647\u0646\u062f\u0632\u0641\u0631\u06cc \u0628\u06cc \u0633\u06cc\u0645 \u0633\u0627\u0645\u0633\u0648\u0646\u06af" }], "basket_type": 1, "basket_price": 398000, "basket_status": 1, "item_count": 1, "session": 7721250213, "time": "0.0285", "error": null, "successful": true }];
    // console.log(cart);

    const toggleCartBasketHandler = () => {
        setActiveBasket(!activeBasket);
    }
    const removeItemHandler = (item) => {
        removeFromCart(item)
    }
    return (
        <>
            <div className="basket-area">
                <div className="basket-toggle"
                     onClick={()=>toggleCartBasketHandler()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span className='item_counter font-dana-fanum'>
                        {items.length < 100 ? items.length : '+99' }
                    </span>
                </div>
                <div className={`basket-menu ${activeBasket ? 'active' : ''}`}>
                    <div id="basket">
                        {items.length > 0 ?
                            <>
                                <HeaderCartItem items={items} removeItemHandler={removeItemHandler} />
                                <div id="checkout" className="clearfix">
                                    <div className="sum_basket_title">
                                        <span className="price-section">
                                            <span id="sum_basket">{seperatNumber(state.total)} </span>
                                            <span className="sum-prices-currency">تومان</span>
                                        </span>
                                        {/* <span className="number jhidden">عدد</span> */}
                                    </div>
                                    <Link className="btn btn-custom" id="checkout_link" href="/cart" onClick={toggleCartBasketHandler}>ثبت سفارش</Link>
                                </div>
                            </>
                            :
                            <div id="basket_free">
                                <span className="free-img"></span>
                                <span className="free-title">سبد خرید شما خالیست!</span>
                            </div>
                        }



                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderCartButton;
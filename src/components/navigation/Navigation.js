import React, { useState } from 'react'
import './Navigation.css'
import { SiNike } from 'react-icons/si'
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { GrSearch } from 'react-icons/gr'
import { GoThreeBars } from 'react-icons/go'
import Button from './buttons/Buttons'

export default function Navigation(){

    const [isActive, setisActive] = useState(false)

    return(
        <div className="header_container">
            <div className="nike">
                <SiNike />
            </div>
            <div className="header_btn">
               <div className="first_dropmenu" >New Releases
                   <div className="sub_nav">
                        <div className="column">
                            <h3>Featured</h3>
                            <li>Shop all new arrivals</li>
                            <li>Bestsellers</li>
                            <li>SNKRS Launch Callendar</li>
                        </div>
                        <div className="column">
                            <h3>New For Men</h3>
                            <li>Shoes</li>
                            <li>Clothing</li>
                            <li>Equipment</li>
                            <li>Shop All New Men's</li>
                        </div>
                        <div className="column">
                            <h3>New For Women</h3>
                            <li>Shoes</li>
                            <li>Clothing</li>
                            <li>Equipment</li>
                            <li>Shop All New Women's</li>
                        </div>
                        <div className="column">
                            <h3>New For Kids</h3>
                            <li>Boys' Shoes</li>
                            <li>Boys' Clothing</li>
                            <li>Girls' Shoes</li>
                            <li>Girls' Clothing</li>
                            <li>Shop All New Kids'</li>
                        </div>
                        <div className="column">
                            <h3>Shop By Brand</h3>
                            <li>Nike Sportswear</li>
                            <li>NikeLab</li>
                            <li>Jordan</li>
                            <li>Nike SB</li>
                            <li>ACG</li>
                            <li>Nike Pro</li>
                        </div>
                   </div>
               </div>
               <div className="first_dropmenu" >Men
                   <div className="sub_nav">
                        <div className="column">
                            <h3>Featured</h3>
                            <li>New Releases</li>
                            <li>Bestsellers</li>
                            <li>SNKRS Launch Callendar</li>
                            <li>Member Access</li>
                            <li>Nike Essentials</li>
                            <li>Sustainable Materials</li>
                        </div>
                        <div className="column">
                            <h3>All Shoes</h3>
                            <li>All Sale Shoes</li>
                            <li>Lifestyle</li>
                            <li>Running</li>
                            <li>Basketball</li>
                            <li>Football</li>
                            <li>Jordan</li>
                            <li>GYM and Training</li>
                            <li>Tennis</li>
                            <li>Golf</li>
                        </div>
                        <div className="column">
                            <h3>Clothing</h3>
                            <li>All Clothing</li>
                            <li>All Sale Clothing</li>
                            <li>Hoodies and Sweatshirt</li>
                            <li>Top and T-shirt</li>
                            <li>Tracksuits</li>
                            <li>Shorts</li>
                            <li>Jackets and Jilets</li>
                            <li>Polos</li>
                            <li>Plus Size and Tall</li>
                            <li>Socks</li>
                        </div>
                        <div className="column">
                            <h3>Shop By Sport</h3>
                            <li>Running</li>
                            <li>Football</li>
                            <li>Basketball</li>
                            <li>Tennis</li>
                            <li>Golf</li>
                            <li>Gym and Training</li>
                            <li>Cross Training</li>
                            <li>Yoga</li>
                        </div>
                   </div>
               </div>
               <div className="first_dropmenu" >Women
                   <div className="sub_nav">
                        <div className="column">
                            <h3>Featured</h3>
                            <li>New Releases</li>
                            <li>Bestsellers</li>
                            <li>SNKRS Launch Callendar</li>
                            <li>Member Access</li>
                            <li>Nike Essentials</li>
                            <li>Sustainable Materials</li>
                        </div>
                        <div className="column">
                            <h3>All Shoes</h3>
                            <li>All Sale Shoes</li>
                            <li>Lifestyle</li>
                            <li>Running</li>
                            <li>Basketball</li>
                            <li>Football</li>
                            <li>Jordan</li>
                            <li>GYM and Training</li>
                            <li>Tennis</li>
                            <li>Golf</li>
                        </div>
                        <div className="column">
                            <h3>Clothing</h3>
                            <li>All Clothing</li>
                            <li>All Sale Clothing</li>
                            <li>Hoodies and Sweatshirt</li>
                            <li>Top and T-shirt</li>
                            <li>Tracksuits</li>
                            <li>Shorts</li>
                            <li>Jackets and Jilets</li>
                            <li>Polos</li>
                            <li>Plus Size and Tall</li>
                            <li>Socks</li>
                        </div>
                        <div className="column">
                            <h3>Shop By Sport</h3>
                            <li>Running</li>
                            <li>Football</li>
                            <li>Basketball</li>
                            <li>Tennis</li>
                            <li>Golf</li>
                            <li>Gym and Training</li>
                            <li>Cross Training</li>
                            <li>Yoga</li>
                        </div>
                   </div>
               </div>
               <div>Kids</div>
               <div>Sales</div>
            </div>
            <div className="header_search">
                <div className="header_search_container">
                    <input className="header_input" type="text" placeholder="Search" />
                    <GrSearch className="header_search_btn" />
                </div>   
               <AiOutlineHeart className="header_right_btns" />
               <div className="header_bag">
               <BsBag  />
               </div>
            </div>
            <div className="header_search_min">
                  <BsBag />
                  <GrSearch />
                  <GoThreeBars style={{cursor: "pointer"}} onClick={() => setisActive(isActive => !isActive)} />  
            </div>
            <div className={ isActive ? "header_hidden_search_container active" : "header_hidden_search_container"}>
                 <div className="header_hidden_search">
                    <div className="header_close">
                        <AiOutlineClose onClick={() => setisActive(isActive => false)} />
                    </div>
                    <div className="buttons_container">
                         <Button name="New Releases" />
                         <Button name="Men" />
                         <Button name="Women" />
                         <Button name="Kids" />
                         <Button name="Sale" />
                         <Button name="Collections" />
                    </div>
                    <p>Become a Nike Member <br/> for the best products, <br/> inspirations and stories in,<br/> sport. <strong>Learn more</strong></p>
                    <div className="second_butttons_container">
                         <button>Join Us</button>
                         <button>Sing In</button>
                    </div>

                 </div>
            </div>  
        </div>
    )
}
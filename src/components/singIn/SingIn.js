import React, { useState } from 'react'
import '../singIn/SingIn.css'
import { SiNike } from 'react-icons/si'
import { AiOutlineClose } from 'react-icons/ai'

export default function SingIn(){

    const [ active, setActive ] = useState(false)

    const handleActive = () => {
        setActive(active => true)
    }

    return(
        <div className="sing_container">
           <ul>
               <li>Help</li>
               <li>Join Us</li>
               <li onClick={handleActive}>Sing In</li>
           </ul>
           <div className={ active ? "sing_login_form active" : "sing_login_form"}>
                <div className="sing_login_container">
                   <AiOutlineClose onClick={() => setActive(active => !active)} className="sing_close_btn" />
                   <div className="sing_form_container">
                        <SiNike style={{fontSize: "3rem"}} />
                        <h3>be the first to know</h3>
                        <p>sing up for nike emails to be the first to see <br/> inspiring content, news and exclusive offers.</p>
                         <form>
                            <label for="email">Email address<span>*</span></label>
                            <input type="email" id="email" placeholder="Email address"/>
                            <label for="name">Name<span>*</span></label>
                            <label for="password">Password<span>*</span></label>
                            <div className="sing_form_input">
                                <input type="text" id="name" placeholder="Name"/>
                                <input type="password" id="password" placeholder="Password"/>
                            </div>
                               <input className="sing_button" type="button" value="Sign in"/>
                         </form>
                   </div>
                </div>
           </div>
        </div>
    )
}
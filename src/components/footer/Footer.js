import '../footer/Footer.css'
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { TiSocialYoutubeCircular } from 'react-icons/ti'

export default function Footer(){


    return(
        <div className="footer_container">
            <div className="footer_container_info">
                <div className="footer_up"> 
                      <div className="footer_column1">
                          <h4>find a store</h4>
                          <h4>sing up for email</h4>
                          <h4>become a member</h4>
                          <h4>feedback</h4>
                          <h4>promo code</h4>
                      </div>
                      <div className="footer_column2">
                          <h4>get help</h4>
                          <h6>order status</h6>
                          <h6>shipping and delivery</h6>
                          <h6>returns</h6>
                          <h6>contact us</h6>
                          <h6>nike promo codes help</h6>
                      </div>
                      <div className="footer_column2">
                          <h4>about nike</h4>
                          <h6>news</h6>
                          <h6>careers</h6>
                          <h6>investors</h6>
                          <h6>uk tax</h6>
                          <h6>uk pension statement</h6>
                          <h6>uk pension sip</h6>
                      </div>
                      <div className="footer_column2">
                          <h4>nike apps</h4>
                          <h6>nike run club</h6>
                          <h6>nike training club</h6>
                      </div>
                      <div className="footer_column_row">
                          <AiFillTwitterCircle />
                          <AiOutlineInstagram />
                          <RiFacebookCircleLine />
                          <TiSocialYoutubeCircular />
                      </div>
                </div>
            </div>
        </div>
    )
}
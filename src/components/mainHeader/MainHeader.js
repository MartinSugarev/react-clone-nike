import '../mainHeader/MainHeader.css'


export default function MainHeader(){


    return(
        <div className="main_header_container">
          <h4 style={{lineHeight: "5px", fontSize: ".8rem"}}>Blazer Low'77 Jumbo</h4>
          <h1 className="main_header_label">DON'T MISS OUT</h1>
          <h4 style={{fontSize: "1rem", fontWeight: "500"}}>Blazer is a force for self expression. How will you wear yours</h4>
          <button className="main_header_button">Shop</button>
        </div>
    )

}
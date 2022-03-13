import '../threepics/ThreePics.css'

export default function ThreePics(){


   return(
       <div className="three_container">
           <div className="three_p">
              Gear Tailored to You 
           </div>
           <div className="three_pics">
               <div className="three_big_pic">
                   <img src="1.png" alt="img1" />
               </div>
               <div className="three_first_pic">
               <img src="2.png" alt="img1" />
               </div>
               <div className="three_second_pic">
               <img src="3.png" alt="img1" />
               </div>      
           </div>
       </div>
   )

}
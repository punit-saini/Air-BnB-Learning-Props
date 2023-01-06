import React from "react"

export default function cards(props){
    for(let i=0; i<props.detail.length;i++){

    console.log(props.detail.length);
    return (
        
        <div className="cards">
              {console.log(props.detail)} 
                {props.detail.map(detail => (  
            

                <div className="card">
                   <img class="card-main-img" src={detail.imageURL}/>
                   <div className="card-body">
                    <div className="rating-text">
                            <img src="./star 1.png"/>
                            <span className="rating">{detail.rating}</span>
                            <span className="gray"> ({detail.total_ratings}) {detail.country}</span>
                    </div>
                    <div className="card-name">
                        <p>{detail.card_title}</p>
                    </div>
                    <div className="price">
                            <span className="bold">From ${detail.price}</span> / person
                    </div>
                    </div>
              </div>
            
            ))}  
              
        </div>
    
    )
    }
}
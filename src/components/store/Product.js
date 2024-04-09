import "./product.css"
import whyProtain from"./product-img/why-protain.png"
// import { useEffect } from "react";
import myJson from "./product.json";
export function Product(){
    return(
        <div className="product row gap-3">
                {myJson.map((product)=>{
                    {
                        return(
                            <div key={product.id} className="product-card col-lg-2 col-md-3 col-sm-4">
                                <div className="product-img">
                                <img src={product.img}/>
                            </div>
                            <div className="product-info">
                                <p>{product.title}</p>
                                <span>{product.price}EGP</span>
                                <button>Buy Now</button>
                            </div>
                        </div>
                            )
                    }
                  
                }) }
           
          
 
        </div>
    )
}


export function WheyProtein(){
    return(
        <div className="product row gap-3">
                {myJson.map((product)=>{
                    if(product.category === "whey-protein")
                    {
                        return(
                            <div key={product.id} className="product-card col-lg-2 col-md-3 col-sm-4">
                                <div className="product-img">
                                <img src={product.img}/>
                            </div>
                            <div className="product-info">
                                <p>{product.title}</p>
                                <span>{product.price}EGP</span>
                                <button>Buy Now</button>
                            </div>
                        </div>
                            )
                    }
                  
                }) }
           
          
 
        </div>
    )
}
export function Creatine(){
    return(
        <div className="product row gap-3">
                {myJson.map((product)=>{
                    if(product.category === "creatine")
                    {
                        return(
                            <div key={product.id} className="product-card col-lg-2 col-md-3 col-sm-4">
                                <div className="product-img">
                                <img src={product.img}/>
                            </div>
                            <div className="product-info">
                                <p>{product.title}</p>
                                <span>{product.price}EGP</span>
                                <button>Buy Now</button>
                            </div>
                        </div>
                            )
                    }
                  
                }) }
           
          
 
        </div>
    )
}
export function MultyVitamen(){
    return(
        <div className="product row gap-3">
                {myJson.map((product)=>{
                    if(product.category === "multy-vitamen")
                    {
                        return(
                            <div key={product.id} className="product-card col-lg-2 col-md-3 col-sm-4">
                                <div className="product-img">
                                <img src={product.img}/>
                            </div>
                            <div className="product-info">
                                <p>{product.title}</p>
                                <span>{product.price}EGP</span>
                                <button>Buy Now</button>
                            </div>
                        </div>
                            )
                    }
                  
                }) }
           
          
 
        </div>
    )
}
export function Accessories(){
    return(
        <div className="product row gap-3">
                {myJson.map((product)=>{
                    if(product.category === "accessories")
                    {
                        return(
                            <div key={product.id} className="product-card col-lg-2 col-md-3 col-sm-4">
                                <div className="product-img">
                                <img src={product.img}/>
                            </div>
                            <div className="product-info">
                                <p>{product.title}</p>
                                <span>{product.price}EGP</span>
                                <button>Buy Now</button>
                            </div>
                        </div>
                            )
                    }
                  
                }) }
           
          
 
        </div>
    )
}







  {/* <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
           <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div>
            <div className="product-card col-lg-2 col-md-3 col-sm-4">
                <div className="product-img">
                    <img src={whyProtain}/>
                </div>
                <div className="product-info">
                    <p>Optimum Nutrition Gold Standard 100% Isolate-76Serv.-2.28KG-Rich Vanilla</p>
                    <span>2800 EGP</span>
                    <button>Buy Now</button>
                </div>
                
            </div> */}
            // export default Product;
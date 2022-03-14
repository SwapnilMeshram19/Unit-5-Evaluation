import React from "react";
import "./Wishlist.css"

function Wishlist(){
    const [addItem,setAddItems]= React.useState([]);
    const [item, setItem]=React.useState("");
    let count=0;
    const items=(e)=>{
        const{value}=e.target;
        setItem(value);
    };
    const add=()=>{
        count++;
        if(count==3){
        
        }
        const payload={
            title: item,
            status:false
        };
        let newItem=[...addItem,payload];
        setAddItems(newItem);
    };
    
    return(
        <div>
            <div className="align-center">
                <h1>Wishlist</h1>
                <input  className="text-input" value={item} onChange ={items}placeholder="Enter Items"></input>
                <br/><button onClick={add} className="addButton">ADD</button>
            </div>
            <div>
                {
                   addItem.map((items)=>{
                       return <div className="align-center item-size">{items.title}</div>;
                   })
                }
            </div>
        </div>
    );
    
}

export {Wishlist};
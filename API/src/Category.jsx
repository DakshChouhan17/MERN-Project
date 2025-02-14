import { Component } from "react";
import Data from "./Data";
export default class Product extends Component{
    constructor(){
        super();
        this.state = {
            productList: Data
        }
    }
    render(){
        console.log(this.state.productList);
        return <>
            <table width="100%" border="1">
               <thead> 
                <tr style={{fontWeight: "bold"}}>
                    <td>Quote</td>
                    {/* <td>Image</td> */}
                    <td>Author</td>
                </tr>
                </thead>
                <tbody>
                {this.state.productList.map((product,index)=>{return <tr key={index}>
                    <td>{product.quote}</td>
                    {/* <td>
                        <img src={product.author} width="100px" height="100px"/>
                    </td> */}
                    <td>{product.author}</td>
                </tr>})}
               </tbody> 
            </table>
        </>
    }
}
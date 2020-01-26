import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import assets from '../values/assets';
class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            number:10,
            totNumber:20,

        }


    }


    render() {
        const container={
            width:"100%",
            height:"100px",
            display:"flex",
            flexDirection:"column",



        }
        const SearchBar={
            width:"100%",
            display:"flex",
            flexDirection:"row",
            direction:"rtl",



        }
        const name={
            // width:"11%",
            height:"20px",
            display:"flex",
            padding: "2px",
            fontSize:"20px",
            overflow:"hidden"
        }
        const search={
            width:"70%",
            height:"20px",
            display:"flex",
            flexDirection:"row",

            marginLeft:"2px",
            padding: "2px",
        }
        const numberOfProducts={
            width:"20%",
            height:"20px",
            display:"flex",
            padding: "2px",
            fontSize:"20px",
            overflow:"hidden",
            direction: "ltr"
            //backgroundColor: "red"
        }
        const line={
            width:"0px",
            height:"20px",
            backgroundColor:"black",
            marginRight:"2px",
            marginLeft:"2px",
            // padding: "2px",
            border:"1px solid black"
        }
        const list={
            width:"100%",
            display:"flex",
            flexDirection:"row",
            direction:"rtl",
            marginTop:"1%",
            borderTop:"1px solid gray",
            flexWrap:"wrap",
            marginLeft:"1%",
            marginRight: "1%",
            paddingTop:"1.5%",
        }
        const pageNumber={
            width:"100%",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            marginTop:"5px",
        }
        const product={
            width:"18%",
            alignItems:"center",
            justifyContent:"center",
            margin:"1%",
            display:"flex",
            flexDirection:"column",
            border: "1px solid black"

        }
        const namePrice={
            display:"flex",
            flexDirection:"row",
            flexWrap: "nowrap",
            width:"98%",
            direction:"rtl",
            margin: "2px",
            alignItems:"center",
            fontSize:"20px",
        }

        return (
            <div style={container}>
                <div style={SearchBar}>
                    <div style={name}>
                        نتایج جست و جو
                    </div>
                    <div style={line}></div>
                    <div style={search}>
                        <SearchIcon style={{width:"5%"}}/>
                        <InputBase
                            style={{width:"90%",direction:"rtl"}}
                            placeholder={"جست و جو در محصولات زیر ..."}
                        />
                    </div>
                    <div style={numberOfProducts}>
                        نمایش {this.state.number} محصول از {this.state.totNumber} محصول
                    </div>
                </div>
                <div style={list}>
                    <div style={product}>
                        <img style={{width:"100%",height:"300px"}} src={assets.image1}/>
                        <div style={namePrice}> مانتو </div>
                        <div style={namePrice}>
                            <div style={{fontSize:"30px",whiteSpace:"pre"}}>2000 </div>
                            تومان
                        </div>


                    </div>



                </div>

                <div style={pageNumber}>
                    {/* بهناز اینجا بنویس */}
                </div>
            </div>
        );
    }


}

export default Products;
import React from 'react';
import image1 from'./pic/clothes.jpg'
import Typography from '@material-ui/core/Typography';
class productList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden1:true,
            hidden2:true,
            hidden3:true,
            hidden4:true,
            hidden5:true,
            hidden6:true,
            hidden7:true,
            hidden8:true,
            hidden9:true,
        }

        this.hover=this.hover.bind(this);
        this.hidden=this.hidden.bind(this);
    }
    hover(n)
    {
        if(n==1)
            this.setState({hidden1:false})
        if(n==2)
            this.setState({hidden2:false})
        if(n==3)
            this.setState({hidden3:false})
        if(n==4)
            this.setState({hidden4:false})
        if(n==5)
            this.setState({hidden5:false})
        if(n==6)
            this.setState({hidden6:false})
        if(n==7)
            this.setState({hidden7:false})
        if(n==8)
            this.setState({hidden8:false})
        if(n==9)
            this.setState({hidden9:false})
    }
    hidden(n){
        if(n==1)
            this.setState({hidden1:true})
        if(n==2)
            this.setState({hidden2:true})
        if(n==3)
            this.setState({hidden3:true})
        if(n==4)
            this.setState({hidden4:true})
        if(n==5)
            this.setState({hidden5:true})
        if(n==6)
            this.setState({hidden6:true})
        if(n==7)
            this.setState({hidden7:true})
        if(n==8)
            this.setState({hidden8:true})
        if(n==9)
            this.setState({hidden9:true})
    }

    render() {


        const style_container={
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            flexWrap:"wrap",
            direction:"rtl",
            // backgroundColor: "blue",
            position:"relative",
            width:"60%",
            marginLeft:"20%",
            marginRight:"20%",

            // alignItems:"stretch"
        }
        const style_item={
            display:"flex",
            flexDirection:"column",
            width: "30%",
            // height:"50px",
            // backgroundColor: "red",
            margin: "1%",
            position:"relative",
            cursor:"pointer",
            alignItems:"center",
            border: "5px solid #c7c7c7"

        }
        const img={
            width:"100%",
            position:"relative",

        }
        const img_blur={
            width:"100%",
            position:"relative",
            filter:"blur(4px)",
        }
        const caption={
            position:"absolute",
            display:"flex",
            flexDirection:"column",
            width:"70%",
            alignItems:"center",
            border: "5px inset #103F5E",
            borderRadius: "0px 8px 0px 10px",
            //backgroundColor:"white",
            justifyContent:"center",
            bottom:"30%"

        }
        const hidden={
            display:"none"
        }

        return (
            <div style={style_container}>


                <div style={style_item} onMouseEnter={()=>this.hover(1)} onMouseLeave={()=>this.hidden(1)} >
                    <img  src={image1} style={ this.state.hidden1==true ? img : img_blur}/>
                    <div style={this.state.hidden1==true ? hidden :caption}>
                        <Typography variant="h2" gutterBottom style={{textAlign:"center"}}>clothes</Typography>
                        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>لباس</Typography>
                    </div>
                </div>

                <div style={style_item} onMouseEnter={()=>this.hover(2)} onMouseLeave={()=>this.hidden(2)} >
                    <img  src={image1} style={ this.state.hidden2==true ? img : img_blur}/>
                    <div style={this.state.hidden2==true ? hidden :caption}>
                        <Typography variant="h2" gutterBottom style={{textAlign:"center"}}>clothes</Typography>
                        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>لباس</Typography>
                    </div>
                </div>

                <div style={style_item} onMouseEnter={()=>this.hover(3)} onMouseLeave={()=>this.hidden(3)} >
                    <img  src={image1} style={ this.state.hidden3==true ? img : img_blur}/>
                    <div style={this.state.hidden3==true ? hidden :caption}>
                        <Typography variant="h2" gutterBottom style={{textAlign:"center"}}>clothes</Typography>
                        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>لباس</Typography>
                    </div>
                </div>

                <div style={style_item} onMouseEnter={()=>this.hover(4)} onMouseLeave={()=>this.hidden(4)} >
                    <img  src={image1} style={ this.state.hidden4==true ? img : img_blur}/>
                    <div style={this.state.hidden4==true ? hidden :caption}>
                        <Typography variant="h2" gutterBottom style={{textAlign:"center"}}>clothes</Typography>
                        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>لباس</Typography>
                    </div>
                </div>

                <div style={style_item} onMouseEnter={()=>this.hover(5)} onMouseLeave={()=>this.hidden(5)} >
                    <img  src={image1} style={ this.state.hidden5==true ? img : img_blur}/>
                    <div style={this.state.hidden5==true ? hidden :caption}>
                        <Typography variant="h2" gutterBottom style={{textAlign:"center"}}>clothes</Typography>
                        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>لباس</Typography>
                    </div>
                </div>


                <div style={style_item} onMouseEnter={()=>this.hover(6)} onMouseLeave={()=>this.hidden(6)} >
                    <img  src={image1} style={ this.state.hidden6==true ? img : img_blur}/>
                    <div style={this.state.hidden6==true ? hidden :caption}>
                        <Typography variant="h2" gutterBottom style={{textAlign:"center"}}>clothes</Typography>
                        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>لباس</Typography>
                    </div>
                </div>

                <div style={style_item} onMouseEnter={()=>this.hover(7)} onMouseLeave={()=>this.hidden(7)} >
                    <img  src={image1} style={ this.state.hidden7==true ? img : img_blur}/>
                    <div style={this.state.hidden7==true ? hidden :caption}>
                        <Typography variant="h2" gutterBottom style={{textAlign:"center"}}>clothes</Typography>
                        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>لباس</Typography>
                    </div>
                </div>


                <div style={style_item} onMouseEnter={()=>this.hover(8)} onMouseLeave={()=>this.hidden(8)} >
                    <img  src={image1} style={ this.state.hidden8==true ? img : img_blur}/>
                    <div style={this.state.hidden8==true ? hidden :caption}>
                        <Typography variant="h2" gutterBottom style={{textAlign:"center"}}>clothes</Typography>
                        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>لباس</Typography>
                    </div>
                </div>


                <div style={style_item} onMouseEnter={()=>this.hover(9)} onMouseLeave={()=>this.hidden(9)} >
                    <img  src={image1} style={ this.state.hidden9==true ? img : img_blur}/>
                    <div style={this.state.hidden9==true ? hidden :caption}>
                        <Typography variant="h2" gutterBottom style={{textAlign:"center"}}>clothes</Typography>
                        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>لباس</Typography>
                    </div>
                </div>



            </div>
        );
    }


}

export default productList;
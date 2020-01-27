import React from 'react';
import Button from '@material-ui/core/Button';
import BasketItem from "./basket_item";
import image1 from './pic/clothes.jpg'
import {FiPlus} from 'react-icons/fi'
import {FiMinus} from 'react-icons/fi'
import {FiTrash} from 'react-icons/fi'
import {AiFillShop} from 'react-icons/ai'
import {AiOutlineFileProtect} from 'react-icons/ai'
import Typography from "@material-ui/core/Typography";

class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.ARRAY = [
            {
                id: 1,
                name: 'پیراهن راه راه',
                Seller: 'گل سرخ',
                Warranty: 'گارانتی دارد',
                num: 1,
                price: 60000,
                img: image1
            }
            ,
            {
                id: 2,
                name: 'پیراهن راه راه',
                Seller: 'گل سرخ',
                Warranty: 'گارانتی دارد',
                num: 1,
                price: 60000,
                img: image1
            },
            {
                id: 3,
                name: 'پیراهن راه راه',
                Seller: 'گل سرخ',
                Warranty: 'گارانتی دارد',
                num: 1,
                price: 60000,
                img: image1
            },
        ];
        this.state = {
            array: this.ARRAY,
            sum: 0,
            num: 0,
        };
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        // this.sum_num = this.sum_num.bind(this);
    }

    plus(i) {
        const temp = this.state.array;
        temp[i].num++;
        const temp2 = this.state.num + 1
        const temp3 = this.state.sum + temp[i].price
        this.setState({array: temp, num: temp2, sum: temp3});
    }


    minus(i) {
        const temp = this.state.array;
        temp[i].num--;
        const temp2 = this.state.num - 1;
        const temp3 = this.state.sum - temp[i].price;
        this.setState({array: temp, num: temp2, sum: temp3});
    }

    componentDidMount() {
        this.sum_num();
    }

    sum_num = () => {
        var temp1 = 0;
        var temp2 = 0;
        for (var i = 0; i < this.state.array.length; i++) {
            temp1 = temp1 + this.state.array[i].price*this.state.array[i].num;

            temp2 = temp2 + this.state.array[i].num;

        }
        this.setState({sum: temp1, num: temp2});

    };

    render() {

        /**************************************************************************************************/


        const style_container2 = {
            display: "flex",
            flexDirection: "row",
            direction: "rtl",
            //backgroundColor: "blue",
            position: "relative",
            width: "96%",
            margin: "1%",
            borderBottom: "1px solid #c7c7c7",
            padding: "1%",
            alignItems: "stretch"
        }
        const img_container = {
            width: "20%",
            cursor: "pointer"
        }
        const img = {
            width: "100%"
        }
        const container2 = {
            display: "flex",
            flexDirection: "column",
            direction: "rtl",
            //backgroundColor: "blue",
            position: "relative",
            width: "100%",
        };
        const part = {
            flexGrow: "1",
            paddingRight: "5%",
            direction: "rtl",
        }
        const container3 = {
            flexGrow: "2",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            position: "relative",
        }
        const part2 = {
            flexGrow: "1",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            direction: "ltr",
            alignItems: "flex-end",
        }
        const part3 = {
            alignItems: "flex-start",
            marginRight: "5%",
            paddingRight: "5%",
            position: "relative",
            width: "100%",
        }
        const RTL = {
            direction: "rtl",
        }
        const LTR = {
            direction: "ltr",
        }
        const price_style = {
            display: "flex",
            width: "60%",
            direction: "ltr",
        }
        const number = {
            width: "50%",
            height: "40px",
            position: "relative",
            borderRadius: "5px",
            border: "1px solid gray",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        }
        const icons = {
            position: "relative",
            width: "100%",
            cursor: "pointer",
        };


        /***************************************************************************************/

        const style_container = {
            display: "flex",
            flexDirection: "row",
            direction: "rtl",
            position: "relative",
            alignItems: "flex-start"
        };
        const style_item1 = {
            display: "flex",
            alignSelf: "flex-start",
            flexDirection: "column",
            width: "55%",
            backgroundColor: "white",
            position: "relative",
            margin: "3%",
            border: "1px solid gray",

        };

        const style_item2 = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            backgroundColor: "white",
            position: "relative",
            margin: "3%",
            borderRadius: "5px",
            border: "1px solid gray",
            padding: "1%",
        };
        const style_sum = {
            display: "flex",
            flexDirection: "row",
            width: "90%",
            backgroundColor: "white",
            position: "relative",
            margin: "3%",
            borderBottom: "1px solid #c7c7c7",
            padding: "5px",
        };
        const sum_price_style = {
            display: "flex",
            //position:"relative",
            //backgroundColor:"red",
            width: "60%",
            // right:"0px",
            direction: "ltr",
        };
        const s_style = {
            display: "flex",
            //position:"relative",
            // backgroundColor:"black",
            width: "40%",
            // right:"0px",
            direction: "rtl",
        };
        const tooman_style = {
            display: "flex",
            direction: "ltr",
            marginRight: "5px",
        };
        const style_button = {};
        const Delete = {
            display: "none"

        };
        return (
            <div style={style_container}>
                <div style={style_item1}>
                    {
                        this.state.array.map((item, index) =>
                            <div style={item.num >= 1 ? style_container2 : Delete}>

                                <div style={img_container}>
                                    <img src={item.img} style={img}/>
                                </div>


                                <div style={container2}>
                                    <div style={part}>
                                        <Typography variant="h5" gutterBottom>{item.name}</Typography>
                                    </div>
                                    <div style={part}>

                                        <Typography variant="subtitle2" gutterBottom> <AiFillShop/> {item.Seller}
                                        </Typography>
                                    </div>
                                    <div style={part}>
                                        <Typography variant="subtitle2"
                                                    gutterBottom><AiOutlineFileProtect/> {item.Warranty}
                                        </Typography>
                                    </div>
                                    <div style={container3}>
                                        <div style={{...part2, ...RTL}}>
                                            <div style={part3}>
                                                <div style={number}>
                                                    <div style={{
                                                        position: "relative",
                                                        width: "20%",
                                                        textAlign: "center"
                                                    }}>
                                                        <FiPlus
                                                            style={{
                                                                position: "relative",
                                                                width: "100%",
                                                                cursor: "pointer"
                                                            }}
                                                            onClick={() => this.plus(index)}/>
                                                    </div>
                                                    <div style={{
                                                        position: "relative",
                                                        width: "60%",
                                                        textAlign: "center"
                                                    }}>
                                                        {item.num}
                                                    </div>
                                                    <div style={{
                                                        position: "relative",
                                                        width: "20%",
                                                        textAlign: "center",
                                                        cursor: "pointer"
                                                    }}>
                                                        <FiMinus style={item.num == 1 ? Delete : icons}
                                                                 onClick={() => this.minus(index)}/>
                                                        <FiTrash style={item.num == 1 ? icons : Delete}
                                                                 onClick={() => this.minus(index)}/>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div style={part2}>
                                            <div style={{part3, ...LTR}}>
                                                <div style={price_style}>
                                                    <div style={tooman_style}>تومان</div>
                                                    {item.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}

                </div>


                <div style={style_item2}>


                    <div style={style_sum}>
                        <div style={s_style}>
                            تعداد کالا
                        </div>

                        <div style={sum_price_style}>
                            {this.state.num}
                        </div>
                    </div>


                    <div style={style_sum}>
                        <div style={s_style}>
                            جمع قیمت ها
                        </div>

                        <div style={sum_price_style}>
                            <div style={tooman_style}>تومان</div>
                            {this.state.sum}
                        </div>
                    </div>


                    <div style={style_sum}>
                        <div style={s_style}>
                            مبلغ قابل پرداخت
                        </div>

                        <div style={sum_price_style}>
                            <div style={tooman_style}>تومان</div>
                            {this.state.sum}
                        </div>
                    </div>


                    <div style={style_button}>
                        <Button variant="contained" color="secondary">ادامه ی فرآیند خرید</Button>
                    </div>
                </div>

            </div>

        );
    }


}

export default Basket;
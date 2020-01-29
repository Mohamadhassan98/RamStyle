import React from 'react';

export default function BankPort(props) {

    return (
        <div className="App">
            <div className="w3-container w3-padding-48" style={{backgroundImage: "url(background/013.png)"}}>
                <div className="w3-container w3-padding w3-center">
                    <img src={"logo/bank-melli-iran.png"}
                         style={{width: "10%", height: "10%"}}/>
                </div>
                <br/>
                <div className="w3-container">
                    <div className="w3-container">
                        <div className="w3-container w3-cell-row">
                            <form id="form-dargah" className="w3-cell w3-container">
                                <fieldset className="w3-container w3-round w3-card-4 w3-light-gray">
                                    <legend className="w3-container w3-card-4 w3-light-blue w3-margin"> اطلاعات کارت
                                    </legend>
                                    <div className="w3-container">
                                        <div className="w3-container w3-light-gray">
                                            <div className="w3-cell-row w3-section">
                                                <div className="w3-cell w3-center " style={{width: "250px"}}>
                                                    <p className="w3-center"> شماره کارت </p>
                                                </div>
                                                <div className="w3-cell w3-center">
                                                    <input className="w3-input w3-border" maxLength="4" type="text"
                                                           style={{textAlign: "center"}}/>
                                                </div>
                                                <div className="w3-cell w3-center">
                                                    <input className="w3-input w3-border" maxLength="4" type="text"
                                                           style={{textAlign: "center"}}/>
                                                </div>
                                                <div className="w3-cell w3-center">
                                                    <input className="w3-input w3-border" maxLength="4" type="text"
                                                           style={{textAlign: "center"}}/>
                                                </div>
                                                <div className="w3-cell w3-center">
                                                    <input className="w3-input w3-border" maxLength="4" type="text"
                                                           style={{textAlign: "center"}}/>
                                                </div>
                                            </div>
                                            <div className="w3-cell-row w3-section">
                                                <div className="w3-cell w3-center " style={{width: "250px"}}>
                                                    <p className="w3-center"> رمز اینترنتی کارت </p>
                                                </div>
                                                <div className="w3-cell w3-center" style={{width: "220px"}}>
                                                    <input className="w3-input w3-border" type="text"/>
                                                </div>
                                                <div className="w3-cell w3-center" style={{width: "220px"}}>
                                                </div>
                                            </div>
                                            <div className="w3-cell-row w3-section">
                                                <div className="w3-cell w3-center " style={{width: "250px"}}>
                                                    <p className="w3-center"> شماره شناسایی دو (cvv2) </p>
                                                </div>
                                                <div className="w3-cell w3-center" style={{width: "220px"}}>
                                                    <input className="w3-input w3-border" type="text"/>
                                                </div>
                                                <div className="w3-cell w3-center" style={{width: "220px"}}>
                                                </div>
                                            </div>
                                            <div className="w3-cell-row w3-section">
                                                <div className="w3-cell w3-center " style={{width: "250px"}}>
                                                    <p className="w3-center"> تاریخ انقضای کارت </p>
                                                </div>
                                                <div className="w3-cell w3-center " style={{width: "50px"}}>
                                                    <p className="w3-center w3-margin-right"> ماه </p>
                                                </div>
                                                <div className="w3-cell w3-center" style={{width: "60px"}}>
                                                    <input className="w3-input w3-border " type="text"/>
                                                </div>
                                                <div className="w3-cell w3-center " style={{width: "50px"}}>
                                                    <p className="w3-center w3-margin-right"> سال </p>
                                                </div>
                                                <div className="w3-cell w3-center " style={{width: "60px"}}>
                                                    <input className="w3-input w3-border" type="text"/>
                                                </div>
                                                <div className="w3-cell w3-center " style={{width: "30px"}}>
                                                </div>
                                                <div className="w3-cell w3-center" style={{width: "80px"}}>
                                                </div>
                                                <div className="w3-cell w3-center " style={{width: "30px"}}>
                                                </div>
                                                <div className="w3-cell w3-center" style={{width: "80px"}}>
                                                </div>
                                            </div>
                                            <div className="w3-cell-row w3-section">
                                                <div className="w3-cell w3-center " style={{width: "250px"}}>
                                                    <p className="w3-center"> ایمیل (اختیاری) </p>
                                                </div>
                                                <div className="w3-cell w3-center" style={{width: "220px"}}>
                                                    <input className="w3-input w3-border" type="text"/>
                                                </div>
                                                <div className="w3-cell w3-center" style={{width: "220px"}}>
                                                </div>
                                            </div>
                                            <div className="w3-cell-row w3-section">
                                                <div className="w3-cell w3-center " style={{width: "250px"}}>
                                                    <p className="w3-center"> تلفن همراه (اختیاری) </p>
                                                </div>
                                                <div className="w3-cell w3-center" style={{width: "220px"}}>
                                                    <input className="w3-input w3-border" type="text"/>
                                                </div>
                                                <div className="w3-cell w3-center" style={{width: "220px"}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w3-center w3 w3-margin-bottom">
                                        <input type="submit" className="w3-btn w3-text-white" value="پرداخت"
                                               style={{backgroundColor: "coral"}}/>
                                    </div>
                                    <br/>
                                </fieldset>
                            </form>
                            <div className="w3-cell w3-container" style={{width: "400px"}}>
                                <fieldset className="w3-container w3-round w3-card-4 w3-light-gray"
                                          style={{height: "625px"}}>
                                    <legend className="w3-container w3-card-4 w3-light-blue w3-margin"> اطلاعات تراکنش
                                    </legend>
                                    <div className="w3-container w3-light-gray">
                                        <div className="w3-container w3-padding-16 w3-right">
                                            <p> نام پذیرنده: گروه صنعتی ایران خودرو </p>
                                            <p> شماره ی پذیرنده: 123456789 </p>
                                            <p> سایت پذیرنده: https://www.ikco.ir </p>
                                            <p> مبلغ قابل پرداخت: </p>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w3-container">
                    <div className="w3-container">
                        <form action="" className="w3-container w3-margin">
                            <fieldset className="w3-container w3-round w3-card-4 w3-light-gray">
                                <legend className="w3-container w3-card-4 w3-light-blue w3-margin"> نکات ایمنی</legend>
                                <div className="w3-container w3-light-gray">
                                    <div className="w3-container w3-padding-16 w3-right">
                                        <ul>
                                            <li>مشتری گرامی شما با پروتکل امن (SSL) به درگاه پرداخت الکترونیک بانک ملی
                                                متصل شده اید.
                                            </li>
                                            <li>لطفا از صحت نام فروشنده و مبلغ نمایش داده شده، اطمینان حاصل فرمایی.
                                                خواهشمند است جهت
                                                جلوگیری از سوءاستفاده های اینترنتی، آدرس جاری مرورگر وب خود را با آدرس
                                                مذکور مقایسه نمایید.
                                            </li>
                                            <li>نحوه ورود اطلاعات:</li>
                                            <ul>
                                                <li>شماره کارت: شماره کارت 16 رقمی مندرج بر روی کارت</li>
                                                <li>رمز دوم: رمز دوم (یا رمز اینترنتی) دریافت شده از بانک صادرکننده و یا
                                                    خودپرداز
                                                </li>
                                                <li>شماره شناسایی دوم: کد سه یا چها رقمی مندرج در پشت و روی کارت</li>
                                                <li>تاریخ انقضاء: ماه و سال انقضای مندرج بر روی کارت</li>
                                            </ul>
                                        </ul>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

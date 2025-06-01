import React from 'react';
import './Payment.css'; // Import CSS file if needed
import { useNavigate } from 'react-router-dom';

function Payment() {

    const navigate=useNavigate();
    function myFunction() {
        alert("✅Your order has been placed");
        navigate('/');
    }

    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="col">
                        <h3 className="title">billing address</h3>
                        <div className="inputBox">
                            <span>full name :</span>
                            <input type="text" placeholder="MADHAN" required/>
                        </div>
                        <div className="inputBox">
                            <span>email :</span>
                            <input type="email" placeholder="example@.com" required/>
                        </div>
                        <div className="inputBox">
                            <span>address :</span>
                            <input type="text" placeholder="room - street - locality" required />
                        </div>
                        <div className="inputBox">
                            <span>city :</span>
                            <input type="text" placeholder="Chennai" required />
                        </div>
                        <div className="flex">
                            <div className="inputBox">
                                <span>state :</span>
                                <input type="text" placeholder="India" required/>
                            </div>
                            <div className="inputBox">
                                <span>zip code :</span>
                                <input type="text" placeholder="123 456" required/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="title">payment</h3>
                        <div className="inputBox">
                            <span>cards accepted :</span>
                            <img src="images/card_img.png" alt="" />
                        </div>
                        <div className="inputBox">
                            <span>name on card :</span>
                            <input type="text" placeholder="MADHANRAJ K" required/>
                        </div>
                        <div className="inputBox">
                            <span>credit card number :</span>
                            <input type="number" placeholder="1111-2222-3333-4444" required />
                        </div>
                        <div className="inputBox">
                            <span>exp month :</span>
                            <input type="text" placeholder="jan" required/>
                        </div>
                        <div className="flex">
                            <div className="inputBox">
                                <span>exp year :</span>
                                <input type="number" placeholder="2024" required />
                            </div>
                            <div className="inputBox">
                                <span>CVV :</span>
                                <input type="text" placeholder="1234" required />
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={myFunction} className="submit-btn" type="button" id="id1">PROCEED TO PAYMENT</button>
            </form>
        </div>
    );
}

export default Payment;

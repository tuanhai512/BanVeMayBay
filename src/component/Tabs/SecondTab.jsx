import React,{useState} from 'react'
import './SecondTab.css';
import './Destination';
import { Destination } from './Destination';
import {AiOutlineSearch} from 'react-icons/ai';

function SecondTab() {
    const [choice,setChoice]=useState('');

    const handleChange=(e)=>{
        setChoice( e.target.value);
    }


    return(
    <div className="button-form-second">
        <form className="combo-form">          
            <label>Đặt combo tiết kiệm lên đến 15%</label>
        </form>
        <form className="select-form">
                <div className="bottom-form" >
                    <p>Điểm khởi hành</p>
                <select className="select-area">
                    {Destination.map((item,index)=> {
                        return(
                            <option key={index}>
                                {item.title}
                            </option>
                        )
                    })}
                </select>
                    <p>Điểm đến</p>
                <select className="select-area">
                    {Destination.map((item,index)=> {
                        return(
                            <option key={index}>
                                {item.title}
                            </option>
                        )
                    })}
                </select>
                <p>Điểm đến</p>
                <select className="select-area">
                    {Destination.map((item,index)=> {
                        return(
                            <option key={index}>
                                {item.title}
                            </option>
                        )
                    })}
                </select>
                <p>Điểm đến</p>
                <select className="select-area">
                    {Destination.map((item,index)=> {
                        return(
                            <option key={index}>
                                {item.title}
                            </option>
                        )
                    })}
                </select>
                <p>Điểm đến</p>
                <select className="select-area">
                    {Destination.map((item,index)=> {
                        return(
                            <option key={index}>
                                {item.title}
                            </option>
                        )
                    })}
                </select>
                </div>                      
        </form>
        <form className="search-form">
                <button className="search-button">
                    <AiOutlineSearch/>
                    Tìm chuyến bay
                </button>
        </form>
       
    </div>
    );
}

export default SecondTab

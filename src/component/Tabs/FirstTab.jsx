import React,{useState} from 'react'
import './FirstTab.css';
import './Destination';
import { Destination } from './Destination';
import {AiOutlineSearch} from 'react-icons/ai';
import {Link} from 'react-router-dom';
function FirstTab() {
    const [choice,setChoice]=useState('');

    const handleChange=(e)=>{
        setChoice( e.target.value);
    }

    return(
    <div className="button-form-first">
        <form className="radio-form">
            <input type="radio" value="male" id="male"
                onChange={handleChange} name="gender" className="button-radio"/>
            <label for="male">Male</label>

            <input type="radio" value="female" id="female"
                onChange={handleChange} name="gender" className="button-radio"/>
            <label for="female">Female</label>

        </form>
        <form className="select-form">
                <div className="top-form">
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
                </div>
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
                <tr className="checkbox-area">
                    <th>
                    <input type="checkbox" value="Khứ hồi"/>
                    </th>
                    <th>
                        Khứ hồi
                    </th>
                </tr>            
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
                   <Link to="/product"> Tìm chuyến bay</Link>
                </button>
           
        </form>
       
    </div>
    );
}

export default FirstTab

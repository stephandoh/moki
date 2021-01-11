import React, { useState} from 'react';
import Nav from './Nav';
import './KalCal.css';

function KalCal() {
    const [food, setFood] = useState([]);

    const [calorie, setCalorie] = useState('');
    const [fufuCalorie, setFufuCalorie] = useState('');
    const [riceCalorie, setRiceCalorie] = useState('');

    const [soupCalorie, setSoupCalorie] = useState('');
    const [nutCalorie, setNutCalorie] = useState('');
    const [sauceCalorie, setSauceCalorie] = useState('');

    const [goatCalorie, setGoatCalorie] = useState('');
    const [chickenCalorie, setChickenCalorie] = useState('');


    const [bankukal, setBankuKal] = useState(20);
    const [fufukal, setfufuKal] = useState(20);
    const [Ricekal, setRiceKal] = useState(20);

    const [soupkal, setSoupKal] = useState(30);
    const [nutkal, setNutKal] = useState(20);
    const [saucekal, setSauceKal] = useState(20);

    const [goatkal, setGoatKal] = useState(20);
    const [chickenkal, setChickenKal] = useState(30);


    var bankuTotal = parseInt(calorie) * bankukal;
    var fufuTotal = parseInt(fufuCalorie) * fufukal;
    var riceTotal = parseInt(riceCalorie) * Ricekal;
    var soupTotal = parseInt(soupCalorie) * soupkal;
    var nutTotal = parseInt(nutCalorie) * nutkal;
    var sauceTotal = parseInt(sauceCalorie) * saucekal;
    var chickenTotal = parseInt(chickenCalorie) * chickenkal;
    var goatTotal = parseInt(goatCalorie) * goatkal;

    var total = bankuTotal  + fufuTotal + riceTotal + nutTotal + sauceTotal + chickenTotal + goatTotal + soupTotal;

    const handleSubmit = (e) => {
        e.preventDefault();
        setCalorie(e.target.value);
        setFufuCalorie(e.target.value);
        setRiceCalorie(e.target.value);
        setSoupCalorie(e.target.value);
        setNutCalorie(e.target.value);
        setSauceCalorie(e.target.value);
        setGoatCalorie(e.target.value);
        setChickenCalorie(e.target.value);
        
        console.log(total);
    }


    return (
        <div className = 'KalCal'>
            <Nav />
            <h2>Hello There, Welcome to Moki!</h2>
            <h3>If you need some assisstance, please click the info tab</h3>
            <div>
                <h3>Select Carbs</h3>
                <label>
                    Food
                    <select className = 'food'>
                        <option>banku</option>
                        <option>fufu</option>
                        <option>rice</option>
                    </select>
                </label>
                <label>
                    Quantity
                    <input
                        className = 'quantity'
                        name="Quantity"
                        type="number"
                        placeholder="quantity"
                        min="0"
                        value={calorie}
                        onInput={e => setCalorie(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Food
                <select className = 'food'>
                        <option>banku</option>
                        <option>fufu</option>
                        <option>rice</option>
                </select>
                </label>
                <label>
                    Quantity
                    <input
                    className = 'quantity'
                    name="Quantity"
                    type="number"
                    placeholder="quantity"
                    min="0"
                    value={fufuCalorie}
                    onInput={e => setFufuCalorie(e.target.value)}
                />
                </label>
                <br></br>
                <label>
                    Food
                    <select className = 'food'> 
                        <option>banku</option>
                        <option>fufu</option>
                        <option>rice</option>
                    </select>
                </label>
                <label>
                    Quantity
                    <input
                        className = 'quantity'
                        name="Quantity"
                        type="number"
                        placeholder="quantity"
                        min="0"
                        value={riceCalorie}
                        onInput={e => setRiceCalorie(e.target.value)}
                    />
                </label>
            </div>

            <br></br>
            
            <div>
            <h3>Select Soup or Stew</h3>
            <label> 
                    Food
                <select className = 'food'>
                        
                        <option>light soup</option>
                        <option>groundnut soup</option>
                        <option>chicken sauce</option>
                     
                </select>
                </label> 
                <label>
                    Quantity
                    <input
                    className = 'quantity'
                    name="Quantity"
                    type="number"
                    placeholder="quantity"
                    min="0"
                    value={soupCalorie}
                    onInput={e => setSoupCalorie(e.target.value)}
                />
                </label>
                <br></br>
                <label>
                    Food
                    <select className = 'food'>
                       
                        <option>light soup</option>
                        <option>groundnut soup</option>
                        <option>chicken sauce</option>
                        
                    </select>
                </label>
                <label>
                    Quantity
                    <input
                        className = 'quantity'
                        name="Quantity"
                        type="number"
                        placeholder="quantity"
                        min="0"
                        value={nutCalorie}
                        onInput={e => setNutCalorie(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Food
                <select className = 'food'>
                       
                        <option>light soup</option>
                        <option>groundnut soup</option>
                        <option>chicken sauce</option>
                      
                </select>
                </label>
                <label>
                    Quantity
                    <input
                    className = 'quantity'
                    name="Quantity"
                    type="number"
                    placeholder="quantity"
                    min="0"
                    value={sauceCalorie}
                    onInput={e => setSauceCalorie(e.target.value)}
                />
                </label>
                <br></br>
            </div>
            <br></br>
            <div>
                            <h3>Select Proteins</h3>   

            <label>
                    Food
                    <select className = 'food'>
                     
                        <option>chicken</option>
                        <option>goat meat</option>
                    </select>
                </label>
                
                <label>
                    Quantity
                    <input
                        className = 'quantity'
                        name="Quantity"
                        type="number"
                        placeholder="quantity"
                        min="0"
                        value={goatCalorie}
                        onInput={e => setGoatCalorie(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Food
                <select  className = 'food'>
                       
                        <option>chicken</option>
                        <option>goat meat</option>
                </select>
                </label>
                
                <label>
                    Quantity
                    <input
                    className = 'quantity'
                    name="Quantity"
                    type="number"
                    placeholder="quantity"
                    min="0"
                    value={chickenCalorie}
                    onInput={e => setChickenCalorie(e.target.value)}
                />
                </label>  
            </div>
            <br></br>
            {/* <button onClick={handleSubmit}>Submit</button> */}
            <div>
            <h2>Your total calorie consumption is {total} calories</h2>
            </div>
        </div>
    )
}

export default KalCal




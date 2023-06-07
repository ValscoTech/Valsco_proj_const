import "./Form.css";
import axios from 'axios';
import CarImg from "../assets/CarImg.jpeg";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { DataContext } from "../context/DataContext";

const Form = () => {
  const { co2data, updateData } = useContext(DataContext);

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [vehicleClass, setVehicleClass] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [cylinders, setCylinders] = useState('');
  const [fuelConsumptionCity, setFuelConsumptionCity] = useState('');
  const [fuelConsumptionHwy, setFuelConsumptionHwy] = useState('');
  const [fuelConsumptionComb, setFuelConsumptionComb] = useState('');
  const [userEmail, setUserEmail] = useState('');
  // const [co2Emission, setCo2Emission] = useState('');

  const {currentUser} = useUserAuth();
  useEffect(()=>{
    if(currentUser){
      setUserEmail(currentUser.email);
    }
  }, [currentUser]);

  const navigate = useNavigate();

  const makeHandler = (e)=>{
    setMake(e.target.value);
  }
  const modelHandler = (e)=>{
    setModel(e.target.value);
  }
  const vehicleClassHandler = (e)=>{
    setVehicleClass(e.target.value);
  }
  const engineSizeHandler = (e)=>{
    setEngineSize(e.target.value);
  }
  const cylindersHandler = (e)=>{
    setCylinders(e.target.value);
  }
  const fuelConsumptionCityHandler = (e)=>{
    setFuelConsumptionCity(e.target.value);
  }
  const fuelConsumptionHwyHandler = (e)=>{
    setFuelConsumptionHwy(e.target.value);
  }
  const fuelConsumptionCombHandler = (e)=>{
    setFuelConsumptionComb(e.target.value);
  }
  // const co2EmissionHandler = (e)=>{
  //   setCo2Emission(e.target.value);
  // }

  const jsonObj = {
    "useremail": userEmail,
    "make": make,
    "model": model,
    "vehicle_class": vehicleClass,
    "engine_size": engineSize,
    "cylinders": cylinders,
    "fuel_consumption_city": fuelConsumptionCity,
    "fuel_consumption_hyw": fuelConsumptionHwy,
    "fuel_consumption_comb": fuelConsumptionComb,
    // "co2_emission": co2Emission
  }
  const carFormSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/cardata", jsonObj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        updateData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate('/caremission');
  };

  return (
    <div className="main-car-form-container">
      <div className="car-img-container">
        <h2>Input the data of your Car</h2>
        <img src={CarImg} className="car-img" />
      </div>
      <div className="car-form-container">
        <div className="car-form">
          <div className="subtitle">Car Data Form</div>
          <div className="input-container ic1">
            <input
              id="firstname"
              className="input"
              type="text"
              placeholder=" "
              onChange={makeHandler}
              value={make}
            />
            <div className="cut"></div>
            <label for="firstname" className="placeholder">
              Make
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
              onChange={modelHandler}
              value={model}
            />
            <div className="cut"></div>
            <label for="lastname" className="placeholder">
              Model
            </label>
          </div>
          <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " onChange={vehicleClassHandler}
              value={vehicleClass}/>
            <div className="cut cut-xxl"></div>
            <label for="email" className="placeholder">
              Vehicle Class
            </label>
          </div>
          <div className="input-container ic2">
            <input id="usage" className="input" type="text" placeholder=" " onChange={engineSizeHandler}
              value={engineSize}/>
            <div className="cut cut-xxl"></div>
            <label for="usage" className="placeholder">
              Engine Size
            </label>
          </div>
          <div className="input-container ic2">
            <input id="usage" className="input" type="text" placeholder=" " onChange={cylindersHandler}
              value={cylinders}/>
            <div className="cut cut-long"></div>
            <label for="usage" className="placeholder">
              Cylinders
            </label>
          </div>
          <div className="input-container ic2">
            <input id="usage" className="input" type="text" placeholder=" " onChange={fuelConsumptionCityHandler}
              value={fuelConsumptionCity}/>
            <div className="cut cut-xxl"></div>
            <label for="usage" className="placeholder">
              Fuel Consumption City
            </label>
          </div>
          <div className="input-container ic2">
            <input id="usage" className="input" type="text" placeholder=" " onChange={fuelConsumptionHwyHandler}
              value={fuelConsumptionHwy}/>
            <div className="cut cut-xxl"></div>
            <label for="usage" className="placeholder">
              Fuel Consumption Hwy
            </label>
          </div>
          <div className="input-container ic2">
            <input id="usage" className="input" type="text" placeholder=" " onChange={fuelConsumptionCombHandler}
              value={fuelConsumptionComb}/>
            <div className="cut cut-xxl"></div>
            <label for="usage" className="placeholder">
              Fuel Consumption Comb
            </label>
          </div>
          {/* <div className="input-container ic2">
            <input id="usage" className="input" type="text" placeholder=" " onChange={co2EmissionHandler}
              value={co2Emission}/>
            <div className="cut cut-xl"></div>
            <label for="usage" className="placeholder">
              CO2 Emissions
            </label>
          </div> */}
          <button type="text" className="submit" onClick={carFormSubmitHandler}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

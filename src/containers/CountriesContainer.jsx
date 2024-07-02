import { useEffect,useState } from "react";
import Countries from "./components/Countries";

const CountriesContainer = () => {

    // const [buttonColour,setButtonColour] = useState("white")
    const [countryData,setCountryData] = useState(null);

    const [fullCountryList,setFullCountryList] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const fetchCountries = async () => {
        const reponse = await fetch("https://restcountries.com/v3.1/all");
        const data = await reponse.json();
        setCountryData(data);
    } 

    const visitButtonClick = (event) => {
        //how to manage this with react state?
        if(event.target.style.backgroundColor == "green"){
            event.target.style.backgroundColor = "black";

        }
        else{
        event.target.style.backgroundColor = "green";
        }
    };

    const countryInfo = () => {
        const fullCountryList = [];
      
        for(let i=0;i<countryData.length;i++){
           let country =  <li>
            <h3>
                {countryData[i].name.common}
            </h3>
            <p>
                {`population: ${countryData[i].population}`}
            </p>
            <p>
                {`flag of ${countryData[i].name.common}: ${countryData[i].flag}`}
            </p>
            <p>
                {`capital of ${countryData[i].name.common}: ${countryData[i].capital}`}
            </p>
            <button onClick={visitButtonClick} style = {{backgroundColor : "black"}}>Visited</button>
           </li>;
            // setFullCountryList([country,...fullCountryList]);
            fullCountryList.push(country);
        };
        return fullCountryList;
        };
        
    

    const visitedCountryInfo = () => {

        // for(place of fullCountryList){
        //     if(button.backgroundColor == "green"){
        //         setVisitedCountries([place, ...visitedCountries])
        //     }
        // };
        // return visitedCountries;

    }

  

    useEffect(
        () => {fetchCountries()},[]
    );


    return (
        <>
        <h1>Here are some countries</h1>
        {countryData ? <Countries countryData = {countryData} countryInfo = {countryInfo} visitedCountryInfo ={ visitedCountryInfo} fullCountryList= {fullCountryList}></Countries> : <p>Loading data.....</p>}
        
        
        
        
        
        </>






    )
};








export default CountriesContainer;
const Countries = ({countryInfo,visitedCountryInfo,fullCountryList}) => {

    



    return(
        <>
        {/* <div>
        <ul> {countryInfo()} </ul>
        </div>

        <div>
            <h3>Visited Countries</h3>
            <ul>{visitedCountryInfo()}</ul>
        </div> */}

        <div>
            <ul>{countryInfo()}</ul>
        </div>
        
        </>
    )

}




export default Countries;
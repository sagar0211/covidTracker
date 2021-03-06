import React from "react"
import axios from "axios"
import Summary from "./Summary"
import Countries from "./Countries"

class Details extends React.Component {

    state = {
        countries: [],
        global: [],
        currentDate: null,
        loading: true,

    }
    async componentDidMount() {
        const res = await axios.get("https://api.covid19api.com/summary");
        this.setState(
            {
                countries: res.data.Countries,
                global: res.data.Global,
                currentDate: res.data.Date,
                loading: false,
            }
        )
    }
    render() {
        if (this.state.loading) {
            return <h1>Loading.....</h1>

        }
        return (

            <div>
                <Summary summary={this.state.global} currentDate={this.state.currentDate} />

                <form className="form">
                    <br />

                    <input 
                        className="input"
                        type= "text" />
                    <br/>

                    <button
                        className="button"
                        type="submit">
                    Search
                    </button>
                    <br />
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Country Name</th>
                            <th>Today's Confirmed Cases</th>
                            <th>Total Confirmed Cases</th>
                            <th>Today's Death Count</th>
                            <th>Total Death Count</th>
                            <th>Today's Recovered Cases</th>
                            <th>Total Recovered Cases</th>
                        </tr>
                    </thead>

                    <tbody>

                        {this.state.countries.map(country => (
                            <Countries countries={country} key={country.Country} />
                        ))}


                    </tbody>

                </table>

            </div>


        )

    }
}

export default Details; 
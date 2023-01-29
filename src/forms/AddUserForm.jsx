import React, {useState, useEffect} from 'react';
import Select from "react-select";

import { Country, State, City }  from 'country-state-city';
console.log(Country.getAllCountries())
console.log(State.getAllStates())
console.log(City.getAllCities())

const AddUserForm = (props) => {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const [profilepic, setProfilePic] = useState(null);

    useEffect(() => {
        console.log(selectedCountry);
        console.log(selectedCountry?.isoCode);
        console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
      }, [selectedCountry]);


      const initUser = {
        id: null, 
        name: '', 
        username: '',
        dob: '',
        gender: '',
        profilepic: '',
        country: '',
        city: '',
        url: '',
        bio: ''
      };
      

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Username</label>
            <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />

            <label>Profile Picture</label>

            <input type="file" onChange={e => setProfilePic(e.target.files[0])} />


            <label>Country</label>
            <span className="note">*This field can only be changed by contacting platform admins.</span>
            <div className="App">
      <Select
        options={Country.getAllCountries()}
        getOptionLabel={(options) => {
          return options["name"];
        }}
        getOptionValue={(options) => {
          return options["name"];
        }}
        value={selectedCountry}
        onChange={(item) => {
          setSelectedCountry(item);
          handleChange({target: {name: "country", value: item.name}});
        }}
      />
      <label>State</label>
      <Select
        options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
        getOptionLabel={(options) => {
          return options["name"];
        }}
        getOptionValue={(options) => {
          return options["name"];
        }}
        value={selectedState}
        onChange={(item) => {
          setSelectedState(item);
          handleChange({target: {name: "state", value: item.name}});
        }}
      />
      <label>City</label>
      <Select
        options={City.getCitiesOfState(
          selectedState?.countryCode,
          selectedState?.isoCode
        )}
        getOptionLabel={(options) => {
          return options["name"];
        }}
        getOptionValue={(options) => {
          return options["name"];
        }}
        value={selectedCity}
        onChange={(item) => {
          setSelectedCity(item);
          handleChange({target: {name: "city", value: item.name}});
        }}
      />
    </div>
          





    <label>Gender</label>
    <span className="note">*This field can only be changed by contacting platform admins.</span><br></br>
<select name="gender" value={user.gender} onChange={handleChange}>
  <option value="">Select gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select> 

            <label>Date of birth</label>
            <input type="date" name="dob" value={user.dob} onChange={handleChange} />

            <label>What is your SEAKers Hub URL?</label>
            <input className="u-full-width" type="text" value={user.url} name="url" onChange={handleChange} />
            <label>Bio</label>
            <input className="u-full-width" type="text" value={user.bio} name="bio" onChange={handleChange} />


            <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
        </form>
    )
}

export default AddUserForm;
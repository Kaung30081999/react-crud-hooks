import React, {useState, useEffect} from 'react';
import Select from "react-select";
import axios from 'axios'
import { Country, State, City }  from 'country-state-city';
console.log(Country.getAllCountries())
console.log(State.getAllStates())
console.log(City.getAllCities())





const EditUserForm = (props) => {

    


    
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [profilepic, setProfilePic] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);



    useEffect(() => {
        console.log(selectedCountry);
        console.log(selectedCountry?.isoCode);
        console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
      }, [selectedCountry]);



    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

  //  const handleChange = e => {
    //    const {name, value} = e.target;
    //    setUser({...user, [name]: value});
      //  console.log('testttt');
      //  console.log("user.gender:", user.gender);
      //  console.log("user.dob:", user.dob);
      //passing the state user object as a parameter to the function but when you update the state you are trying to update the same state object, which is not allowed.You should call the setUser function inside the handleChange function and pass the new object, instead of updating the state object directly.
  //      } // 

        const handleChange = e => {
            const {name, value} = e.target;
            setUser(prevState =>({
                ...prevState,
                [name]:value
            }));
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    }

    return (
        <form>
            
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Username</label>
            <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />
            <label>Profile Picture</label>
            
            
           


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
    <span className="note">*This field can only be changed by contacting platform admins.</span>
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


            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;
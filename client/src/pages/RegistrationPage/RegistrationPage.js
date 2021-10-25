import React, { useState } from 'react';
import styles from './RegistrationPage.module.css';
import axios from 'axios';

function RegistrationPage() {

    const [input, setInput] = useState({
    fullname: '',
    emailAddress: '',
    cityLocation: '',
    gender: '',
    skintype: [''],
    concerns: ['']
  })
  
  function handleChange(event) {

    const {name, value} = event.target;

    setInput(prev => {
      return {
      ...prev, [name] : value
      }
    })
  }

  function handleClick(event) {
    event.preventDefault();
    const newProfile = {
      fullname: input.fullname,
      emailAddress: input.emailAddress,
      cityLocation: input.cityLocation,
      gender: input.gender,
      skintype: 
      [input.skintype.dry, 
       input.skintype.normal,
       input.skintype.combination,
       input.skintype.sensitive
      ],
      concerns: 
      [input.concerns.acne,
       input.concerns.dryness,
       input.concerns.oilyness,
       input.concerns.blemishes,
       input.concerns["dark spots"],
       input.concerns.pores,
       input.concerns["red lines"],
       input.concerns["fine lines"],
       input.concerns.none
      ]
    }    
    axios.post('http://localhost:8080/', newProfile)
  }

  return (
        
      <div>
          <form className={styles.RegistrationFormSection}>
                
            <label htmlFor="name">
              Name
              <input onChange={handleChange} type="text" id="name" name="fullname" placeholder="Your full name here" pattern="[A-Za-z]+" autoComplete="off" value={input.fullname} required />
            </label>

            <label htmlFor="email">
              Email
              <input onChange={handleChange} type="email" id="email" name="emailAddress" placeholder="sidney@bosmail.com" autoComplete="off" value={input.emailAddress} required />
            </label>

            <label htmlFor="password">
              Password
              <input type="password" id="password" name="password" placeholder="Password (min 8 characters)" minLength="8" autoComplete="off" required pattern="[A-Za-z0-9!#$%]+"/>
            </label>

            <label htmlFor="confirmPassword">
              Confirm Password
              <input type="password" id="confirmPassword" name="confirm" autoComplete="off" placeholder="Confirm Password" required />
            </label>

            <label htmlFor="cityLocation">
              City Location
              <input onChange={handleChange} id="cityLocation" name="cityLocation" placeholder="i.e. Vancouver" pattern="[A-Za-z]+" autoComplete="off" value={input.cityLocation} required />
            </label>

            <datalist onChange={handleChange} name="gender" value={input.gender}>
              <legend>Gender</legend>
              <option defaultValue="male" />
              <option value="female" />
              <option value="binary" />
              <option value="other" />
            </datalist>
            
            <fieldset>
              <legend>What is your skin type?</legend>
              
              <label>Dry
                <input onChange={handleChange} type="checkbox" value={input.skintype.dry} name="skintype" />
              </label>
              <label>Normal
                <input onChange={handleChange} type="checkbox" value={input.skintype.normal} name="skintype" />
              </label>
                <label>Oily
              <input onChange={handleChange} type="checkbox" value={input.skintype.oily} name="skintype" />
                </label>
              <label>Combination
                <input onChange={handleChange} type="checkbox" value={input.skintype.combination} name="skintype" />
              </label>
              <label>Sensitive
                <input onChange={handleChange} type="checkbox" value={input.skintype.sensitive} name="skintype" />
              </label>

            </fieldset>

            <fieldset>
              <legend>What are your concerns?</legend>
              <label>
                Acne
                <input onChange={handleChange} type="checkbox" value={input.skintype.acne} name="concerns" />
              </label>
              <label>
                Dryness
                <input onChange={handleChange} type="checkbox" value={input.skintype.dryness} name="concerns" />
              </label>
              <label>
                Oilyness
                <input onChange={handleChange} type="checkbox" value={input.skintype.oilyness} name="concerns" />
              </label>
              <label>
                Blemishes
                <input onChange={handleChange} type="checkbox" value={input.skintype.blemishes} name="concerns" />
              </label>
              <label>
                Dark Spots
                <input onChange={handleChange} type="checkbox" value={input.skintype["dark spots"]} name="concerns" />
              </label>
              <label>
                Pores
                <input onChange={handleChange} type="checkbox" value={input.skintype.pores} name="concerns" />
              </label>
              <label>
                Red Lines
              <input onChange={handleChange} type="checkbox" value={input.skintype["red lines"]} name="concerns" />
              </label>
              <label>
                Fine Lines
              <input onChange={handleChange} type="checkbox" value={input.skintype["fine lines"]} name="concerns" />
              </label>
            </fieldset>

              <button onClick={handleClick} type="submit" name="register" id="submit">Register</button>
              
              <button type="reset">Reset fields</button>
          </form>
      
      </div>
          
    )
}
  
export default RegistrationPage;
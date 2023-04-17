
import React, { useEffect, useState } from 'react'

import Api from '../Api/Api'
import { Button, Container, Form } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function Statedropdown() {
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [selectState, setselectState] = useState('')
  const [selectCity, setselectCity] = useState('')

 
  let getdata = ()=>{ 
   
    Api.fetchData('state').then(result=>
       {
        // setdata([...result])
        setStates(result)
        console.log(result)
       }
    
    )}

    let handleStateChange = (event) => {
      let stateName = event.target.value
      setselectState(event.target.value)
      let selectedState = states.find(state => state.name === stateName)
      setCities(selectedState.cities)
    }
  // let getcity = (id)=>{ 
  
  //   Api.fetchData('city',id).then(result=>
  //      {

  //       let temp = state.filter((item) => item.id === id)
       
  //       console.log(temp)
  //      }
    
  //   )}

    // const handlestate=(e)=>{
    //   const getstateId= e.target.value;
    //   const getCitydata= state.find(state=>state.id===getstateId).city;
    //   setcity(getCitydata);
    //   setstateid(getstateId);
    // //console.log(getcountryId);
    // }

    const handleCityChange = (e)=>{
      
      setselectCity(e.target.value);
  
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
    
      Swal.fire({
        title: "State:"+" "+ selectState + "<br>" + "City:"+" " + selectCity,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      // alert("State :"+ selectState + "," + "City :" + selectCity);
      }


    useEffect(() => {
      getdata()
      // getcity()
    }, [])
  return (
    <>
    {/* <select>
      {state.map((item) => (
        <option key={item.id} value={state.title}>{state.title}</option>
      ))}
    </select> */}
     
      {/* <Form.Group className="mb-3 container">
        <Form.Label>Select State</Form.Label>
        <Form.Select onClick={show}>
       {state.map((item) => (
          <option  placeholder='--Select State--'>{item.title}</option>
          ))}
        </Form.Select>
      </Form.Group>
       */}

<Container className=" align-items-center border border-success p-2 mb-2 border-2">
     <div className="row ">
       <div className="col-sm-12">
         {/* <h5 className="mt-4 mb-4 fw-bold">Output  { }</h5> */}
           
             <div className="row mb-3">
                 {/* <div className="form-group col-md-4">
                 <label className="mb-2">Country</label>
                 <select name="country" className="form-control" >
                 <select name="country" className="form-control" onChange={(e)=>handlecountry(e)}>
                   <option>--Select Country--</option>
                   {
                     country.map( (getcon)=>(
                   <option key={getcon.country_id} value={getcon.country_id }> { getcon.country_name}</option>
                     ))
                }
                 
                 </select>
               </div> */}
               <div className="form-group col-md-4">
               <label className="mb-2">State</label>
               <select name="state" className="form-control" onChange={handleStateChange}>
                   <option>--Select State--</option>
                   {
                     states.map( (state)=>(                    
                   <option key={state.name} value={state.name}>{state.name}</option>
                     ))
                     }
                 </select>
               </div>
               <div className="form-group col-md-4">
               <label className="mb-2">City</label>
               <select name="state" className="form-control" onChange={handleCityChange}>
                   <option>--Select City--</option>
                  
                   {
                     cities.map( (city)=>(                    
                   <option value={city} key={city}>{city}</option>
                     ))
                     }


                 </select>
               </div>

               <div className="form-group col-md-2 mt-4">              
               <button className="btn btn-success mt-2" onClick={handleSubmit}>Submit</button>               
               {/* <button className="btn btn-success mt-2" >Submit</button>                */}
               </div>
            </div>
               
       </div>
     </div>
    </Container>
        
    </>
  )
}

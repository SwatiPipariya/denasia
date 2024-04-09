import React, { useState, useEffect } from 'react';
import "./Register.css";
// import axios from 'axios';
import KanhaJiVideo from "./assest/KanhaJi.mp4"; // Replace with the actual video file path
import Thankyou from "./assest/aqwe.gif"
import Header from "./assest/header.png"
import TabVDO from "./assest/Tab/TabOpen.mp4"

const Register = () => {
  // const [opdCount, setOpdCount] = useState(1);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   age: '',
  //   contact: '',
  //   dob: '',
  //   anniversary: '',
  //   email: '',
  //   gender: '',
  //   status: '',
  //   address: '',
  //   mobile: '',
  //   source: '',
  // });

  // useEffect(() => {
  //   getRowCount();
  // }, []);

  // const getRowCount = () => {
  //   axios.get('http://localhost:6060/patients/count')
  //     .then(response => {
  //       console.log('Row count:', response.data.rowCount);
  //       const count = response.data.rowCount + 1;
  //       setOpdCount(count);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching row count:', error);
  //     });
  // }

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // }

  // const submitFormData = () => {
  //   const data = {
  //     ...formData,
  //     opd: `OPD${opdCount}`,
  //     todayDate: new Date().toISOString().split('T')[0],
  //     todayTime: new Date().toTimeString().split(' ')[0],
  //   };

  //   axios.post('http://localhost:6060/patients', data)
  //     .then(response => {
  //       console.log('Form submitted successfully:', response.data);
  //       // Add any success message or redirection logic here
  //       // Reload page after 5 seconds
  //       setTimeout(() => {
  //         window.location.reload();
  //       }, 5000);
  //     })
  //     .catch(error => {
  //       console.error('Error submitting form:', error);
  //       // Add any error handling logic here
  //     });
  // }
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Function to handle when the KanhaJi video finishes playing
  const handleVideoEnd = () => {
    setVideoPlayed(true);
  };

  useEffect(() => {
    // Update showForm state after the video has played completely
    if (videoPlayed) {
      setShowForm(true);
    }
  }, [videoPlayed]); // Only re-run the effect if videoPlayed changes

  return (
    <div>
      {!showForm && (
        <div id="gifContainer">
          {/* KanhaJi video with an onEnded event handler to detect when the video has finished playing */}
          <video 
            src={KanhaJiVideo} 
            id="gif" 
            width="100%" 
            alt='KanhaJi_vedio' 
            autoPlay 
            muted
            onEnded={handleVideoEnd} 
            className="video-mobile" 

          />
          <video 
            src={TabVDO} 
            id="gif" 
            width="100%" 
            alt='KanhaJi_vedio'
            className="video-tab" 
            autoPlay 
            muted
            onEnded={handleVideoEnd} 
          />
        </div>
        
      )}
      {/* Conditionally render the form based on the state */}
      {showForm && (
         <div id="maincontainer" >
                  <div className="header">
                    <img src={Header} width="100%" alt="header" />
                  </div>
                  <div id="formContainer" className="ghi12">
                    <div className="hdjcgjsd">
                      <div className="datetime">
                        <p id="todayDate" name="todayDate"></p>
                        <p id="todayTime" name="todayTime"></p>
                      </div>
                      <div className="dhdjoeud">
                        <p className="dfbjc">DOCTOR APPOINTMENT REQUEST FORM</p>
                        <p className="dc">Fill the form below and we will get back soon to you for more</p>
                        <p className="dc">updates and plan your appointment.</p>
                      </div>
                      <p className="hbdd" id="OPD"></p>
                      <label htmlFor="name" className='sasss'>Name:</label>
                      <input className="ysgxy" type="text" id="name" name="name" required />
                     {/* <input className="ysgxy" type="text" id="name" name="name" required onChange={handleInputChange} /> */}


                      <label htmlFor="age" className='sasss'>Age:</label>
                      <input className="ysgxy" type="number" id="age" name="age" required />
         
                      <label htmlFor="contact" className='sasss'>Contact No.:</label>
                      <input className="ysgxy" type="text" id="contact" name="contact" required />
         
                      <label htmlFor="dob" className='sasss'>DOB:</label>
                      <input className="ysgxy" type="date" id="dob" name="dob" required />
         
                      <label htmlFor="anniversary" className='sasss'>Anniversary:</label>
                      <input className="ysgxy" type="date" id="anniversary" name="anniversary" required />
         
                      <label htmlFor="email" className='sasss'>Email:</label>
                      <input className="ysgxy" type="email" id="email" name="email" required />
         
                      <label htmlFor="gender" className='sasss'>Gender:</label>
                      <select className="ysgxy" id="gender" name="gender" required>
                       <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
         
                      <label htmlFor="status" className='sasss'>Marital Status:</label>
                      <select className="ysgxy" id="status" name="status" required>
                        <option value="">Select Status</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                       <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                      </select>
         
                      <label htmlFor="address" className='sasss'>Address:</label>
                      <input className="ysgxy" type="text" id="address" name="address" required />
         
                      <label htmlFor="mobile" className='sasss'>Mobile No.:</label>
                      <input className="ysgxy" type="text" id="mobile" name="mobile" required />
         
                      <label htmlFor="source" className='sasss'>Source:</label>
                      <input className="ysgxy" type="text" id="source" name="source" required />
         
                      <div className="jkdnc">
                        <button className="euhyc" id="submitBtn">Submit</button>
                         {/* <button className="euhyc" id="submitBtn" onClick={submitFormData}>Submit</button> */}

                      </div>
                    </div>
                  </div>
                 <div className="nanananana"></div>
              </div>
      )}
      <div id="gifContainer">
        <img src={Thankyou} id="gif2" width="100%" style={{ display: 'none' }} alt='Thankyou' />
      </div>
    </div>
  );
}

export default Register;



















































// import React
//   // {useState, useEffect } 

//   from 'react';
// // import axios from 'axios';
// import "./Register.css";
// import KanhaJi from "./assest/KanhaJi.gif";
// import Thankyou from "./assest/aqwe.gif"
// import Header from "./assest/header.png"

// const Register = () => {
//   // const [opdCount, setOpdCount] = useState(1);
//   // const [formData, setFormData] = useState({
//   //   name: '',
//   //   age: '',
//   //   contact: '',
//   //   dob: '',
//   //   anniversary: '',
//   //   email: '',
//   //   gender: '',
//   //   status: '',
//   //   address: '',
//   //   mobile: '',
//   //   source: '',
//   // });

//   // useEffect(() => {
//   //   getRowCount();
//   // }, []);

//   // const getRowCount = () => {
//   //   axios.get('http://localhost:6060/patients/count')
//   //     .then(response => {
//   //       console.log('Row count:', response.data.rowCount);
//   //       const count = response.data.rowCount + 1;
//   //       setOpdCount(count);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error fetching row count:', error);
//   //     });
//   // }

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData(prevState => ({
//   //     ...prevState,
//   //     [name]: value
//   //   }));
//   // }

//   // const submitFormData = () => {
//   //   const data = {
//   //     ...formData,
//   //     opd: `OPD${opdCount}`,
//   //     todayDate: new Date().toISOString().split('T')[0],
//   //     todayTime: new Date().toTimeString().split(' ')[0],
//   //   };

//   //   axios.post('http://localhost:6060/patients', data)
//   //     .then(response => {
//   //       console.log('Form submitted successfully:', response.data);
//   //       // Add any success message or redirection logic here
//   //       // Reload page after 5 seconds
//   //       setTimeout(() => {
//   //         window.location.reload();
//   //       }, 5000);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error submitting form:', error);
//   //       // Add any error handling logic here
//   //     });
//   // }

//   return (
//     <div>
//       <div id="gifContainer">
//         <img src={KanhaJi} id="gif" width="100%" alt='KanhaJi_vedio' />
//       </div>
//       <div id="maincontainer" >
//         <div className="header">
//           <img src={Header} width="100%" alt="header" />
//         </div>
//         <div id="formContainer" className="ghi12">
//           <div className="hdjcgjsd">
//             <div className="datetime">
//               <p id="todayDate" name="todayDate"></p>
//               <p id="todayTime" name="todayTime"></p>
//             </div>
//             <div className="dhdjoeud">
//               <p className="dfbjc">DOCTOR APPOINTMENT REQUEST FORM</p>
//               <p className="dc">Fill the form below and we will get back soon to you for more</p>
//               <p className="dc">updates and plan your appointment.</p>
//             </div>
//             <p className="hbdd" id="OPD"></p>
//             <label htmlFor="name">Name:</label>
//             <input className="ysgxy" type="text" id="name" name="name" required />
//             {/* <input className="ysgxy" type="text" id="name" name="name" required onChange={handleInputChange} /> */}

//             <label htmlFor="age">Age:</label>
//             <input className="ysgxy" type="number" id="age" name="age" required />

//             <label htmlFor="contact">Contact No.:</label>
//             <input className="ysgxy" type="text" id="contact" name="contact" required />

//             <label htmlFor="dob">DOB:</label>
//             <input className="ysgxy" type="date" id="dob" name="dob" required />

//             <label htmlFor="anniversary">Anniversary:</label>
//             <input className="ysgxy" type="date" id="anniversary" name="anniversary" required />

//             <label htmlFor="email">Email:</label>
//             <input className="ysgxy" type="email" id="email" name="email" required />

//             <label htmlFor="gender">Gender:</label>
//             <select className="ysgxy" id="gender" name="gender" required>
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>

//             <label htmlFor="status">Marital Status:</label>
//             <select className="ysgxy" id="status" name="status" required>
//               <option value="">Select Status</option>
//               <option value="single">Single</option>
//               <option value="married">Married</option>
//               <option value="divorced">Divorced</option>
//               <option value="widowed">Widowed</option>
//             </select>

//             <label htmlFor="address">Address:</label>
//             <input className="ysgxy" type="text" id="address" name="address" required />

//             <label htmlFor="mobile">Mobile No.:</label>
//             <input className="ysgxy" type="text" id="mobile" name="mobile" required />

//             <label htmlFor="source">Source:</label>
//             <input className="ysgxy" type="text" id="source" name="source" required />

//             <div className="jkdnc">
//               <button className="euhyc" id="submitBtn">Submit</button>
//               {/* <button className="euhyc" id="submitBtn" onClick={submitFormData}>Submit</button> */}
//             </div>
//           </div>
//         </div>
//         <div className="nanananana"></div>
//       </div>
//       <div id="gifContainer">
//         <img src={Thankyou} id="gif2" width="100%" style={{ display: 'none' }} alt='Thankyou' />
//       </div>
//     </div>
//   );
// }

// export default Register;

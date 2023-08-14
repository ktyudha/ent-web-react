import React, { useState, useEffect } from 'react';
import backgroundImage from './pattern3.png';
import logoImage from './logoent.png';
import logoImage2 from './logoent2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faEnvelope, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faSolidEnvelope } from '@fortawesome/free-solid-svg-icons';


const ResponsiveFormWithNavbar = () => {
  const requiredFields = ['name', 'placeOfBirth', 'dateOfBirth', 'boardingAddress', 'homeAddress','nrp', 'email', 'phone', 'description', 'motto', 'interest', 'reason'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenderOption, setSelectedGenderOption] = useState('--Option--');
  const [selectedReligionOption, setSelectedReligionOption] = useState('--Option--');
  const [EducationalLevelOption, setEducationalLevelOption] = useState('--Option--');
  const [StudyProgramOption, setStudyProgramOption] = useState('--Option--');
  const [mbtiOption, setMbtiOption] = useState('--Option--');
  const [divisionOption, setDivisionOption] = useState('--Option--');


  const [currentSection, setCurrentSection] = useState('personal'); // 'personal', 'experience', 'achievement'

  const [name, setName] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [boardingAddress, setBoardingAddress] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [nrp, setNrp] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [motto, setMotto] = useState('');
  const [interest, setInterest] = useState('');
  const [reason, setReason] = useState('');
  const [linkDrive, setLinkDrive] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  // State for experience
  const [experienceFields, setExperienceFields] = useState([{ startDate: '', endDate: '', organization: '', position: '' }]);

  const addExperienceField = () => {
    setExperienceFields([...experienceFields, { startDate: '', endDate: '', organization: '', position: '' }]);
  };

  const removeExperienceField = (index) => {
    const values = [...experienceFields];
    values.splice(index, 1);
    setExperienceFields(values);
  };

  const [achievementFields, setAchievementFields] = useState([{ date: '', title: '', level: '', achievement: '', drive: '' }]);

  const addAchievementField = () => {
    setAchievementFields([...achievementFields, { date: '', title: '', level: '', achievement: '' }]);
  };

  const removeAchievementField = (index) => {
    const values = [...achievementFields];
    values.splice(index, 1);
    setAchievementFields(values);
  };


  // Use local storage to save and load form data
  useEffect(() => {
    const storedData = localStorage.getItem('form_data');
  
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setExperienceFields(parsedData.experienceFields);
      setAchievementFields(parsedData.achievementFields);
      setCurrentSection(parsedData.currentSection);
      // Remove the following line since personalData is not used anymore
      // setPersonalData(parsedData.personalData);
    }
  }, []);
  
  useEffect(() => {
    const formData = {
      experienceFields,
      achievementFields,
      currentSection,
      // Remove the following line since personalData is not used anymore
      // personalData,
      // Add other state variables here
    };
  
    localStorage.setItem('form_data', JSON.stringify(formData));
  }, [experienceFields, achievementFields, currentSection]);
  
  useEffect(() => {
    if (currentSection === 'personal') {
      // Update input fields for the personal section with values from state
      const nameField = document.getElementById('name');
      const placeOfBirthField = document.getElementById('placeOfBirth');
      const dateOfBirthField = document.getElementById('dateOfBirth');
      const boardingAddressField = document.getElementById('boardingAddress');
      const homeAddressField = document.getElementById('homeAddress');
      const nrpField = document.getElementById('nrp');
      const emailField = document.getElementById('email');
      const phoneField = document.getElementById('phone');
      const descriptionField = document.getElementById('description');
      const mottoField = document.getElementById('motto');
      const interestField = document.getElementById('interest');
      const reasonField = document.getElementById('reason');
      // ... and other fields
  
      if (nameField) nameField.value = name; 
      if (placeOfBirthField) placeOfBirthField.value = placeOfBirth; 
      if (dateOfBirthField) dateOfBirthField.value = dateOfBirth;
      if (boardingAddressField) boardingAddressField.value = boardingAddress;
      if (homeAddressField) homeAddressField.value = homeAddress;
      if (nrpField) nrpField.value = nrp;
      if (emailField) emailField.value = email;
      if (phoneField) phoneField.value = phone;
      if (descriptionField) descriptionField.value = description;
      if (mottoField) mottoField.value = motto;
      if (interestField) interestField.value = interest;
      if (reasonField) reasonField.value = reason;

      // ... update other fields as needed
    } else if (currentSection === 'experience') {

      // Update input fields for the experience section with values from experienceFields
      // ... update input fields for experience section
    } else if (currentSection === 'achievement') {
      // Update input fields for the achievement section with values from achievementFields
      // ... update input fields for achievement section
    }
  }, [currentSection, name, placeOfBirth, dateOfBirth, boardingAddress, homeAddress, nrp, email, phone, description, motto, interest, reason, experienceFields, achievementFields]);
  

  const validateForm = () => {
    for (const fieldId of requiredFields) {
      const fieldElement = document.getElementById(fieldId);
      if (!fieldElement.value) {
        alert(`Please fill in the ${fieldElement.placeholder}.`);
        fieldElement.focus();
        return false;
      }
    }
    return true;
  }


  return (
    <div >
      {/* Navbar */}
  <nav className="bg-slate-50 p-4 border fixed top-0 w-full z-10">
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <div className="text-sky-900 font-bold text-lg">
        <img src={logoImage} alt="Logo-1" border="0" width='60px' />
      </div>
    </div>
    {/* Desktop menu */}
    <div className="hidden md:block">
      <ul className=" flex space-x-4">
        <li className=' py-1'>
          <a
            href="https://ent.pens.ac.id"
            className="block py-2 px-4 text-sky-900 font-bold "
          >
            Home
          </a>
        </li>
        <li className='py-1'>
          <a
            href="https://ent.pens.ac.id/#about-us"
            className="block py-2 px-4 text-sky-900 font-bold"
          >
            About
          </a>
        </li>
        <li className='py-1'>
          <a
            href="#"
            className="block py-2 px-4 text-sky-900 font-bold"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white border rounded bg-sky-900 focus:outline-none hover:bg-teal-500"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
            />
          )}
        </svg>
      </button>
    </div>
  </div>


  {/* Mobile menu */}
  {isOpen && (
    <div className="mt-4 md:hidden ">
      <ul className="bg-white">
        <li className='bg-sky-900 rounded mb-1'>
          <a
            href="https://ent.pens.ac.id"
            className="block py-2 px-4 text-white font-bold text-center hover:bg-teal-500"
          >
            Home
          </a>
        </li>
        
        <li className='bg-sky-900 rounded mb-1'>
          <a
            href="https://ent.pens.ac.id/#about-us"
            className="block py-2 px-4 text-white font-bold text-center hover:bg-teal-500"
          >
            About
          </a>
        </li>
        <li className='bg-sky-900 rounded mb-1'>
          <a
            href="#"
            className="block py-2 px-4 text-white font-bold text-center hover:bg-teal-500"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  )}
</nav>

      {/* Form */}
      <div className="p-4 pt-20 md:p-8 md:pt-24 lg:pt-28 lg:p-16 bg-sky-900 text-white" 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
      }}>
        <form className="max-w-md md:max-w-lg mx-auto bg-sky-900 text-white shadow-md rounded px-8 pt-6 pb-8" >
          {/* Personal Information section */}
          {currentSection === 'personal' && (
            <div>
              <h2 className="text-lg font-bold mb-4 text-center"> FORM PERSONAL</h2>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input autoComplete='off'
                className="text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name..."
              />
            </div>

            <div className="mb-4 flex flex-wrap justify-between">
              <div className='w-1/2'>
                <label className="block text-sm font-bold mb-2" htmlFor="placeOfBirth">
                  Place of Birth
                </label>
                <input autoComplete='off'
                  className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="placeOfBirth"
                  value={placeOfBirth}
                  onChange={(e) => setPlaceOfBirth(e.target.value)}
                  type="text"
                  placeholder="Enter your place of birth..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="dateOfBirth">
                  Date of Birth
                </label>
                <input
                  className="shadow appearance-none border rounded text-gray-400 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="dateOfBirth"
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  placeholder="Enter your date of birth..."
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                className="block appearance-none w-full text-gray-400 bg-white border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="gender"
                value={selectedGenderOption}
                onChange={(e) => setSelectedGenderOption(e.target.value)}
              >
                <option>--Option--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="boardingAddress">
                Boarding Address
              </label>
              <textarea autoComplete='off'
                className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="boardingAddress"
                value={boardingAddress}
                onChange={(e) => setBoardingAddress(e.target.value)}
                rows="3"
                placeholder="Enter your boarding address..."
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="homeAddress">
                Home Address
              </label>
              <textarea autoComplete='off'
                className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="homeAddress"
                value={homeAddress}
                onChange={(e) => setHomeAddress(e.target.value)}
                rows="3"
                placeholder="Enter your home address..."
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="religion">
                Religion
              </label>
              <select
                className="block appearance-none w-full text-gray-400 bg-white border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="religion"
                value={selectedReligionOption}
                onChange={(e) => setSelectedReligionOption(e.target.value)}
                placeholder='Enter your religion...'
              >
                <option>--Option--</option>
                <option value="Islam">Islam</option>
                <option value="Protestant">Protestant</option>
                <option value="Catholic">Catholic</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddha">Buddha</option>
                <option value="Confucius">Confucius</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="nrp">
                NRP
              </label>
              <input autoComplete='off'
                className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="nrp"
                value={nrp}
                onChange={(e) => setNrp(e.target.value)}
                type="number"
                placeholder="Enter your NRP..."
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="educationalLevel">
                Educational Level
              </label>
              <select
                className="block appearance-none w-full bg-white text-gray-400 border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="educationalLevel"
                value={EducationalLevelOption}
                onChange={(e) => setEducationalLevelOption(e.target.value)}
              >
                <option>--Option--</option>
                <option value="D4">APPLIED BACHELOR (D4) </option>
                <option value="D3">3-YEAR DIPLOMA (D3)</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="studyProgram">
                Study Program
              </label>
              <select
                className="block appearance-none w-full text-gray-400 bg-white border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="studyProgram"
                value={StudyProgramOption}
                onChange={(e) => setStudyProgramOption(e.target.value)}
              >
                <option>--Option--</option>

                <option disabled className='font-medium'>Department of Electrical Engineering</option>
                  <option value="D3 Electrical Engineering">D3 Electrical Engineering</option>
                  <option value="D3 Industrial Electrical Engineering">D3 Industrial Electrical Engineering</option>
                  <option value="D3 Telecommunications Engineering">D3 Telecommunications Engineering</option>

                  <option value="D4 Electrical Engineering">D4 Electrical Engineering</option>
                  <option value="D4 Industrial Electrical Engineering">D4 Industrial Electrical Engineering</option>
                  <option value="D4 Telecommunications Engineering">D4 Telecommunications Engineering</option>
                  
                  <option value="D4 Internet Engineering Technology">D4 Internet Engineering Technology</option>


                <option disabled className='font-medium'>Department of Informatics and Computer Engineering</option>
                  <option value="D3 Informatics Engineering">D3 Informatics Engineering</option>
                  <option value="D4 Informatics Engineering">D4 Informatics Engineering</option>
                  <option value="D4 Computer Engineering">D4 Computer Engineering</option>
                  <option value="D4 Applied Data Science">D4 Applied Data Science</option>


                <option disabled className='font-medium'>Department of Energy Mechanics Engineering</option>
                  <option value="D4 Mechatronic Engineering">D4 Mechatronic Engineering</option>
                  <option value="D4 Energy Generation System">D4 Energy Generation System</option>


                <option disabled className='font-medium'>Creative Multimedia Technology Department</option>
                  <option value="D4 Multimedia Broadcasting<">D4 Multimedia Broadcasting</option>
                  <option value="D4 Multimedia Engineering Technology">D4 Multimedia Engineering Technology</option>
                  <option value="D4 Game Technology">D4 Game Technology</option>

              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input autoComplete='off'
                className="shadow text-gray-400 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email..."
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input autoComplete='off'
                className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number..."
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="description">
                Description Your Self
              </label>
              <textarea
                className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your description..."
              />
            </div>
            <div className="mb-4">
              <div className='flex justify-between'>
              <label className="block text-sm font-bold mb-2" htmlFor="mbti">
              MBTI Personality 
              </label>
              <label className="block text-sm font-bold mb-2" htmlFor="mbti">
              Check ur MBTI Personality <a href="https://www.16personalities.com/" target="_blank" className="text-sky-500 hover:text-sky-700">here</a>
              </label>
              </div>
              
              <select
                className="block appearance-none w-full text-gray-400 bg-white border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="mbti"
                value={mbtiOption}
                onChange={(e) => setMbtiOption(e.target.value)}
              >
                <option>--Option--</option>
                <option value="ISTJ">ISTJ</option>
                <option value="ISFJ">ISFJ</option>
                <option value="INFJ">INFJ</option>
                <option value="INTJ">INTJ</option>
                <option value="ISTP">ISTP</option>
                <option value="ISFP">ISFP</option>
                <option value="INFP">INFP</option>
                <option value="INTP">INTP</option>
                <option value="ESTP">ESTP</option>
                <option value="ESFP">ESFP</option>
                <option value="ENFP">ENFP</option>
                <option value="ENTP">ENTP</option>
                <option value="ESTJ">ESTJ</option>
                <option value="ESFJ">ESFJ</option>
                <option value="ENFJ">ENFJ</option>
                <option value="ENTJ">ENTJ</option>
              </select>
            </div>
             <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="motto">
                Motto
              </label>
              <textarea autoComplete='off'
                className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="motto"
                rows="3"
                value={motto}
                onChange={(e) => setMotto(e.target.value)}
                placeholder="Enter your motto..."
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="interest">
                Interest to Join Another Organization or UKM
              </label>
              <textarea autoComplete='off'
                className="shadow appearance-none border rounded text-gray-400 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="interest"
                rows="3"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                placeholder="Enter your interests..."
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="division">
                Division
              </label>
              <select
                className="block appearance-none w-full text-gray-400 bg-white border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="mbti"
                value={divisionOption}
                onChange={(e) => setDivisionOption(e.target.value)}
              >
                <option>--Option--</option>
                <option value="Reporter">Reporter</option>
                <option value="Videographer">Videographer</option>
                <option value="Photographer">Photographer</option>
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="Webmaster">Webmaster</option>
                </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="reason">
                Reason Join ENT
              </label>
              <textarea autoComplete='off'
                className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="reason"
                rows="3"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Enter your reason..."
              />
            </div>


            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  let hasEmptyFields = false;

                  for (const fieldId of requiredFields) {
                    const fieldElement = document.getElementById(fieldId);
                    if (!fieldElement.value) {
                      alert(`Please fill in the ${fieldElement.placeholder}.`);
                      fieldElement.focus();
                      hasEmptyFields = true;
                      break;
                    }
                  }

                  if (hasEmptyFields) {
                    return;
                  }
              
                  if (selectedGenderOption === '--Option--') {
                    alert("Please select a gender option from the dropdown before proceeding.");
                    return;
                  }
              
                  if (selectedReligionOption === '--Option--') {
                    alert("Please select a religion option from the dropdown before proceeding.");
                    return;
                  }

                  if (EducationalLevelOption === '--Option--') {
                    alert("Please select a educational level option from the dropdown before proceeding.");
                    return;
                  }

                  if (StudyProgramOption === '--Option--') {
                    alert("Please select a study program option from the dropdown before proceeding.");
                    return;
                  }

                  if (mbtiOption === '--Option--') {
                    alert("Please select a mbti option from the dropdown before proceeding.");
                    return;
                  }

                  if (divisionOption === '--Option--') {
                    alert("Please select a division option from the dropdown before proceeding.");
                    return;
                  }


                  setCurrentSection('experience');
                }}
                className={`px-4 py-2 rounded-md focus:shadow-outline bg-teal-500 hover:bg-teal-700 text-white`}
              >
                Next
              </button>
              {/* <button
                  onClick={() => setCurrentSection('experience')}
                  className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 focus:shadow-outline"
                >
                  Next
                </button> */}
              </div>
            </div>
          )}




          {/* Experience section */}
          {currentSection === 'experience' && (
            <div>
              {/* Experience section */}
          <div className="mt-6">
            <h2 className="text-lg font-bold text-center mb-4">FORM EXPERIENCE</h2>
            {experienceFields.map((experience, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="experience">
                  [Experience {index + 1}]
                </label>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="experience">
                    Start Month
                  </label>
                  <input
                    type="month" 
                    className="border w-full text-gray-400 rounded px-2 py-1"
                    
                    value={experience.startDate}
                    onChange={(e) => {
                      const updatedFields = [...experienceFields];
                      updatedFields[index].startDate = e.target.value;
                      setExperienceFields(updatedFields);
                    }}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="experience">
                    End Date
                  </label>
                  <input
                    type="month" 
                    className="border w-full text-gray-400 rounded px-2 py-1"
                    value={experience.endDate}
                    onChange={(e) => {
                      const updatedFields = [...experienceFields];
                      updatedFields[index].endDate = e.target.value;
                      setExperienceFields(updatedFields);
                    }}
                  />
                </div>
                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="experience">
                  Organization
                </label>
                  <input
                    type="text"
                    className="border text-gray-400  w-full rounded px-2 py-1"
                    placeholder="Organization"
                    value={experience.organization}
                    onChange={(e) => {
                      const updatedFields = [...experienceFields];
                      updatedFields[index].organization = e.target.value;
                      setExperienceFields(updatedFields);
                    }}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="experience">
                    Position
                  </label>
                  <input
                      type="text"
                      className="border text-gray-400 w-full rounded px-2 py-1"
                      placeholder="Position"
                      value={experience.position}
                      onChange={(e) => {
                        const updatedFields = [...experienceFields];
                        updatedFields[index].position = e.target.value;
                        setExperienceFields(updatedFields);
                      }}
                    />
                </div>
              </div>
            ))}
            {/* selama iki true show lek false hide */}
            {/*haruse lek kurang dari 2 baru hide */}
            {/* 1 > 1 */}
            {experienceFields.length > 1 ? (
              <button
                type="button"
                onClick={removeExperienceField}
                className="bg-rose-500 text-white font-bold py-2 px-4 rounded hover:bg-rose-700 focus:outline-none focus:shadow-outline"
              >
                Remove
              </button>
            ) : null}


            {/* selama iki true show lek false hide */}
            {/*haruse lek lebih dari 3 baru hide */}
            {experienceFields.length <= 2 ? (
              <button
                type="button"
                onClick={addExperienceField}
                className="bg-teal-500 text-white font-bold py-2 px-4 hover:bg-teal-700  rounded focus:shadow-outline"
              >
                Add
              </button>
            ) : null}


          </div>
              


              <div className="mt-4 flex justify-between">
              <button
                  onClick={() => setCurrentSection('personal')}
                  className="px-4 py-2 bg-gray-300 text-gray-600 rounded hover:bg-gray-400 focus:shadow-outline"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentSection('achievement')}
                  className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 focus:shadow-outline"
                >
                  Next
                </button>
              </div>
            </div>
          )}
          
          {/* Achievement section */}
          {currentSection === 'achievement' && (
            <div>
                        {/* Achievement section */}
          <div className="mt-6">
            <h2 className="text-lg font-bold text-center mb-4">FORM ACHIEVEMENT</h2>
            {achievementFields.map((achievement, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="achievement">
                  [Achievement {index + 1}]
                </label>

                <div className="mb-4">
                <label className="block text-sm font-bold     mb-2" htmlFor="achievement">
                    Date
                </label>
                <input
                  type="date"
                  className="border w-full text-gray-400 rounded px-2 py-1"
                  placeholder="Date"
                  value={achievement.date}
                  onChange={(e) => {
                    const updatedFields = [...achievementFields];
                    updatedFields[index].date = e.target.value;
                    setAchievementFields(updatedFields);
                  }}
                />
                </div>
                <div className="mb-4">
                <label className="block  text-sm font-bold mb-2" htmlFor="achievement">
                    Title
                </label>
                <input
                  type="text"
                  className="border w-full text-gray-400 rounded px-2 py-1"
                  placeholder="Title"
                  value={achievement.title}
                  onChange={(e) => {
                    const updatedFields = [...achievementFields];
                    updatedFields[index].title = e.target.value;
                    setAchievementFields(updatedFields);
                  }}
                />
                </div>
                <div className="mb-4">
                <label className="bloc text-sm font-bold mb-2" htmlFor="achievement">
                    Level
                </label>
                <select
                  className="border w-full text-gray-400 rounded px-2 py-1"
                  value={achievement.level}
                  onChange={(e) => {
                    const updatedFields = [...achievementFields];
                    updatedFields[index].level = e.target.value;
                    setAchievementFields(updatedFields);
                  }}
                >
                  <option value="">--Option--</option>
                  <option value="local">Local District or Regency/City Level</option>
                  <option value="provincial">Provincial Level</option>
                  <option value="national">National Level</option>
                  <option value="international">International Level</option>
                </select>
                </div>
                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="achievement">
                    Achievement Descrpition
                </label>
                <input
                  type="text"
                  className="border w-full text-gray-400 rounded px-2 py-1"
                  placeholder="Achievement"
                  value={achievement.achievement}
                  onChange={(e) => {
                    const updatedFields = [...achievementFields];
                    updatedFields[index].achievement = e.target.value;
                    setAchievementFields(updatedFields);
                  }}
                />
                </div>
              </div>
            ))}

            {/* selama iki true show lek false hide */}
            {/*haruse lek kurang dari 2 baru hide */}
            {/* 1 > 1 */}
            {achievementFields.length > 1 ? (
              <button
                type="button"
                onClick={removeAchievementField}
                className="bg-rose-500 text-white font-bold py-2 px-4 rounded hover:bg-rose-700 focus:outline-none focus:shadow-outline"
              >
                Remove
              </button>
            ) : null}

            {/* selama iki true show lek false hide */}
            {/*haruse lek lebih dari 3 baru hide */}
            {achievementFields.length <= 2 ? (
              <button
                type="button"
                onClick={addAchievementField}
                className="bg-teal-500 text-white font-bold py-2 px-4 hover:bg-teal-700  rounded focus:shadow-outline"
              >
                Add
              </button>
            ) : null}
          </div>

          <div className="mb-4 mt-4">
                <label className="block text-sm font-bold mb-2" htmlFor="linkDrive">
                  Link Drive Portofolio
                </label>
                <input autoComplete='off'
                  className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="linkDrive"
                  type="text"
                  value={linkDrive}
                  onChange={(e) => setLinkDrive(e.target.value)}
                  placeholder="Enter your link drive..."
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => setCurrentSection('experience')}
                  className="px-4 py-2 bg-gray-300 text-gray-600 rounded hover:bg-gray-400 focus:shadow-outline"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </div>
          )}   
        </form>
      </div>
      <footer className="px-6 py-4 md:py-8 bg-slate-50 md:px-4">
  <div className="sm:flex mx-auto max-w-7xl sm:items-center sm:justify-between">
    <div className="mb-4 sm:mb-0 mx-auto sm:mx-0">
      <a className="flex items-center justify-center">
        <img
          src={logoImage2}
          className="lg:h-52 md:h-40 h-32 pt-6 bg-sky-100 rounded-2xl p-2"
          alt="Logo ENT"
        />
      </a>
    </div>
    <div className="mt-4 text-center sm:mt-0 sm:text-left">
      <div className="mb-4 space-x-4 text-center">
        <a href="#" className="text-gray-500 font-bold text-xs md:text-sm hover:text-sky-500">Home</a>
        <a href="#" className="text-gray-500 font-bold text-xs md:text-sm hover:text-sky-500">About</a>
        <a href="#" className="text-gray-500 font-bold text-xs md:text-sm hover:text-sky-500">Contact</a>
      </div>
      <div className="mb-4">
  <a href="https://www.facebook.com" target="_blank">
    <FontAwesomeIcon icon={faFacebookF} className="text-xl hover:text-yellow-700 text-slate-400 mx-3 md:mt-8 sm:mt-1" />
  </a>
  <a href="https://www.instagram.com/entcrews" target="_blank">
    <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-yellow-700 text-slate-400 mx-3" />
  </a>
  <a href="mailto: ent@gmail.com" target="_blank">
    <FontAwesomeIcon icon={faSolidEnvelope} className="text-xl hover:text-yellow-700 text-slate-400 mx-3" />
  </a>
  <a href="https://www.twitter.com/entcrews" target="_blank">
    <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-yellow-700 text-slate-400 mx-3" />
  </a>
  <a href="https://www.youtube.com/@entcrews" target="_Blank">
    <FontAwesomeIcon icon={faYoutube} className="text-xl hover:text-yellow-700 text-slate-400 mx-3" />
  </a>
</div>


    </div>
    <div className="flex flex-col items-center">
      {/* <h2 className="my-2 font-semibold text-md">Location</h2> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.691977074115!2d112.79156701477496!3d-7.2758470947483636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya!5e0!3m2!1sid!2sid!4v1675351583121!5m2!1sid!2sid"
        width="100%"
        height="168"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="rounded-xl"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <span className="mt-4 text-center text-xs font-bold text-slate-400">@ 2023 EEPIS News and Network Team</span>
    </div>
  </div>
</footer>



    </div>
  );
};

export default ResponsiveFormWithNavbar;

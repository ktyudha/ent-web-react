import React, { useState, useEffect } from "react";
import axiosInstance from "../../../utils/axiosInstance";

import FormLayout from "../../../layouts/FormLayout";
import backgroundImage from "../../../asset/pattern3.png";

const ResponsiveFormWithNavbar = () => {
  const requiredFields = [
    "name",
    "placeOfBirth",
    "dateOfBirth",
    "boardingAddress",
    "homeAddress",
    "nrp",
    "email",
    "phone",
    "description",
    "motto",
    "interest",
    "reason",
  ];

  const [currentSection, setCurrentSection] = useState("personal"); // 'personal', 'experience', 'achievement'

  const [formData, setFormData] = useState({
    name: "",
    place_of_birth: "",
    date_of_birth: "",
    gender: "--Option--",
    boarding_address: "",
    home_address: "",
    religion: "--Option--",
    nrp: "",
    strata: "--Option--",
    prodi: "--Option--",
    email: "",
    phone: "",
    description: "",
    mbti: "--Option--",
    motto: "",
    interest: "",
    division: "--Option--",
    reason: "",
    url_portofolio: "",
    experiences: [
      { start_date: "-", end_date: "-", organization_name: "-", position: "-" },
    ],
    achievements: [{ date: "-", title: "-", level: "-", achievement: "-" }],
  });

  // PERSONAL
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/recruitment", formData, {});
      console.log("Response:", response);
      // You can handle the response data here
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // EXPERIENCE
  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = formData.experiences.map((experience, i) => {
      if (i === index) {
        return { ...experience, [field]: value };
      }
      return experience;
    });

    setFormData({
      ...formData,
      experiences: updatedExperiences,
    });
    console.log(formData);
  };

  const addExperienceField = () => {
    setFormData((prevData) => ({
      ...prevData,
      experiences: [
        ...prevData.experiences,
        { start_date: "", end_date: "", organization_name: "", position: "" },
      ],
    }));
  };

  const removeExperienceField = (index) => {
    const updatedExperiences = formData.experiences.filter(
      (experience, i) => i !== index
    );
    setFormData({
      ...formData,
      experiences: updatedExperiences,
    });
  };

  // ACHIEVEMENT
  const handleAchievementChange = (index, field, value) => {
    const updatedAchievements = formData.achievements.map((achievement, i) => {
      if (i === index) {
        return { ...achievement, [field]: value };
      }
      return achievement;
    });

    setFormData({
      ...formData,
      achievements: updatedAchievements,
    });
    console.log(formData);
  };

  const addAchievementField = () => {
    setFormData((prevData) => ({
      ...prevData,
      achievements: [
        ...prevData.achievements,
        { date: "", title: "", level: "", achievement: "" },
      ],
    }));
  };

  const removeAchievementField = (index) => {
    const updatedAchievements = formData.achievements.filter(
      (achievement, i) => i !== index
    );
    setFormData({
      ...formData,
      achievements: updatedAchievements,
    });
  };

  // Use local storage to save and load form data
  useEffect(() => {
    const storedData = localStorage.getItem("form_data");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCurrentSection(parsedData.currentSection);
    }
  }, []);

  useEffect(() => {
    if (currentSection === "personal") {
      // Update input fields for the personal section with values from state
      const nameField = document.getElementById("name");
      const placeOfBirthField = document.getElementById("placeOfBirth");
      const dateOfBirthField = document.getElementById("dateOfBirth");
      const boardingAddressField = document.getElementById("boardingAddress");
      const homeAddressField = document.getElementById("homeAddress");
      const nrpField = document.getElementById("nrp");
      const emailField = document.getElementById("email");
      const phoneField = document.getElementById("phone");
      const descriptionField = document.getElementById("description");
      const mottoField = document.getElementById("motto");
      const interestField = document.getElementById("interest");
      const reasonField = document.getElementById("reason");
      // ... and other fields

      if (nameField) nameField.value = formData.name;
      if (placeOfBirthField) placeOfBirthField.value = formData.place_of_birth;
      if (dateOfBirthField) dateOfBirthField.value = formData.date_of_birth;
      if (boardingAddressField)
        boardingAddressField.value = formData.boarding_address;
      if (homeAddressField) homeAddressField.value = formData.home_address;
      if (nrpField) nrpField.value = formData.nrp;
      if (emailField) emailField.value = formData.email;
      if (phoneField) phoneField.value = formData.phone;
      if (descriptionField) descriptionField.value = formData.description;
      if (mottoField) mottoField.value = formData.motto;
      if (interestField) interestField.value = formData.interest;
      if (reasonField) reasonField.value = formData.reason;

      // ... update other fields as needed
    } else if (currentSection === "experience") {
      // Update input fields for the experience section with values from experienceFields
      // ... update input fields for experience section
    } else if (currentSection === "achievement") {
      // Update input fields for the achievement section with values from achievementFields
      // ... update input fields for achievement section
    }
  }, [
    currentSection,
    formData.name,
    formData.place_of_birth,
    formData.date_of_birth,
    formData.boarding_address,
    formData.home_address,
    formData.nrp,
    formData.email,
    formData.phone,
    formData.description,
    formData.motto,
    formData.interest,
    formData.reason,
    formData.url_portofolio,
  ]);

  return (
    <FormLayout>
      <div>
        {/* Form */}
        <div
          className="p-4 pt-20 md:p-8 md:pt-24 lg:pt-28 lg:p-16 bg-sky-900 text-white"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="max-w-md md:max-w-lg mx-auto bg-sky-900 text-white shadow-md rounded px-8 pt-6 pb-8"
          >
            {/* Personal Information section */}
            {currentSection === "personal" && (
              <div>
                <h2 className="text-lg font-bold mb-4 text-center">
                  {" "}
                  FORM PERSONAL
                </h2>

                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    autoComplete="off"
                    className="text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your name..."
                  />
                </div>
                <div className="mb-4 flex flex-wrap justify-between">
                  <div className="w-1/2">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="placeOfBirth"
                    >
                      Place of Birth
                    </label>
                    <input
                      autoComplete="off"
                      className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="placeOfBirth"
                      name="place_of_birth"
                      value={formData.place_of_birth}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter your place of birth..."
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="dateOfBirth"
                    >
                      Date of Birth
                    </label>
                    <input
                      className="shadow appearance-none border rounded text-gray-400 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="dateOfBirth"
                      name="date_of_birth"
                      type="date"
                      value={formData.date_of_birth}
                      onChange={handleInputChange}
                      placeholder="Enter your date of birth..."
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <select
                    className="block appearance-none w-full text-gray-400 bg-white border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="--Option--">--Option--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="boardingAddress"
                  >
                    Boarding Address
                  </label>
                  <textarea
                    autoComplete="off"
                    className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="boardingAddress"
                    name="boarding_address"
                    value={formData.boarding_address}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Enter your boarding address..."
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="homeAddress"
                  >
                    Home Address
                  </label>
                  <textarea
                    autoComplete="off"
                    className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="homeAddress"
                    name="home_address"
                    value={formData.home_address}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Enter your home address..."
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="religion"
                  >
                    Religion
                  </label>
                  <select
                    className="block appearance-none w-full text-gray-400 bg-white border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="religion"
                    name="religion"
                    value={formData.religion}
                    onChange={handleInputChange}
                    placeholder="Enter your religion..."
                  >
                    <option value="--Option--">--Option--</option>
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
                  <input
                    autoComplete="off"
                    className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="nrp"
                    name="nrp"
                    value={formData.nrp}
                    onChange={handleInputChange}
                    type="number"
                    placeholder="Enter your NRP..."
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="educationalLevel"
                  >
                    Educational Level
                  </label>
                  <select
                    className="block appearance-none w-full bg-white text-gray-400 border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="educationalLevel"
                    name="strata"
                    value={formData.strata}
                    onChange={handleInputChange}
                  >
                    <option value="--Option--">--Option--</option>
                    <option value="D4">APPLIED BACHELOR (D4) </option>
                    <option value="D3">3-YEAR DIPLOMA (D3)</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="studyProgram"
                  >
                    Study Program
                  </label>
                  <select
                    className="block appearance-none w-full text-gray-400 bg-white border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="studyProgram"
                    name="prodi"
                    value={formData.prodi}
                    onChange={handleInputChange}
                  >
                    <option value="--Option--">--Option--</option>

                    <option disabled className="font-medium">
                      Department of Electrical Engineering
                    </option>
                    <option value="D3 Electrical Engineering">
                      D3 Electrical Engineering
                    </option>
                    <option value="D3 Industrial Electrical Engineering">
                      D3 Industrial Electrical Engineering
                    </option>
                    <option value="D3 Telecommunications Engineering">
                      D3 Telecommunications Engineering
                    </option>

                    <option value="D4 Electrical Engineering">
                      D4 Electrical Engineering
                    </option>
                    <option value="D4 Industrial Electrical Engineering">
                      D4 Industrial Electrical Engineering
                    </option>
                    <option value="D4 Telecommunications Engineering">
                      D4 Telecommunications Engineering
                    </option>

                    <option value="D4 Internet Engineering Technology">
                      D4 Internet Engineering Technology
                    </option>

                    <option disabled className="font-medium">
                      Department of Informatics and Computer Engineering
                    </option>
                    <option value="D3 Informatics Engineering">
                      D3 Informatics Engineering
                    </option>
                    <option value="D4 Informatics Engineering">
                      D4 Informatics Engineering
                    </option>
                    <option value="D4 Computer Engineering">
                      D4 Computer Engineering
                    </option>
                    <option value="D4 Applied Data Science">
                      D4 Applied Data Science
                    </option>

                    <option disabled className="font-medium">
                      Department of Energy Mechanics Engineering
                    </option>
                    <option value="D4 Mechatronic Engineering">
                      D4 Mechatronic Engineering
                    </option>
                    <option value="D4 Energy Generation System">
                      D4 Energy Generation System
                    </option>

                    <option disabled className="font-medium">
                      Creative Multimedia Technology Department
                    </option>
                    <option value="D4 Multimedia Broadcasting<">
                      D4 Multimedia Broadcasting
                    </option>
                    <option value="D4 Multimedia Engineering Technology">
                      D4 Multimedia Engineering Technology
                    </option>
                    <option value="D4 Game Technology">
                      D4 Game Technology
                    </option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    autoComplete="off"
                    className="shadow text-gray-400 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Enter your email..."
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    autoComplete="off"
                    className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number..."
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    Description Your Self
                  </label>
                  <textarea
                    className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter your description..."
                  />
                </div>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="mbti"
                    >
                      MBTI Personality
                    </label>
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="mbti"
                    >
                      Check ur MBTI Personality{" "}
                      <a
                        href="https://www.16personalities.com/"
                        target="_blank"
                        className="text-sky-500 hover:text-sky-700"
                        rel="noreferrer"
                      >
                        here
                      </a>
                    </label>
                  </div>

                  <select
                    className="block appearance-none w-full text-gray-400 bg-white border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="mbti"
                    name="mbti"
                    value={formData.mbti}
                    onChange={handleInputChange}
                  >
                    <option value="--Option--">--Option--</option>
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
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="motto"
                  >
                    Motto
                  </label>
                  <textarea
                    autoComplete="off"
                    className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="motto"
                    name="motto"
                    rows="3"
                    value={formData.motto}
                    onChange={handleInputChange}
                    placeholder="Enter your motto..."
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="interest"
                  >
                    Interest to Join Another Organization or UKM
                  </label>
                  <textarea
                    autoComplete="off"
                    className="shadow appearance-none border rounded text-gray-400 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="interest"
                    name="interest"
                    rows="3"
                    value={formData.interest}
                    onChange={handleInputChange}
                    placeholder="Enter your interests..."
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="division"
                  >
                    Division
                  </label>
                  <select
                    className="block appearance-none w-full text-gray-400 bg-white border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="mbti"
                    name="division"
                    value={formData.division}
                    onChange={handleInputChange}
                  >
                    <option value="--Option--">--Option--</option>
                    <option value="Reporter">Reporter</option>
                    <option value="Videographer">Videographer</option>
                    <option value="Photographer">Photographer</option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="Webmaster">Webmaster</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="reason"
                  >
                    Reason Join ENT
                  </label>
                  <textarea
                    autoComplete="off"
                    className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="reason"
                    name="reason"
                    rows="3"
                    value={formData.reason}
                    onChange={handleInputChange}
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
                          alert(
                            `Please fill in the ${fieldElement.placeholder}.`
                          );
                          fieldElement.focus();
                          hasEmptyFields = true;
                          break;
                        }
                      }

                      if (hasEmptyFields) {
                        return;
                      }

                      //   console.log(formData.gender);
                      if (formData.gender === "--Option--") {
                        alert(
                          "Please select a gender option from the dropdown before proceeding."
                        );
                        return;
                      }

                      if (formData.religion === "--Option--") {
                        alert(
                          "Please select a religion option from the dropdown before proceeding."
                        );
                        return;
                      }

                      if (formData.strata === "--Option--") {
                        alert(
                          "Please select a educational level option from the dropdown before proceeding."
                        );
                        return;
                      }

                      if (formData.prodi === "--Option--") {
                        alert(
                          "Please select a study program option from the dropdown before proceeding."
                        );
                        return;
                      }

                      if (formData.mbti === "--Option--") {
                        alert(
                          "Please select a mbti option from the dropdown before proceeding."
                        );
                        return;
                      }

                      if (formData.division === "--Option--") {
                        alert(
                          "Please select a division option from the dropdown before proceeding."
                        );
                        return;
                      }

                      setCurrentSection("experience");
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
            {currentSection === "experience" && (
              <div>
                {/* Experience section */}
                <div className="mt-6">
                  <h2 className="text-lg font-bold text-center mb-4">
                    FORM EXPERIENCE
                  </h2>
                  {formData.experiences.map((experience, index) => (
                    <div key={index} className="mb-4">
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="experience"
                      >
                        [Experience {index + 1}]
                      </label>
                      <div className="mb-4">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor="experience"
                        >
                          Start Month
                        </label>
                        <input
                          type="month"
                          className="border w-full text-gray-400 rounded px-2 py-1"
                          value={experience.start_date}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "start_date",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor="experience"
                        >
                          End Date
                        </label>
                        <input
                          type="month"
                          className="border w-full text-gray-400 rounded px-2 py-1"
                          value={experience.end_date}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "end_date",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor="experience"
                        >
                          Organization
                        </label>
                        <input
                          type="text"
                          className="border text-gray-400  w-full rounded px-2 py-1"
                          placeholder="Organization"
                          value={experience.organization_name}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "organization_name",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor="experience"
                        >
                          Position
                        </label>
                        <input
                          type="text"
                          className="border text-gray-400 w-full rounded px-2 py-1"
                          placeholder="Position"
                          value={experience.position}
                          onChange={(e) =>
                            handleExperienceChange(
                              index,
                              "position",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      {formData.experiences.length > 1 ? (
                        <button
                          type="button"
                          onClick={() => removeExperienceField(index)}
                          className="bg-rose-500 text-white font-bold py-2 px-4 rounded hover:bg-rose-700 focus:outline-none focus:shadow-outline"
                        >
                          Remove
                        </button>
                      ) : null}
                    </div>
                  ))}
                  {/* selama iki true show lek false hide */}
                  {/*haruse lek kurang dari 2 baru hide */}
                  {/* 1 > 1 */}

                  {/* selama iki true show lek false hide */}
                  {/*haruse lek lebih dari 3 baru hide */}
                  {formData.experiences.length <= 2 ? (
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
                    onClick={() => setCurrentSection("personal")}
                    className="px-4 py-2 bg-gray-300 text-gray-600 rounded hover:bg-gray-400 focus:shadow-outline"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentSection("achievement")}
                    className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700 focus:shadow-outline"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Achievement section */}
            {currentSection === "achievement" && (
              <div>
                {/* Achievement section */}
                <div className="mt-6">
                  <h2 className="text-lg font-bold text-center mb-4">
                    FORM ACHIEVEMENT
                  </h2>
                  {formData.achievements.map((achievement, index) => (
                    <div key={index} className="mb-4">
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="achievement"
                      >
                        [Achievement {index + 1}]
                      </label>

                      <div className="mb-4">
                        <label
                          className="block text-sm font-bold     mb-2"
                          htmlFor="achievement"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          className="border w-full text-gray-400 rounded px-2 py-1"
                          placeholder="Date"
                          value={achievement.date}
                          onChange={(e) =>
                            handleAchievementChange(
                              index,
                              "date",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="block  text-sm font-bold mb-2"
                          htmlFor="achievement"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          className="border w-full text-gray-400 rounded px-2 py-1"
                          placeholder="Title"
                          value={achievement.title}
                          onChange={(e) =>
                            handleAchievementChange(
                              index,
                              "title",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="bloc text-sm font-bold mb-2"
                          htmlFor="achievement"
                        >
                          Level
                        </label>
                        <select
                          className="border w-full text-gray-400 rounded px-2 py-1"
                          value={achievement.level}
                          onChange={(e) =>
                            handleAchievementChange(
                              index,
                              "level",
                              e.target.value
                            )
                          }
                        >
                          <option value="">--Option--</option>
                          <option value="local">
                            Local District or Regency/City Level
                          </option>
                          <option value="provincial">Provincial Level</option>
                          <option value="national">National Level</option>
                          <option value="international">
                            International Level
                          </option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor="achievement"
                        >
                          Achievement Descrpition
                        </label>
                        <input
                          type="text"
                          className="border w-full text-gray-400 rounded px-2 py-1"
                          placeholder="Achievement"
                          value={achievement.achievement}
                          onChange={(e) =>
                            handleAchievementChange(
                              index,
                              "achievement",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      {formData.achievements.length > 1 ? (
                        <button
                          type="button"
                          onClick={() => removeAchievementField(index)}
                          className="bg-rose-500 text-white font-bold py-2 px-4 rounded hover:bg-rose-700 focus:outline-none focus:shadow-outline"
                        >
                          Remove
                        </button>
                      ) : null}
                    </div>
                  ))}

                  {/* selama iki true show lek false hide */}
                  {/*haruse lek kurang dari 2 baru hide */}
                  {/* 1 > 1 */}

                  {/* selama iki true show lek false hide */}
                  {/*haruse lek lebih dari 3 baru hide */}
                  {formData.achievements.length <= 2 ? (
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
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="linkDrive"
                  >
                    Link Drive Portofolio
                  </label>
                  <input
                    autoComplete="off"
                    className="shadow appearance-none border text-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="linkDrive"
                    name="url_portofolio"
                    type="text"
                    value={formData.url_portofolio}
                    onChange={handleInputChange}
                    placeholder="Enter your link drive..."
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => setCurrentSection("experience")}
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
      </div>
    </FormLayout>
  );
};

export default ResponsiveFormWithNavbar;

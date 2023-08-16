import React, { useState } from "react";

const SelectionComponent = ({ options, requiredOptions, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div>
      <h2>Select an Option</h2>
      <select value={selectedOption} onChange={handleSelectChange} required>
        <option value="">-- Select an option --</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const Form = () => {
  const handleOptionSelect = (selectedValue) => {
    console.log("Selected value:", selectedValue);
  };

  const options = [
    { value: "option1", label: "Option 1", disabled: false },
    { value: "option2", label: "Option 2", disabled: false },
    { value: "option3", label: "Option 3 (disabled)", disabled: true },
    { value: "option4", label: "Option 4 (disabled)", disabled: true },
  ];

  return (
    <div>
      <SelectionComponent
        options={options}
        onSelect={handleOptionSelect}
        requiredOptions={["option1", "option2"]}
      />
    </div>
  );
};

export default Form;

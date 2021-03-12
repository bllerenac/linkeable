import { InputText, Select } from "../Inputs";
import { RiCalendarTodoLine } from "react-icons/ri";
import Button from '../Button';

export default function Personal({ state, handleChange, currentStep, setCurrentStep }) {
  return (
    <>
      <InputText
        label="Name"
        placeholder="John Doe"
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      <InputText
        label="Phone"
        placeholder="xxx-xxx-xxx"
        name="phone"
        value={state.phone}
        onChange={handleChange}
      />
      {/* Gender */}
      <InputText
        label="Birthday"
        placeholder="Pick a date"
        name="birthday"
        value={state.birthday}
        onChange={handleChange}
        icon={<RiCalendarTodoLine />}
      />
      <Select
        label="Nationality"
        placeholder="Select an option"
        name="country"
        value={state.country.code}
        onChange={handleChange}
        options={[
          { value: "pe", text: "Peru" },
          { value: "ve", text: "Venezuela" },
          { value: "mx", text: "Mexico" },
        ]}
      />
      {/* Bio */}
      <InputText
        label="Profession"
        placeholder="Software Engineer"
        name="profession"
        value={state.profession}
        onChange={handleChange}
      />
      <Button size="large" onClick={() => setCurrentStep(currentStep + 1)}>
        Next
      </Button>
    </>
  );
}

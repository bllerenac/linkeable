import { InputText, Select, TextArea } from "../Inputs";
import { RiCalendarTodoLine } from "react-icons/ri";

export default function Personal({ state, handleChange }) {
  return (
    <>
      <InputText
        label="Name"
        placeholder="John Doe"
        name="name"
        value={state.name}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <InputText
        label="Phone"
        placeholder="xxx-xxx-xxx"
        name="phone"
        type="tel"
        value={state.phone}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      {/* Gender */}
      <InputText
        label="Birthday"
        placeholder="Pick a date"
        name="birthday"
        type="date"
        value={state.birthday}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        // icon={<RiCalendarTodoLine />}
      />
      <Select
        label="Nationality"
        placeholder="Select an option"
        name="country"
        value={state.country.code}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        options={[
          { value: "pe", text: "Peru" },
          { value: "ve", text: "Venezuela" },
          { value: "mx", text: "Mexico" },
        ]}
      />
      <TextArea
        label="Bio"
        placeholder="Tell us about you..."
        name="bio"
        value={state.bio}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        caption="Max 140 characteres"
      />
      <InputText
        label="Profession"
        placeholder="Software Engineer"
        name="profession"
        value={state.profession}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
    </>
  );
}

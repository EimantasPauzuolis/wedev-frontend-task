import { defineRule } from "vee-validate";

defineRule("required", (value: string) => {
  if (!value || !value.length) {
    return "Please complete the highlighted areas before continuing";
  }
  return true;
});

defineRule("email", (value: string) => {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(value)) {
    return "You must enter a valid email address to proceed";
  }

  return true;
});
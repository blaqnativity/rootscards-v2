import * as yup from "yup";

export const waitlistSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters long"),

  spaceType: yup
    .string()
    .required("Please select a space type")
    .oneOf(
      ["office", "apartment", "church", "event-space"],
      "Invalid space type"
    ),

  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

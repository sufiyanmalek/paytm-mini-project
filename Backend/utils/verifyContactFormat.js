import joi from "joi";

export const verifyNewContact = async (contact) => {
  const userSchema = joi.object({
    userId: joi.string().required().length(24),
    name: joi.string().required().min(3),
    email: joi.string().email().required(),
    phone: joi.string().required().length(10),
  });
  const validate = await userSchema.validate(contact);
  if (validate.error) {
    return {
      isValid: false,
      error: "Validation error",
      message: validate.error.details[0].message,
    };
  } else {
    return {
      isValid: true,
    };
  }
};

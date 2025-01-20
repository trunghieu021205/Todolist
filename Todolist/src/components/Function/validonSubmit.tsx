import FormData from "../Interface/FormData";
import { requiredValidator } from "./requiredValidator";
export const validateOnSubmit = (data: FormData) => {
    let errors;
    errors = requiredValidator(data, 'DateTime', errors);
    errors = requiredValidator(data, 'TextInput', errors);
    return errors;
  };
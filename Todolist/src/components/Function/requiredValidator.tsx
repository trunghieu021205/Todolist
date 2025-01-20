import FormData from "../Interface/FormData";
import { validateField } from "./validateField";
export const requiredValidator = (data: FormData, key: string, errors?: Record<string, string>) => {
    if (!data[key]) {
      return {
        ...errors,
        [key]: `Required`,
      };
    }
    else if(key=='DateTime'&&validateField(data[key])=='Time Expired'){
      return{
        ...errors,
        [key]:'Time expired'
      }
    }
    return errors;
  };
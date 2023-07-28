import { capitalizeWords } from './user_functions.helper';
export const errorText = (error: any) => {
  const isErrorAnObject = typeof error === 'object' && error !== null;

  let errorArray: string[] = [];
  if (isErrorAnObject) {
    for (const key in error) {
      errorArray.push(`${capitalizeWords(key)}: ${error[key]}`);
    }
    return errorArray.join(', ').replace(/[[\]".]/g, '');
  } else {
    return error;
  }
};

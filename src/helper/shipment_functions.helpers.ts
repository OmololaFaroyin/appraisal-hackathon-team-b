import format from 'date-fns/format';
import parse from 'date-fns/parse';

export const convertedDate = (dateInput: string) => {
  if (dateInput === undefined) {
   
  }
  let convertedString = parse(dateInput, 'yyyy-MM-dd', new Date());

  return format(convertedString, 'dd-MM-yyyy');
};

// export const canUserInputShipmentValue = (role: string | undefined) => {
//   switch (role) {
//     case 'SUPER_ADMIN':
    
//       return true;
//     default:
  
//       return false;
//   }
// };

// Validates if a terminalShipment User can make any modifications based on their role
// export const canUserMakeShipmentModification = (role: string | undefined) => {
//   switch (role) {
//     case 'SUPER_ADMIN':
 
//       return true;
//     case 'HYBRID_ADMIN':

//       return true;
//     case 'TMS_ADMIN':
 
//       return true;
//     default:
//       return false;
//   }
// };
// Validates if a terminalShipment User can make any modifications based on their role

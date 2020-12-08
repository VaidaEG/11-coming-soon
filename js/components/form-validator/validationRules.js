import { isValidEmail } from './isValidEmail.js';
import { isValidName } from './isValidName.js';
import { isValidText } from './isValidText.js';

// validation objekto key (raktazodziai) specialiai sutampa su terminais naudojamais HTML formose esanciais data-validation reiksmese 
const validation = {
    email: isValidEmail,
    text: isValidText,
    name: isValidName
}

export { validation }
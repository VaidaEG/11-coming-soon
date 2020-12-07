import { isValidEmail } from './isValidEmail.js';
import { isValidName } from './isValidName.js';
import { isValidText } from './isValidText.js';

const validation = {
    email: isValidEmail,
    text: isValidText,
    name: isValidName
}

export { validation }
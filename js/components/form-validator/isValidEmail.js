function isValidEmail(email) {
    const maxEmailLength = 50;
    if (typeof email !== 'string') {
        return 'El. paštas turi būti teksto tipo.';
    }
    if (email == '') {
        return 'El. paštas negali būti tuščias.';
    }
    if (email.length > maxEmailLength) {
        return `El. paštas negali būti ilgesnis nei ${maxEmailLength} simbolių (viršyta ${email.length - maxEmailLength} simbolių).`;
    }
    return true;
}

export { isValidEmail }
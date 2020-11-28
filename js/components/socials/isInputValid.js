function isInputValid(selector, data) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selektorius turi būti tekstinio tipo.')
    }
    if (typeof selector === '') {
        console.error('ERROR: selektorius negali būti tuščias.')
    }
    if (!Array.isArray(data)) {
        console.error('ERROR: social ikonom generuoti reikia array tipo duomenų.');
        return false;
    }
    if (data.length === 0) {
        console.error('ERROR: social ikonom generuoti reikia ne tuščio array tipo duomenų sąrašo.');
        return false;
    }
    return true;
}

export { isInputValid }
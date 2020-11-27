function isInputValid(data) {
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
function isValidProgressBarsList(list) {
    if (!Array.isArray(list)) {
        console.error('ERROR: turi būti array tipo duomenys.');
        return false;
    }
    if (list.length === 0) {
        console.error('ERROR: array negali būti tuščias.')
        return false;
    }
    return true;
}
export { isValidProgressBarsList }
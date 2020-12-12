function isValidText(text) {
    const maxTextLength = 1000;
    if (typeof text !== 'string') {
        return 'Tekstas turi būti teksto tipo.';
    }
    if (text == '') {
        return 'Tekstas negali būti tuščias.';
    }
    if (text.length > maxTextLength) {
        return `Tekstas negali viršyti ${maxTextLength} simbolių (viršyta ${text.length - maxTextLength} simbolių)`;
    }
    return true;
}

export { isValidText }
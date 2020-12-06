function isValidName(name) {
    const maxNameLength = 50;
    if (typeof name !== 'string') {
        return 'Vardas turi būti teksto tipo.';
    }
    if (name == '') {
        return 'Vardas negali būti tuščias.';
    }
    if (name.length > maxNameLength) {
        return `Vardas negali viršyti ${maxNameLength} simbolių (viršyta ${name.length - maxNameLength} simbolių).`;
    }
    // turi buti tik abeceles raides

    const abc = 'qwertyuiopasdfghjklzxcvbnm';
    for (let letter of name) {
        if (!abc.includes(letter.toLowerCase())) {
            return `ERROR: varde panaudota neleistina raidė (${letter}).`; 
        }
    }

    // jei gauto vardo raides pavertus mazosiomis gauname pradine reiksme, reiskia, kad vardas buvo vien tik is mazuju raidziu.

    if (name.toLowerCase() === name ) {
        return 'Vardas negali būti vien tik iš mažųjų raidžių.';
    }

    // jei pagauname, jog vardas  ivestas vien didziosiomis raidemis
    
    const realNameFormat = name[0].toUpperCase() + name.slice(1).toLowerCase();
    if (realNameFormat !== name) {
        return 'Vardą turi sudaryti pirma didžioji raidė ir likusios mažosios raidės.';
    }
     
    return true;
}
export { isValidName }
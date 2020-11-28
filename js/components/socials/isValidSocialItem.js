/**
 * renderSocial() funkcijos metu vykdomame cikle gaunamu duomenu validacija.
 * @param {object} itemObject Objektas aprasantis viena social nuoroda, kuri sudaro ikona ir nuoroda (href)
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, grazinama `false`, priesingu atveju - `true`
 */
function isValidSocialItem(itemObject) {
    if (typeof itemObject !== 'object') {
        console.var('ERROR: social elementas turėtų būti objektas.');
        return false;
    }
    if (typeof itemObject.link !== 'string' || itemObject.link === '') {
        console.var('ERROR: social elemento nuoroda turėtų būti tekstinė ir ne tuščia.');
        return false;
    }
    if (typeof itemObject.icon !== 'string' || itemObject.icon === '') {
        console.var('ERROR: social elemento ikona turėtų būti teksinė ir ne tuščia.');
        return false;
    }
    return true;
}

export { isValidSocialItem }
import { countTimeDiff } from './countTimeDiff.js';

// Target date is New Year evening.
// 2021-01-01 00:00:00

/**
 * Generuoja statini laikrodi, kuris rodo, kiek liko laiko iki artimiausiu Naujuju metu.
 * @param {string} selector CSS taisykle, kaip rasti vieta, kur bus generuojamas laikrodzio HTML turinys
 * @return {boolean} Jei funkcija sekmingai ivykdo savo funkcionaluma, grazina `true`, priesingu atveju - `false`;
 */
function renderClock(selector) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selektorius turi būti tekstinio tipo.');
        return false;
    }
    if (typeof selector == '') {
        console.error('ERROR: selektorius negali būti tuščias tekstas.');
        return false;
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerasta vieta, kur sugeneruoti laikrodžio HTML turinį.');
        return false;
    }

    const time = countTimeDiff();


    const HTML = `<div class="time">
            <div class="value">${time.days}</div>
            <div class="label">Days</div>
        </div>
        <div class="time">
            <div class="value">${time.hours}</div>
            <div class="label">Hours</div>
        </div>
        <div class="time">
            <div class="value">${time.minutes}</div>
            <div class="label">Minutes</div>
        </div>
        <div class="time">
            <div class="value">${time.seconds}</div>
            <div class="label">Seconds</div>
        </div> `;

    DOM.innerHTML = HTML;
    const timesDOM = DOM.querySelectorAll('.value');
    console.log(timesDOM);

    // Paleidziame laikordzio mechanizma
    let timePassed = 0;

    setInterval(() => {
        const time = countTimeDiff();
        timesDOM[0].innerText = time.days;
        timesDOM[1].innerText = time.hours;
        timesDOM[2].innerText = time.minutes;
        timesDOM[3].innerText = time.seconds;
    }, 1000);

    return true;
}

export { renderClock }
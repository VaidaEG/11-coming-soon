function renderSocials(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
    }
    
    const socialsDOM = document.querySelector('footer > .row');
    console.log(socialsDOM);

    socialsDOM.innerHTML = HTML;
}

export { renderSocials }

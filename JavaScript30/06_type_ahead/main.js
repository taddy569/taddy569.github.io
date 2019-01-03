window.addEventListener('load', init);

function init() {
  // retrieve data
  const places = [];
  fetch(endpoint).then(blob => blob.json()).then(data => places.push(...data));

  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('keyup', showMatches);

  function showMatches () {
    const findMatchesResult = findMatches(this.value);
    const html = findMatchesResult.map(fmr => {
      const regExp = new RegExp(this.value, 'gi');
      const cityName = fmr.city.replace(regExp, `<span class="hl">${this.value}</span>`);
      const stateName = fmr.state.replace(regExp, `<span class="hl">${this.value}</span>`); 
      return `<li>
                <span>${cityName} ${stateName}</span>
                <span class="population">${numberToString(fmr.population)}</span>
              </li>`;
    }).join('');
    suggestions.innerHTML = html;
  }

  function findMatches (textInput) {
    const regExp = new RegExp(textInput, 'gi');
    return places.filter(place => {
      return place.city.match(regExp) || place.state.match(regExp);
    })
  }

  function numberToString (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}


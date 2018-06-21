const API_URL = 'http://localhost:3090/api/v1/her_soiree';

function getIdFromQuery(){
  const parts = window.location.search.match(/\?id=([0-9]+)/);
  return parts[1];
}

function addSoireeToPage(her_soiree, size, buttons, parent){
  const soireeDiv = document.createElement('div');
  parent.appendChild(soireeDiv);
  soireeDiv.outerHTML = `
  <div class="card col-sm-${size}">
    <img class="card-img-top" src="${her_soiree.event_flyer_url}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${her_soiree.title}</h5>
      <h6 class="card-date">${her_soiree.event_start_time}</h6>
      <p class="card-text">${her_soiree.description}</p>
      ${buttons}
    </div>
  </div>`;
}

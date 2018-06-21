const her_soireeSection = document.querySelector('main section')

const API_URL = 'http://localhost:3090/api/v1/her_soiree';

getSoirees()
  .then(showSoirees)

function getSoirees(){
  return fetch(API_URL)
    .then(res => res.json());
}

function showSoirees(her_soiree){
  her_soiree.forEach(her_soiree => {
    const soireeDiv = document.createElement('div');
    her_soireeSection.appendChild(soireeDiv);
    soireeDiv.outerHTML = `
    <div class="card col-sm-4">
      <img class="card-img-top" src="${her_soiree.event_flyer_url}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${her_soiree.title}</h5>
        <h6 class="card-date">${her_soiree.event_start_time}</h6>
        <p class="card-text">${her_soiree.description}</p>
        <a href="/her_soiree.html?id=${her_soiree.id}" class="btn btn-primary">View Soiree</a>
      </div>
    </div>`;

  });
}

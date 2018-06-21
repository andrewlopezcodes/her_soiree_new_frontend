const her_soireeSection = document.querySelector('main section')



getSoirees()
  .then(showSoirees)

function getSoirees(){
  return fetch(API_URL)
    .then(res => res.json());
}

function showSoirees(her_soiree){
  her_soiree.forEach(her_soiree => {
    const buttons = `<a href="/her_soiree.html?id=${her_soiree.id}" class="btn btn-primary">View Soiree</a>`
    addSoireeToPage(her_soiree, 4, buttons, her_soireeSection);
      });
}

const soireeSection = document.querySelector('main section');

const soiree_id = getIdFromQuery();

getSoiree(soiree_id)
  .then(showSoiree);

function getSoiree(id){
  return fetch(`${API_URL}/${id}`)
    .then(res => res.json());

}

function showSoiree(her_soiree){
  const buttons = `<a href="/her_soiree.html?id=${her_soiree.id}" class="btn btn-info">Edit Soiree</a>`
  addSoireeToPage(her_soiree, 8, buttons, soireeSection);
}

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//Se especificó mal el selector
const $b = document.querySelector('.blog');//Se especificó mal el selector
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent += 'cargando...';
  try {    const response = await fetch(`${usersEndpoint}/${username}`);
  let data = await response.json(); 
  console.log(data);
  $n.textContent = `${data.name}`; //uso de backthicks
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
    
  } catch (error) {
    handleError(error)
  }
  }

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
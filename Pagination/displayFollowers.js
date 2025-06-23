const container = document.querySelector('.container')

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      const { image, name, actor } = person;
      return `
       <article class='card'>
         <img src="${image}" alt='person' />
         <h4 class="name">${name}</h4>
         <p class="actor-name">played by <strong>${actor}</strong></p>
       </article>`
    }).join('');
  container.innerHTML = newFollowers;
}

export default display

init();

function init(){
  loadEntries('./assets/json/projects.json');

  // addEventListener('DOMContentLoaded', ...);
}

async function loadEntries(filepath){
  const request = await fetch(filepath);
  const response = await request.json();
  const fragment = new DocumentFragment();
  const container = document.querySelector('.portfolio-projects-items');

  response.projects.forEach(item => {
    const article = document.createElement('article');

    article.classList.add('portfolio-card');
    article.classList.add('portfolio-projects-item');
    article.innerHTML = projectTemplate(item);

    fragment.appendChild(article);
  });

  container.appendChild(fragment);
}

function projectTemplate({ title, image, description, techstack }){
  return `
    <header>
      <h3>${title}</h3>
    </header>

    <figure>
      <img src="${image.src}" alt="${image.alt}">
      <figcaption>${image.caption}</figcaption>
    </figure>

    <p>${description}</p>

    <footer>
      <p>
        Techstack:
        <ul>
          ${techstack.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </p>
    </footer>
  `;
}

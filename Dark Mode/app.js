const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles
  .map((article) => {
    const { title, release_date, pages, summary } = article;
    const formatDate = moment(release_date).format('MMMM Do, YYYY');
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>Released on ${formatDate}.</span>
            <span>It is ${pages} pages long.</span>
          </div>
          <p>
            ${summary}
          </p>
        </article>`;
  })
  .join('');

articlesContainer.innerHTML = articlesData;

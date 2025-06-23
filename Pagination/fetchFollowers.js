// const url = 'https://api.github.com/users/voodoohop/followers?per_page=100';
const url = 'https://hp-api.onrender.com/api/characters'

const fetchFollowers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const limit_data = data.slice(0, 100);
  return limit_data
}

export default fetchFollowers

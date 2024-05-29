const axios = require("axios");

exports.getRepositories = async () => {
  const url = `${githubUrl}${githubPathUsers}/${githubUser}/repos`;
  console.log(url);
  let repositories = [];
  await axios
    .get(url)
    .then((res) => {
      repositories = res.data.slice(0, valuesPerPage).map((repo) => ({
        name: repo.name,
        full_name: repo.full_name,
        html_url: repo.html_url,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        watchers_count: repo.watchers_count,
        forks_count: repo.forks_count,
        open_issues_count: repo.open_issues_count,
      }));
    })
    .catch(function (error) {
      console.log(error);
    });
  return repositories;
};

const githubUrl = process.env.GIT_HUB_URL.toString();
const githubPathUsers = process.env.GIT_HUB_PATH_USERS.toString();
const githubUser = process.env.PRINCIPAL_GITHUB_USERNAME.toString();
const valuesPerPage = parseInt(process.env.VALUES_PER_PAGE);

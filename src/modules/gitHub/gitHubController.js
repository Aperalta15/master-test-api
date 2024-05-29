const gitHubService = require('./gitHubService');

exports.getRepositories = async (req, res) => {
  try {
    const repositories = await gitHubService.getRepositories();
    res.status(200).json(repositories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

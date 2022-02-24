import axios from 'axios';
import dates from 'libs/dates';

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
});

const getRepositories = async () => {
  const { data } = await githubAPI.get(
    `/search/repositories?q=created:%3E${dates.formattedWeekAgoDate}&sort=stars&order=desc`
  );
  return data;
};

export default {
  getRepositories,
};

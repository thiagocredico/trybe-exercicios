const URL = 'http://api.open-notify.org/iss-now.json';

const getCurrentISSLocation = async () => {
  const response = await fetch(URL);
  const issResponse = await response.json();

  return issResponse;
};

export default getCurrentISSLocation;

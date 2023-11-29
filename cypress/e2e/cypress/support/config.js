const baseUrlFile = require('./getBaseUrl.json');

const getBaseUrl = (environment) => {
  return baseUrlFile[environment] || baseUrlFile['development'];
};

export { getBaseUrl };

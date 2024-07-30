const isDevelopment = process.env.NODE_ENV === 'development';

export default {
  nodeEnv: process.env.NODE_ENV,
  isDevelopment,
  port: process.env.PORT,
};

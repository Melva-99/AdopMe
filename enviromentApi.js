import Constant from "expo-constants";

const ENV = {
  dev: {
    apiKey: "s3XcyelSFNK8zlJJuCM4g1wMhUtXvueA3flh5BwdaXp4moEvBt",
    secretKey: "wrcr4rSmt4Pv1Pyzl9FlyeUDRAnnrksZ4dd3ENkL",
    grand_type: "client_credentials",
  },
  production: {
    apiKey: "s3XcyelSFNK8zlJJuCM4g1wMhUtXvueA3flh5BwdaXp4moEvBt",
    secretKey: "wrcr4rSmt4Pv1Pyzl9FlyeUDRAnnrksZ4dd3ENkL",
    grand_type: "client_credentials",
  },
};
const getEnvVarsApi = (env = Constant.manifest.releaseChannel) => {
  if (__DEV__) return ENV.dev;
  else if (env === "production" || env === "default") return ENV.production;
};
export default getEnvVarsApi;
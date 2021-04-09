import getEnvVarsApi from "../../enviromentApi"
const {
    client_id,
    client_secret,
    grand_type,
  } = getEnvVarsApi();

  const params = {
    client_id,
    client_secret,
    grand_type,
  };
export const fetchAccessToken = async () => {
    const permiso = new URLSearchParams();
    permiso.append("grant_type", params.grand_type);
    permiso.append("client_id", params.client_id);
    permiso.append("client_secret", params.client_secret);
    
    const response = await fetch(`https://api.petfinder.com/v2/oauth2/token`,
    {
        method: "POST",
        body: permiso
    });
    const data = await response.json();
    
    return data.access_token;
  };
export const fetchPets = async  (accessToken) => {
  const response = await fetch(
    "https://api.petfinder.com/v2/animals",{
    headers:{
      Authorization: `Bearer ${accessToken}`,
      },
    });
  const data = await response.json();
  
  return data.animals;
};
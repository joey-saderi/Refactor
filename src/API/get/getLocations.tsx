import axios from "axios";

const DOMAIN = process.env.PRODUCTION_ENDPOINT;
let GET_LOCATIONS = "/core/location/list?limit=500";

export const REQUEST_GET_LOCATION = (parent_id?: IGetLocation) => {
  if (parent_id) {
    GET_LOCATIONS = GET_LOCATIONS + `&parent_id=${parent_id}`;
  }
  return new Promise((resolve, reject) => {
    axios
      .get(DOMAIN + GET_LOCATIONS)
      .then(response => {
        if (response.data.success) {
          const data = response.data.items.map((value, index) => ({
            key: value.id,
            text: value.name.fa,
            value: value.id
          }));
          resolve({ data });
        } else {
          reject(response);
        }
      })
      .catch(e => {
        reject(e);
      });
  });
};

interface IGetLocation {
  parent_id?: number;
}

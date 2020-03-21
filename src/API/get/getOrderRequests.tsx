import axios from "axios";

const DOMAIN = process.env.PRODUCTION_ENDPOINT;
const GET_ORDER_REQUESTS = "/core/rental-car/order/list";

export const REQUEST_GET_ORDER_REQUESTS = (data: IgetOrderRequests) => {
  return new Promise((resolve, reject) => {
    axios
      .get(DOMAIN + GET_ORDER_REQUESTS + "?limit=50", {
        headers: {
          Authorization: "Bearer " + data.token
        }
      })
      .then(response => {
        if (response.data.success) {
          resolve(response.data);
        }
      });
  });
};

interface IgetOrderRequests {
  token: string;
}

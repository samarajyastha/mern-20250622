const { default: api } = require("./api");

async function payViaStripe(data) {
  return await api.post("/api/payment/stripe", data);
}

export { payViaStripe };

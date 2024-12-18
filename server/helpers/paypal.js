const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AceBCIbU8y9wW-N6iGYMPCczApeWCGaOROh3D2MmVuLDqfQM1zOpscj-ZAeN4STs-1LXczGMWHvwyN4-",
  client_secret: "EPQU-vIo89MUNgrzDTcJkSq57zPiu1YTk6IQD1AlG19Kv84VtssTFMIYR41mOBKY3OxK9yFZjpBEL_gP",
});

module.exports = paypal;

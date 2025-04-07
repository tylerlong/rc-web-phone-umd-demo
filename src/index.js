const webPhone = new WebPhone({
  debug: true,
  sipInfo: {
    "transport": "WSS",
    "username": "4324324321432*11116", // this is fake
    "password": "fdafdsa", // this is fake
    "authorizationTypes": ["SipDigest"],
    "authorizationId": "2432432432", // this is fake
    "domain": "sip.ringcentral.com",
    "outboundProxy": "sip113-1221.ringcentral.com:8083",
    "outboundProxyBackup": "sip123-1241.ringcentral.com:8083",
    "stunServers": [
      "stun1.ringcentral.com:19302",
      "stun2.ringcentral.com:19302",
    ],
  },
});

const main = async () => {
  await webPhone.start();
  webPhone.on("inboundCall", (call) => {
    console.log("New Inbound Call");
  });
};

main();

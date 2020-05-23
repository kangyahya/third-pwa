const webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BA3FqIRt5Zq460zoZ4OBDs5FEynHuRe2Gn0LrjvnY-3IrCFyLcqwrwphreqArqOzF4AD-dCRa5oLxTEtSC7FaKA",
   "privateKey": "11ZNcYXaX8NPgtuuP38W4LpVS234VA1awBL11iioFSA"
};
 
 
webPush.setVapidDetails(
   'mailto:moch.yahya95@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
const pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/dI2yxpdySis:APA91bHM-7OHUquDu9wQrSACffuqdir16wLRvgnGQ9b65_ZnXT3l2mxc7-Jb7wJoq0ULAA--Qfug593TJ7sfKnuYk72NvXDcBPyZuLV46V27h8wzaDCslxF6UIcPa2YjSH-5TxRKEWL0",
   "keys": {
       "p256dh": "BBk+61o4zkRUR3KWkI4+Uvoa+JRxsSustZrrpBGTOfMhCB0zSFvIVPUiSAphtF4HJXsq1TnvzYxuw9Kab8BJha4=",
       "auth": "bGsl6XU6c9reSJJGcvPF7Q=="
   }
};
const payload = 'Holaa! Ada kabar gembira untuk kalian pecinta sepak bola!';
 
const options = {
   gcmAPIKey: '440832993548',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
).catch(function(err){
console.log(err);
});
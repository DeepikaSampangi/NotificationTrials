const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: 'AddYourApiKey',
  apiSecret: 'AddYourApiSeceret'
}, {debug: true});

function sendMessage(){
  // res.send(req.body);
  // console.log(req.body);
  const number = '918886211191';
  const text = 'Welcome to Smart Trade System.Go ahead and Create auctions or place bids';

  nexmo.message.sendSms(
    'UrNumber', number, text, { type: 'unicode' },
    (err, responseData) => {
      if(err) {
        console.log(err);
      } else {
        console.dir(responseData);
        // Get data from response
        const data = {
          id: responseData.messages[0]['message-id'],
          number: responseData.messages[0]['to']
        }

        // Emit to the client
        //io.emit('smsStatus', data);
      }
    }
  );
}
sendMessage();

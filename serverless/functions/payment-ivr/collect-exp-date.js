exports.handler = function(context, event, callback) {
    console.log(event)
    let twiml = new Twilio.twiml.VoiceResponse();

    const gather = twiml.gather({ numDigits: 4, action: '/payment-ivr/completed' });
    gather.say('Please enter your FAKE expiration date using a 2 digit month and a 2 digit year.');

    twiml.redirect('/payment-ivr/collect-exp-date')

    return callback(null, twiml);
};
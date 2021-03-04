exports.handler = function(context, event, callback) {
    // init sync document


    let twiml = new Twilio.twiml.VoiceResponse();

    const gather = twiml.gather({ numDigits: 16, action: '/payment-ivr/collect-exp-date' });
    gather.say('Please enter your FAKE 16 digit credit card number.');

    twiml.redirect('/payment-ivr/collect-cc-numbers')

    return callback(null, twiml);
};
exports.handler = function(context, event, callback) {
    // init sync document
    let twiml = new Twilio.twiml.VoiceResponse();

    twiml.say('Let\'s get started with the payment process.')
    twiml.redirect('/payment-ivr/collect-cc-numbers')

    return callback(null, twiml);
};
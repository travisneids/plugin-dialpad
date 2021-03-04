exports.handler = function(context, event, callback) {
    // init sync document
    console.log(event)

    let twiml = new Twilio.twiml.VoiceResponse();

    twiml.say('Payment Complete')

    return callback(null, twiml);
};
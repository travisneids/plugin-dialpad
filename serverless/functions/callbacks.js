exports.handler = function(context, event, callback) {

    console.log(event)

    return callback(null, 'great success!');
};
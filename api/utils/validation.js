exports.friendlyError = function(err){
    var message = err.message;

    var errCode = message.substring(0, 6);

    /*
     * MongoDB error code
     * http://www.mongodb.org/about/contributors/error-codes/
     */

    /* duplicate key */
    if(errCode == 'E11000' || errCode == 'E11001'){
        if(message.indexOf("email") !== -1){
            return "Email address is duplicated";
        }
    }

    return "Unknown error";
}
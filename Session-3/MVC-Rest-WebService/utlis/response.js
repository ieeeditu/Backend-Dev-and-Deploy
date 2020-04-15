const response = (statusCode,message,data) => {
    return {
        statusCode,
        message,
        data
    }
}

module.exports = {response};
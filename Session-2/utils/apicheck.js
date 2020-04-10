const apiKey = 'abcd1234';

function apiCheck(req,res,next) {
	if (req.headers['x-api-key'] !== apiKey) {
		return res.send('Invalid APIKey');
	}
	next();
}

module.exports = apiCheck;

const { TwitterApi } = require("twitter-api-v2");
require('dotenv').config();

const client = new TwitterApi({
	appKey: process.env.API_KEY,
	appSecret: process.env.API_KEY_SECRET,
	accessToken: process.env.ACCESS_TOKEN,
	accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

async function makeTwit() {
	const tweet = await client.v2.tweet(
		"Feeling hakaish again..."
	);

	console.log(tweet);
}
makeTwit();

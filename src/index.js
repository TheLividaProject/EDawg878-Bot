const { ShardingManager } = require('discord.js');
const config = require('../config.json');

const shards = new ShardingManager('src/bot.js', {
	token: config.token,
	totalShards: 'auto'
});

shards.on('shardCreate', shard => {
	console.log(`[${new Date().toString().split(' ', 5).join(' ')}] Started shard #${shard.id}`);
});

shards.spawn(shards.totalShards, 10000);

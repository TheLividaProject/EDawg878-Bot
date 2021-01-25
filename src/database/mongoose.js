const mongoose = require('mongoose');

module.exports = {
	init: () => {
		const dbOptions = {
			keepAlive: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			autoIndex: false,
			reconnectTries: Number.MAX_VALAUE,
			reconnectInterval: 500,
			poolSize: 5,
			connectTimeoutMS: 10000,
			family: 4
		};

		mongoose.connect('mongodb://Vibeon:Lividaisbae12310Liam@161.97.81.62:27017/Edawg878?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false', dbOptions);
		mongoose.set('useFindAndModify', false);
		mongoose.Promise = global.Promise;

		mongoose.connection.on('connected', () => {
			console.log('Mongoose has connected!');
		});

		mongoose.connection.on('err', err => {
			console.error(`Mongoose connection error: \n${err.stack}`);
		});

		mongoose.connection.on('disconnected', () => {
			console.warn('Mongoose connetion lost!');
		});
	}
};

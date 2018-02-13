class Logger {
	constructor() {
		this._logLevel = process.env.LOG_LEVEL || 'info';
		this._log = console.log;

		this._log(`Setting log level to ${ this._logLevel }`)
	}

	info(args)  {
		(this._logLevel == 'info' || this._logLevel == 'debug') && this._log.call(console, args);
	}

	debug(args) {
		this._logLevel == 'debug' && this._log.call(console, args);
	}

	error(args) {
		this._log.apply(console, args);
	}
}

const logger = new Logger();

module.exports = {
	debug: (args) => {
		logger.debug(args);
	},
	info: (args) => {
		logger.info(args);
	},
	error: (args) =>{
		logger.error(args);
	}
}

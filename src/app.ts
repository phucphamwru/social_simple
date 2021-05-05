import express from "express";
import { Route } from "@core/interfaces";
import { Logger } from '@core/utils';
import mongoose from "mongoose";
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import cors from 'cors';

export default class App {
	public app : express.Application;
	public port : string | number;
	public production : boolean;

	constructor(routes: Route[]) {
		this.app = express();	//<=> const app = express();
		this.port = process.env.PORT || 5000;
		this.production = process.env.NODE_ENV == 'production' ? true : false;

		this.initializeMiddleware();
		this.initializeRoutes(routes);
		this.connectToDatabase();
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`Server is listening on port ${this.port}`);
		});
	}

	private initializeRoutes(routes: Route[]) {
		routes.forEach((route) => {
			this.app.use('/', route.router);
		});
	}

	private connectToDatabase() {
		/*try {
			const connectString : string = String(process.env.MONGODB_URI);
			if (!connectString) {
				console.log('Connection string is invalid');
				return;
			}
			mongoose.connect(connectString,  {useNewUrlParser: true, useUnifiedTopology: true});
			console.log('Database connected...');
		} catch (error) {
			console.log('Connect to database error');
		}*/

		const connectString = process.env.MONGODB_URI;
		if (!connectString) {
			Logger.error('Connection string is invalid');
			return;
		}
		mongoose
		.connect(connectString,  {useNewUrlParser: true, useUnifiedTopology: true})
		.catch((reason) => {
			Logger.error(reason);
		});;

		Logger.info('Database connected...');
	}

	private initializeMiddleware() {
		if (this.production) {
			this.app.use(hpp());
			this.app.use(helmet());
			this.app.use(morgan('combined'));
			this.app.use(cors({ origin: 'your.domain.com', credentials: true }));
		} else {
			this.app.use(morgan('dev'));
			this.app.use(cors({ origin: true, credentials: true }));
		}
	}
}
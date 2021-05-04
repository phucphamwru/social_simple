import express from "express";
import { Route } from "core/interfaces";
import mongoose from "mongoose";

export default class App {
	public app : express.Application;
	public port : string | number;

	constructor(routes: Route[]) {
		this.app = express();	//<=> const app = express();
		this.port = process.env.PORT || 5000;

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
		try {
			const connectString : string = String(process.env.MONGODB_URI);
			if (!connectString) {
				console.log('url error');
			}
			mongoose.connect(connectString,  {useNewUrlParser: true, useUnifiedTopology: true});
			console.log('Database connected...');
		} catch (error) {
			console.log('Connect to database error');
		}

	}
}
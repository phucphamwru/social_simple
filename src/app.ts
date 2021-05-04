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
			/*const connectString =
			'mongodb+srv://tedu:LLrvB941gFsxcQmz@master.0rrty.mongodb.net/tedu_social?retryWrites=true&w=majority';
			mongoose.connect(connectString, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true
			});*/
			mongoose.connect('mongodb://localhost:27017/social_simple',  {useNewUrlParser: true});
			console.log('Database connected...');
		} catch (error) {
			console.log('Connect to database error');
		}

	}
}
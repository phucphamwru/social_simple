# social_simple
Social network apprentice

Open terminal command windows: ctrl + `
npm init or yarn init

git init

git commit -m "Initial commit"

git config --global user.name "Phuc Pham"

git config --global user.email "phucpv62@wru.vn"

git remote add origin https://github.com/phucphamwru/tedu_social

git remote -v

git remote show origin

git push -u origin master

tsc --init

Reference:
 "target": "es6"
 "module": "commonjs"
 "sourceMap": true
 "outDir": "./dist"
 "rootDir": "./"
 "moduleResolution": "node"
 "baseUrl": "./src"
 "experimentalDecorators": true


# lession 12
- Create folder 'src'
- yarn add express (frameword NodeJS - Server)
	"dependencies": {
    "express": "^4.17.1"
  }
  +) "dependencies" - chay tren moi truong Production.
  +) "devDepdencies" - chi chay trong moi truong dev.
- yarn add @types/express --dev 	: use typescript.
- create file server.ts (in folder 'src') - is strong type.

- yarn add typescript nodemon ts-node --dev
	"nodemon": "^2.0.7",
    "ts-node": "^9.1.1",
    "typescript": "^4.2.4"

- yarn server : run project

# lession 13
- MVC:
	+ M - model
	+ V - view
	+ C - controller
- Create folder core (noi chua dung chung) 
- Create folder modules (chua cac chuc nang chinh cua Project)
	+ index : import va export moi thu trong modules
	+ model : tuong tac voi du lieu
	+ service : xu li logic
	+ controller : dieu huong - phan luong
	+ route : dinh nghia url
	+ interface : noi dinh nghia cac thanh phan cua 1 module.


# lession 14
- yarn add mongoose
- yarn add @types/mongoose --dev

# lession 15
- yarn add dotenv
- yarn add cross-env --dev


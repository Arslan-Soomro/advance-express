# advance-express
A template to show how express applications with different routes can be deployed to vercel

# Cautions
+ Put you api entry file in the root and must name it index.js
+ If you are using sequelize and upload to vercel and get a message saying you need to install mysql2 package manually, you need to provide the sequelize constructor not only the dialect but dialectModule too, and set it too the mysql2 pacakge e.g.: ```sequelize = new Sequelize(process.env.DB_URI, { dialect: 'mysql', dialectModule: require('mysql2') })```

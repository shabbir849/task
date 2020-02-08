# task
 Interview Task
NOTE: We don`t need to push node_modules into github repo . 
Add node_modules to gitignore and when you deploy your code on the server you have to install node_modules over there using 
command: npm install
As your package.json is updated when you locally install node_modules and it is pushed to repo . When you run npm install on the server , all your packages will be installed which are mentioned in package.json

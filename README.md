# OneFootball Stage Visualizer

Based on a simplified version of the ngBoilerplate angular project template.
This application downloads json file and based on its data builds human-ready
UI.

## How to start

Create new directory
`mkdir oneFootball`

Clone this repository
`git clone https://github.com/softbeehive/1f.git oneFootball`

Go to directory
`cd oneFootball`

Make sure you have recent version of node v0.12+, old node could be an issue
when installing yeoman
```
node --version
npm --version
```

Great, you are up-to-date then you can install dependencies globally by running 
command
`npm i -g yo bower generator-ngbp generator-karma grunt-cli`

Note: don't run npm with sudo, it's potentially problematic

If you don't like installing node modules globally, install them locally within 
working directory, which is `oneFootball`

Once you have major dependencies, it's time to run
```
npm install
bower install
```

You are ready to start application
`grunt watch`

Your browser URL is
`http://localhost:9000/`

Good luck!

## Issues

Please create an issue within this repository, appreciate your help

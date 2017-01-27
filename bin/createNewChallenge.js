#! /usr/bin/env node
const path = require('path');
const moment = require('moment');
const mkdirp = require('mkdirp');

const challengeName = process.env.npm_config_challengeName;
const challengeDate = moment().format('MM/DD/YYYY').split('/').join('-');

if (!challengeName) {
	return console.error(new Error('You must provide a challenge name'));
}

if (!challengeDate) {
	return console.error(new Error('The date could not be found'));
}

const challengePath = path.resolve(process.cwd()) + '/' + challengeDate + '-' + challengeName;

mkdirp(challengePath, function (err) {
    if (err) console.error(err)
    else console.log('New Challenge Created!')
});


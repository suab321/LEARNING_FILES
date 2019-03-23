/* 
 * Copyright (c) 2015 Michel Gutierrez
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 */

var modPackage = require('./package');
var fs = require('fs');

exports.version = modPackage.version;
exports.name = "chitika";
exports.title = "Chitika";
exports.sizes = ["160x160","250x250","200x200","300x150",
                 "300x600","336x280","468x90","468x180",
                 "468x250","500x200","500x250","550x120",
                 "550x250","728x90"];
exports.settings = [{
	name: "pubid",
	title: "Publisher ID",
	type: "text",
	placeholder: "Publisher ID",
	defaults: "",
}];
exports.bannerSettings = [{
	name: "sid",
	title: "Chitika SID",
	type: "text",
	placeholder: "SID (optional)",
	defaults: "",
}];
exports.template = fs.readFileSync(__dirname+"/template.ejs","utf-8");

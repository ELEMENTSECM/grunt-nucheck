/*
* grunt-nucheck
*
* Copyright (c) 2014 Gecko Informasjonsystemer AS
* Licensed under the MIT license.
*/

'use strict';
var spawn = require('child_process').spawn;
var path = require('path');
var fs = require('fs');
var nucheckPath = path.join(__dirname, "../libs/NuCheck.exe");
module.exports = function(grunt) {

// Please see the Grunt documentation for more information regarding task
// creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('nucheck', 'Verify that there are no duplicate versions of a nuget package', function() {
		var done = this.async();
		
		var options = this.options({
			pattern: ""
		});
		
		var args = [];
		if(this.filesSrc.length === 0) {
			grunt.fail.warn("Missing solution file in 'src'");
		}
	
		args.push(this.filesSrc[0]);
		
		if(options.pattern) {
			args.push(options.pattern);
		}
        
		var process = spawn(nucheckPath, args);

	    process.stdout.on('data', function (data) {
		    grunt.log.write(/*'stdout...' +*/ data)
        });
	    process.stderr.on('data', function (data) {
	        grunt.log.error(/*'stderr...' +*/ data);
        });

	    process.on('exit', function (code) {
            if (code !== 0) {
                grunt.fail.warn('Solution contained multiple versions of one ore more packages');
            }
            done();
        });
    });
};



# grunt-nucheck

> Verify that there are no duplicate versions of a nuget package

This is just a thin grunt task wrapper around the excellent tool [nucheck on github](https://github.com/mbenford/nucheck).

## Getting Started
This plugin requires Grunt `~0.4.5`. In other words it should work on 0.4.5 or higher.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-nucheck --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-nucheck');
```

## The "nucheck" task

### Overview
In your project's Gruntfile, add a section named `nucheck` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    nucheck: {
        dev: {
            src: "Source/MySolution.sln", // Relative path to solution file
			options: {
				// Listing all currently supported options
				pattern: "ServiceStack*" // Optional pattern to match package name. Support wildcards
			}
        }
    }
});
```

## Contributing
We appreciate the community submiting issues and pull requests. 

## Issues and installing previous versions

If you have any problems with the latest release please log an issue at https://github.com/GeckoInformasjonssystemerAS/grunt-nucheck/issues.

If you need to roll back to an earlier version you can use the following syntax to install a specific version

```
npm install grunt-nucheck@0.1.2
```

Also see https://www.npmjs.org/doc/json.html#dependencies for details of how to specify a particular package version in your package.json file

## Release Notes

|Version| Notes|
|-------|------|
|0.0.3|Removed debug output accidentally left behind.
|0.0.2|Initial commit basic functionality of exposing nucheck.
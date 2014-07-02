Package.describe({
  summary: "A wrapper around the node-json2html module"
});

Npm.depends({'node-json2html':'0.4.1'});

Package.on_use(function (api) {
	api.add_files('jsontohtml.js', ['server']);
});
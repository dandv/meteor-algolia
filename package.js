Package.describe({
  name: 'bozhao:algolia',
  summary: 'Package to handle the blazing fast Algolia search egnine (client and server)',
  version: '1.7.7',
  git: 'https://github.com/yubozhao/meteor-algolia.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('server.js', 'server');
  api.addFiles('algoliasearch.js', 'client');
  api.export('Algolia', 'server');
  api.export('algoliasearch', 'client');
});

Npm.depends({
  'algolia-search': '1.7.7'
});

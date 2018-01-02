#!/usr/bin/env node

const fetch = require("node-fetch");

exports.search = function(query) {
  fetch(`http://search.maven.org/solrsearch/select?rows=5&wt=json&q=${query}`)
    .then(res => res.json())
    .then(json => json.response.docs)
    .then(docs => {
      if (docs.length == 0) {
        console.log(`No result for ${query}`);
      } else {
        console.log(`Found ${docs.length} results`);
        docs.forEach(element => {
          console.log(`  ${element.id}:${element.latestVersion}`);
        });
      }
    })
    .catch(e => console.error(e));
};

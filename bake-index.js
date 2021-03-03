var lunr = require('lunr'),
    stdin = process.stdin,
    stdout = process.stdout,
    buffer = [];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (data) {
  buffer.push(data);
});

stdin.on('end', function () {
  var documents = JSON.parse(buffer.join(''));

  var idx = lunr(function () {
    this.ref('url');
    this.field('title');
    this.field('keywords');
    this.field('body');

    documents.forEach(function (doc) {
      this.add(doc);
    }, this);
  });

  var index = {
    "index": idx,
    "store": {}
  };

  documents.forEach(function (doc) {
    index.store[doc.url] = doc;
  });
  stdout.write(JSON.stringify(index));
});

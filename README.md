![Group Logo](http://bioinformatics.mdc-berlin.de/img/GroupLogo.png)

## Introduction to Unix and Grid Engine for beginners

This is a guide on using Unix-like systems and the Grid Engine cluster
environment.

The first chapter will introduce basic usage for Unix-like
systems. The second chapter will explore the Grid Engine environment
and show how to use the queuing system from users perspective.

###  What will you get out of this ?

After reading, you will:

* be able to use the command line interface to navigate the file system
* use the command line to interrogate files
* understand and write basic shell scripts
* understand Grid Engine and queueing system
* be able to submit jobs to a Grid Engine cluster and troubleshoot

### Contribute to the development

You can contribute to the development of this guide using GitHub
features such as pull-requests and issue creation.


### Build the book

This book is compiled with pandoc.

Run `guix environment -m manifest.scm` to enter a suitable environment
to hack on this book.  Then run `npm ci` to install the lunr
JavaScript library for the search index.


### How to update the book

Edit the .md files using markdown syntax and run **bash
build.sh**. This will regenerate the book and store the files in the
`book` directory.

Checkout the **gh-pages** branch.  The contents of this branch are
served by GitHub pages.  Synchronize the contents of the `book`
directory with the root directory of that branch, commit the changes
and push them.

```
bash build.sh
... # commit your changes
git checkout gh-pages
rsync -azvhr book/ ./
... # stage the changed files
git commit -m 'Update book'
git push origin gh-pages
```

### Acknowledgements

Initially created by Altuna Akalin. Some of the material is based on
Martin Siegert's documentation of the Grid Engine cluster.

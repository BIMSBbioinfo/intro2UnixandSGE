![Group Logo](http://bioinformatics.mdc-berlin.de/img/GroupLogo.png)

## Introduction to Unix and Grid Engine for beginners

This is a guide on using unix systems and the Grid Engine cluster
environment.

First chapter will introduce basic usage for unix systems. The second
chapter will explore the Grid Engine environment and show how to use the queuing
system from users perspective.

###  What will you get out of this ?

After reading, you will:

* be able to use unix commands to navigate the file system
* use unix commands to interrogate files
* understand and write basic bash scripts
* understand Grid Engine and queueing system
* be able to submit jobs to a Grid Engine cluster and troubleshoot

### Contribute to the development

You can contribute to the development of this guide using github
features such as pull-requests and issue creation.


### Build the book

This book is compiled with pandoc.

Run `guix environment -m manifest.scm` to enter a suitable environment
to hack on this book.  Then run `npm install` to install the lunr
JavaScript library for the search index.


### How to update the book

Edit the .md files using markdown syntax and run **bash
build.sh**. This will regenerate the book and store the files in the
`book` directory.  Copy the contents of this directory to the
**gh-pages** branch (the contents of this branch are served by GitHub
pages) and push those changes to **"gh-pages"** branch of the online
repository. You should also commit the changes you made in the
**"master"** branch via `git commit`. Basically, **"master"** branch
has the markdown files, **"gh-pages"** branch has the html website.


### Acknowledgements

Initially created by Altuna Akalin. Some of the material is based on
Martin Siegert's documentation of the Grid Engine cluster.


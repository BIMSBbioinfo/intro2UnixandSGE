![asd](http://bioinformatics.mdc-berlin.de/img/GroupLogo.png)






# Introduction to Unix and SGE for beginners



This is a guide on using unix systems and Sun Grid Engine(SGE) cluster environment.

First chapter will introduce basic usage for unix systems. The second chapter will explore SGE environment and show how to use the queuing system from users perspective.

##  What will you get out of this ?

After reading, you will:

* be able to use unix commands to navigate the file system
* use unix commands to interrogate files
* understand and write basic bash scripts
* understand SGE and queueing system
* be able to submit jobs to SGE cluster and troubleshoot

## Contribute to the development

You can contribute to the development of this guide using github features such as pull-requests and issue creation.

### how to update the book
edit the .md files using markdown syntax and run **update_book.sh** as in `bash update_book.sh -m 'my commit message'`. This will create the html from the .md files, re-create **gh-pages** repository (gh-pages serves the html pages) and push those changes to **"gh-pages"** branch of the online repository. You should also commit the changes you made in the **"master"** branch via `git commit`. Basically, **"master"** branch has the markdown files, **"gh-pages"** branch has the html website.

You may need to pull the repository, make changes and then create pull-request if you want your changes to be merged with the main repository. This may depend on your privileges [to be edited with more accurate information].


## Acknowledgements
Initially created by Altuna Akalin. Some of the material is based on Martin Siegert's documentation of SGE cluster.


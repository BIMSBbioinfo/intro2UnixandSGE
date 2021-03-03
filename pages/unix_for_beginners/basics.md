# The Shell

The traditional and arguably most effective way to interact with a
Unix-like system is through a special programme called "shell".  A
shell can be used interactively as a command line interface or as a
batch processor.

In the following screenshot you can see what a shell environment looks
like on MacOS.  You see four terminal windows in a graphical user
interface, running different shells (a descendent of the original
shell `sh`, and `tcsh`).

![alt](http://upload.wikimedia.org/wikipedia/en/8/8c/TcshAndShScreenCapture.png)

In this tutorial we assume that the popular GNU shell `bash` is used
instead.


## What is GNU?

According to the [GNU website](http://gnu.org),

> GNU is a Unix-like operating system that is free softwareit respects
> your freedom. You can install versions of GNU (more precisely,
> GNU/Linux systems) which are entirely free software.

> The GNU Project was launched in 1984 to develop the GNU system. The
> name “GNU” is a recursive acronym for “GNU's Not Unix!”.

Although GNU is by its own admission "not Unix", the GNU system is one
of the most popular modern implementations of a Unix-like system.
Many of the GNU applications (including the `bash` shell) are
available for other operating systems as well.


## Starting a shell session

We highly recommended that a Unix-like system be used for this course.
If this is not an option for you and you are tied to Microsoft
Windows, you should install
[Cygwin](http://en.wikipedia.org/wiki/Cygwin), a Unix-like environment
for Windows.  If you have remote access to a system running a
Unix-like operating system such as GNU/Linux, it may be sufficient to
install [PuTTY](http://en.wikipedia.org/wiki/PuTTY), a terminal
application for accessing remote systems over the SSH protocol.  Many
Windows users use PuTTY to connect to remote servers, such as the
login node of a cluster.

Let's start a shell session!

* In Mac OS X, go to "utilities" and start "terminal"
* In Windows open the Cygwin terminal or use PuTTY to connect to a
  remote Unix host
* If you are using GNU/Linux, start your preferred terminal
  application (e.g. xterm, urxvt, konsole, terminal, etc.)


## What are commands?

The shell interprets text as commands.  In interactive mode the user
inputs text commands on the command line prompt and submits them for
processing; the shell reads from the "standard input" stream
(connected to the keyboard).  In batch processing mode, on the other
hand, the shell reads commands from a specified file, called a
"script".  By default, the shell is configured to print all potential
output of the commands to the screen.

Any command line consists of one or more words; the first word is the
*name* of the command itself, whereas anything that follows belongs to
the *arguments* to the command.

Arguments are passed to the command.  They can be *switches* or
*options* (indicated by the `-` prefix) to modify the behaviour of the
command, patterns, the names of files to operate on, etc.  The meaning
of the arguments depends on the command.

The below example shows the `ls` command (which lists the files in a
given directory) without any arguments and run with the `-l` option.
(The `$` stands for the shell prompt and is not part of the command.)

~~~
$ ls
Documents

$ ls -l
total 0
drwxr-xr-x  22 root    staff   748 May 26 19:08 Documents
~~~

As you can see, the `-l` option changed the output of the `ls`
command.


## Getting help

* **Man pages**.  Type "man commandName", such as `man ls`. this will return the
  manual page on the given command. Most unix commands have extensive
  explanations and examples on those pages.  Type `q` on your keyboard
  to quit the manual view.
* **Info manuals**.  All GNU software comes with extensive manuals,
  called info pages.  You can read them with the `info` programme on
  the command line or from within Emacs.  Type `info ls` for the `ls`
  manual page.  The info pages are hypertext documents with a
  hierarchical structure and links.  When in `info`, type `H` to learn
  how to use info.  To open info documentation inside of Emacs issue
  the command "Ctrl-h i".
* **Web search**.  Search online for the command followed by "+ unix"
  or "+ linux", this will usually return forums and webpages about the
  command.  Look for example usage and explanations.

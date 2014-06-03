# Basics
You will interact with the unix sytem via special program called *shell*. You type commands to the shell which are send to the operating system. Output of the commands as well as warnings and errors usually be directed back to the shell. However, not every command will write back their output to the shell.  The shell is basically a command line interface. Here is what a shell environment looks like:
![alt](http://upload.wikimedia.org/wikipedia/en/8/8c/TcshAndShScreenCapture.png)

Commands are composed of two parts: the name of the command itself and arguments. Arguments alter the behavior of the commands or denote the targets of the commands. The below example shows ***ls*** command (which lists the files in a given directory) with different arguments. If arguments have "-" in front it means they are options which change the behaviour of the command. Below ***ls*** command is run with and without a **-l** option.

```
user:tmp user$ ls
npm-34252-LVM-q+Ri

user:tmp user$ ls -l
total 0
drwxr-xr-x  22 root    staff   748 May 26 19:08 npm-34252-LVM-q+Ri

```

# How can I start the shell ?

* In Mac OS X, go to utilities and start "terminal"
* In Windows, you need to install [Cygwin](http://en.wikipedia.org/wiki/Cygwin) or [PuTTY](http://en.wikipedia.org/wiki/PuTTY). Cygwin is a unix-like environment for windows. PuTTY is a terminal emulator capable of remote connection to unix/linux servers. Many windows users use PuTTY to connect to remote servers, such as login node of clusters.
* If you are using linux, you should already know how to start the shell.

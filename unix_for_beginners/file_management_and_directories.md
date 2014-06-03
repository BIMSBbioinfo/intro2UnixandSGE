# File management and directories



## Directories
File and directory paths in UNIX use the forward slash "/"
to separate directory names in a path. If you are using a server your shell will start from /home/yourUserName/ directory. Also have a look at the conventional directory layout [here](http://en.wikipedia.org/wiki/Unix_filesystem#Conventional_directory_layout).

Here are a few examples of the directory strcucture:

| directory | explanation |
| -- | -- |
| `/` | "root" directory |
| `/usr`  | directory usr (sub-directory of / "root" directory)|
| `/usr/local` | local is a subdirectory of /usr |



## Moving around the file system with cd
***cd*** command stands for "change directory" lets you move around the file system. Here are a few examples of the ***cd*** command and ***pwd***.

Type variants of these to your shell to move around your file system.

| Command + arguments| explanation |
| -- | -- |
| `pwd`  |Show the "present working directory", or current directory. |
| `cd` | Change current directory to your HOME directory. |
| `cd /usr/local` |Change current directory to /usr/local  |
| `cd INIT` | change current directory to INIT which is a sub-directory of the current |
| `cd ..` | Change current directory to the parent directory of the current|
| `cd ~akalin`| Change the current directory to the user akalin's home directory (if you have permission).|



## Listing directory contents
***ls*** command lists the contets of a directory.

## Moving, renaming and copying files

## See disk usage and free disk space with du and df

## Deleting files and directories
Use these with caution.

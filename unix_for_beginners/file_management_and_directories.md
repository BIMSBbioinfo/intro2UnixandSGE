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

### Creating a directory

**mkdir** command creates a new directory. The command below creates a new directory named "newDir" under the current directory.
```
$ mkdir newDir
```

This command creates a new directory in user's home directory.
```
$ mkdir ~/newDir
```

The next command creates a the target directory and all the non-existing directories in the path. The command will create samtools directory, and will create "opt" directory if it does not exist. All of this will be done in user's home directory as indicated by "~/" in that path.

```
$ mkdir -p ~/opt/samtools
```

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
***ls*** command lists the contets of a directory. It can take multiple options, some of those are explained below.

| commands | explanation |
| -- | -- |
| `ls`| list a directory |
| `ls -l` | list a directory in detailed format |
| `ls -a` | List the current directory including hidden files. Hidden files start with "." |
| `ls -ld *` | List all the file and directory names in the current directory using  long format. Without the "d" option, ls would list the contents of any sub-directory of the current. With the "d" option, ls just lists them like regular files. |
| `ls -lh ` | list detailed format this time file sizes are human readable not in bytes |




## Moving, renaming and copying files
***cp*** command **copies** the files and ***mv*** command **moves** the files. They are generally used with two main arguments. `cp target_file destination_file` or `mv target_file destination_file`.

| commands | explanation |
| -- | -- |
|`cp file1 file2`|          copy file1 as file2
|`cp /data/seq_data/file1  ~/`|          copy file1 at /data/seq_data to your home directory.
|`mv file1 newname` |        move or rename a file|
|`mv file1 ~/opt/` |         move file1 into sub-directory opt in your home directory.|

## Finding files
find examples

## Searching the contents of a file
grep examples

## See disk usage and free disk space with du and df

## Deleting files and directories
Use these with caution.

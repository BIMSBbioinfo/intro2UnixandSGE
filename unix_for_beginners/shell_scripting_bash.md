# Shell scripting (bash)

## What is a shell script?
A shell script is a text file with a list of shell commands and it is executed like a program to perform a task or a set of tasks. The primary aim of a shell script is to automate tasks and save time. **It is important to understand basic structure of a shell script, since it is you interact with a computing clusters via shell scripts (See next chapter on Sun Grid Engine)**

## what is Bash ?
There are many different shells available in Unix systems. Bourne Again Shell (Bash) is one of them, it is the default shell on Linux and MacOS X. It has some advantages to other shells and pretty much the standard shell, and we will show how to use it for scripting below.

## Writing a simple bash shell script
A basic shell script is just a series of commands. That is what we will show next.

Let us write a simple script that outputs "hello world" on the screen using the `echo` command. We will save the text file as `myScript.sh`

```
  #!/bin/bash
  echo Hello World
```
**executing a shell script**
syntax:`bash your-script-name`. In our case, we write:

```
$ bash myScript.sh
Hello World
```
### more complicated example
Let's write a bit more complicated script using more of the shell commands. The script uses the `ls` to list the files and uses `wc -l` command which counts number of lines in a given file or standard input. In this case, `wc -l` counts the number of lines in the output of `ls -l`. All this achieved by using pipe `|`.

contents of script.sh:
```
 #!/bin/bash
 echo here are the list of files
 ls -l

 echo  The number of files:
 ls -l | wc -l

```
We can execute it as follows:
```
$ bash script.sh
```
### variables in bash scripts
You can also use variables in bash scripts. Which are useful to capture the output of intermediate commands and use them to run other commands.There are no data types for variables. A variable in bash can contain any of the following: a number, a character or a string of characters.

You do not need to declare a variable, just assigning a value to its reference will create it.

Now we will create a simple script with one variable. We will assign `Hello world` string to that variable and print that variable with `echo`.
```
 #!/bin/bash
 VAR="Hello world"

 echo  $VAR

```
When assigning the variable we did not use the `$` sign, but when using the variable we had to use the `$` sign.

### command line arguments in bash scripts
The script can also take command line arguments. Here we modify the script that lists the file to take a command line argument. The argument will be a path to a directory.


contents of script2.sh:
```
 #!/bin/bash
 VAR=$1
 echo here are the list of files
 ls -l $VAR

 echo  The number of files:
 ls -l $VAR | wc -l

```

Here is how you run the script:
```
$ bash script2.sh /home/user/project
```
The arguments are stored in variables with a number in the order of the argument starting at 1
* First Argument: $1
* Second Argument: $2
* and so on...

In the our case, `$1` corresponds to `/home/user/project`.


### Arithmetic operations bash scripts
Arithmetic operations on integers in bash are done in the following format:
```
#!/bin/bash
x=6
y=2
$((10 - 5))
$((x-y))

echo $((x-y))
echo $((10-5))
```
You can also copy paste these commands to the console to see how they work. The `echo` commands should output `4` and `5`.

Bash arithmetic does not support floating points (e.g. 1.3 -1  operation will not work in bash), you need to use `bc` command. See [this stackOverflow example](http://stackoverflow.com/questions/12147040/division-in-script-and-floating-point) for an example on how to use  `bc`.

### Looping over files
If you are trying to automate a task using bash scripting, it is very likely you will have to apply certain commands on each file in a directory. This could be achieved with wild character`*` and `for` loops. The following script stores all the '.txt' files in `/path/to` directory in `FILES` variable. Then, for each file it calculates number of lines and outputs that with `wc -l` command.

```
#!/bin/bash
FILES=/path/to/*.txt
for f in $FILES
do
  echo "Processing $f file..."
  # count number of lines and output that for file $f
  wc -l $f
done

```


## More on bash scripts
You can write even more complicated shell scripts using control structures (if/else, for/while loops) and achieve a lot just using the shell scripting, but that is beyond the scope of the document. See the links below if you want to get better at writing shell scripts.


* http://www.freeos.com/guides/lsst/
* http://www.tldp.org/LDP/Bash-Beginners-Guide/html/

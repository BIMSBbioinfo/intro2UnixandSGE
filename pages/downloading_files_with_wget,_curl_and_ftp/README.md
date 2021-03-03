# Downloading files with wget, curl and ftp
You will often need to download files using the shell interface. There are multiple options on Unix-like systems that will allow you to do that. Below are a few examples.

## wget
**wget** can be used to download files from internet and store them. The following command downloads a compressed archive from the web and stores it in the current directory.

```
$ wget http://www.openss7.org/repos/tarballs/strx25-0.9.2.1.tar.bz2
```

The **-O** option can be used to change the output file name.

```
$ wget -O strx25.tar.bz2 http://www.openss7.org/repos/tarballs/strx25-0.9.2.1.tar.bz2
```

You can also use `wget` to download a file list using **-i** option and giving a text file containing file URLs. Here is an example:

```
$ cat > download-file-list.txt
URL1
URL2
URL3
URL4

$ wget -i download-file-list.txt
```

## curl


## ftp

# Editing, viewing and concatenating text files
In many cases, you would want to see what is in a text file or edit a file, or create one from scratch. There are multiple ways to view the files.


### cat : print the content of a file
`cat` will print the whole content of the text file to your shell, if you don't redirect the output to another file. Here is how it works:
```
$ cat log.txt
AD 123
AA 233
Ad 443
$
```

### head or tail: Print beginning or end of a file
If you would like to display only the beginning of a file or the end, you can use `head` or `tail`. `head` shows the beginning and `tail` the end. Here we look at beginning and the end of `example.fastq` file, which contains reads from a next-generation sequencing experiment.

```
$ head example.fastq
@DJG60NM1:206:C2L3LACXX:1:1101:1934:1996 1:N:0:GCCAAT
NTTTGTAGAACCTTTTGTAATTCTGCTTATATTGGTAGCCAATGCAATTGT
+
#1=DFFFFHHHHHIJJIIIIJJFIJJJJIJJJJIIIJJIJJIJIJJIIJJG
@DJG60NM1:206:C2L3LACXX:1:1101:2193:1996 1:N:0:GCCAAT
NGAATCACCCCTTTAAATCCCCTAGAAGTACCCCTTCTAAATACATCAGTC
+
#1=DDDFFHHHHHJIIJIJIJJGIGIHI?FHGIJIJIJIJIFIEEIGJBBE
@DJG60NM1:206:C2L3LACXX:1:1101:2277:1999 1:N:0:GCCAAT
NTTTAATAATGCGCTCCCCAAACAGAACAGCACCACCACTGGGGTCTCCGT
$
$
$ tail example.fastq
@DJG60NM1:206:C2L3LACXX:1:1101:2023:1996 1:N:0:CAGATC
NTTGAAGTTAAATTTGGGAACTCATAGGAAATAAAGGAGCATGAACCAAGG
+
#1=DDDFFHHHHHJJIJJIJJJJIJJJJIIJJJJJJJJJJJJIJJJJJJJI
@DJG60NM1:206:C2L3LACXX:1:1101:2057:2000 1:N:0:CAGATC
NGGTTGGTGGGCTGATGTCTATAAGTACTAGGGTAGCTCCTCCGATTAGAT
+
#1:4ABDDDDD?D@DEEEBFFFEIEEBBEDD;BC?DEDEBBDDD6BD@B8B
@DJG60NM1:206:C2L3LACXX:1:1101:2305:1999 1:N:0:CAGATC
NGTATTTCATGTGGTATAAGCATCTGGATAATCAGAGTAACGACGAGGTAT
```

### more and less: Read files page by page
In some cases, you may want to look at a large file page by page. If you use `cat`, the whole file will be printed at once. It is inconvenient to use that if you want to inspect a large file. Instead you can use `more` or `less`, to view the files page by page.


### creating text files with echo
`echo` command prints the argument on the shell. See the following example.

```
$ echo hello world
hello world
$
$ echo here it is
here it is
```
However, you can also use echo to write files using `>`. When you finish typing just add `> filename.txt` and the output will be written on `filename.txt`

```
$ echo hello world > myfile.txt
$
$ cat myfile.txt
hello world
$
```

## Editing and creating files using Emacs
Emacs is a text editor that you can invoke using `emacs` shell command. It is a powerfull text editor used by programmers and system adminstrators to create and manipulate text file, as well as, writing programs. Detailed introductions to emacs is beyond the scope of this document, but you can [follow this link](https://www.gnu.org/software/emacs/tour/) to learn more about emacs.

You can open a text document using the `emacs filename` command. Once Emacs is started, you can type the content of the text file using your keyboard and save the file using `C-x C-s`, which means you have to type Ctrl+x then Ctrl+s, and your file will be saved. You can quit an Emacs session using `C-x C-c`.


# Editing and creating text files using vi
vi is another popular text editor with a somewhat arcane modal command language.  Like Emacs it has a devoted user community. People [often argue](http://en.wikipedia.org/wiki/Editor_war) which one is the best. Long story short, Emacs is the best (and it has support for vi-like operation with `evil-mode`). But if you want to learn more about vi, [follow this link](http://www.howtogeek.com/102468/a-beginners-guide-to-editing-text-files-with-vi/).


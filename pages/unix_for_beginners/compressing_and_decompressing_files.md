# Compressing and decompressing files

UNIX systems usually support a number of utilities for backing up and compressing files. Below we will show tar,gzip and zcat utilities

## tar (tape archiver)
tar backs up entire directories and files as an archive. An archive is a file that contains other files plus information about them, such as  their filename, owner, timestamps, and access permissions. tar does not perform any compression by default.

To create a disk file tar archive, use

    $ tar -cvf archivename filenames

where archivename will usually have a .tar extension, so `tar -cvf archivename.tar filenames`. The *c option* means create, the *v option* means verbose (output filenames as they are archived), and *option f* means file.To list the contents of a tar archive, use

    $ tar -tvf archivename

To restore files from a tar archive, use

    $ tar -xvf archivename


## compressing files with gzip
gzip is a utility for compressing and decompressing individual files. To compress files, use:

    $ gzip filename

The filename will be deleted and replaced by a compressed file called filename.Z or filename.gz. To reverse the compression process, use:

    $ gzip -d filename

## viewing compressed text files with zcat
zcat uncompresses the file and writes content to the standard output (which usually means the output will be on your shell screen). The following decompresses the files and writes the content on the standard output.

 `$ zcat geneList.gz`

or in some systems:

 `$ gzcat geneList.gz`

If the file is big and you just want to see what is in it (first few lines), you can combine zcat with **head**, you will see more of this in the next section, here is an example.

 `$ zcat geneList.gz | head`

"|" allows piping commands together. **head** command is applied on the output of **gzcat** command.

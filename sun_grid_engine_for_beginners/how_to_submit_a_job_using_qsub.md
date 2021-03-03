# How to submit a job using qsub
`qsub` is a command used for submission to the SGE cluster. In the section 2.1 Quickstart and basics, we showed that you can submit an example job using qsub as follows:
```
username@max-loginX:~$ qsub -V -b n -cwd runJob.sh
Your job 1 ("runJob.sh") has been submitted
```
The general syntax of how to use qsub is below.
```
qsub -q <queue> -w e -N <job_name> -l h_vmem=<memory, e.g. 4G> -l h_rt=<time> -l s_rt=<time> -pe smp <num_slots> -o <outputlogfile> -e <errorlogfile> <pathtoScript> <arg1> <arg2>
```

Here are the some of the options and their explanations.

* `-q <queue>`   set the queue. Often you will use the standard queue, so no need to set this up.

* `-V`  will pass all environment variables to the job
* `-v var[=value]`   will specifically pass environment variable 'var' to the job
* `-b y`  allow command to be a binary file instead of a script.
* `-w e`  verify options and abort if there is an error
* `-N <jobname>`  name of the job. This you will see when you use `qstat`, to check status of your jobs.
* `-l h_vmem=size` specify the amount of maximum memory required (e.g. 3G or 3500M) (NOTE: This is memory per processor slot. So if you ask for 2 processors total memory will be 2 * hvmem_value)
* `-l h_rt=<hh:mm:ss>` specify the maximum run time (hours, minutes and seconds)
* `-l s_rt=hh:mm:ss` specify the soft run time limit (hours, minutes and seconds) - Remember to set both s_rt and h_rt.
* `-pe smp <n_slots>` This specifies the parallel environment. `smp` runs a parallel job using shared-memory and n_processors amount of cores.
* `-cwd` run in current working directory
* `-wd <dir>`  Set working directory for this job as `<dir>`
* `-o <output_logfile>` name of the output log file
* `-e <error_logfile>` name of the error log file
* `-m ea` Will send email when job ends or aborts
* `-P <projectName>` set the job's project
* `-M <emailaddress>` Email address to send email to
* `-t <start>-<end>:<incr>` submit a job array with start index <start>, stop index <end> in increments using <incr>

You can see full list of arguments and explanations [here](http://gridscheduler.sourceforge.net/htmlman/htmlman1/qsub.html).

Now let's see some example bash scripts and qsub commands that submit those jobs to the cluster.
### Submitting a bowtie job
[Bowtie](http://bowtie-bio.sourceforge.net/) is a short-read aligner used to align reads from next-gen sequencing machines. The script includes the commandline options within it, so no need to pass those options on the commandline. In a shell script, you can set the qsub options in lines that begin with #$. This an alternative to passing them with the qsub command.

```
#!/bin/bash
#$ -N run_bowtie2
#$ -cwd
#$ -pe smp 6
#$ -l h_vmem=6G


infile=/data/bioinfo/READS2/R1_001.fastq.gz
outfile=/data/bioinfo/READS2/aln/R1_001.sam
btindex=/data/bioinfo/genome_data/Caenorhabditis_elegans/UCSC/ce10/Sequence/BowtieIndex/genome

gzip -dc $infile | bowtie  --chunkmbs 300 --best -m 1 -p 6 --phred33 -q $btindex   -  -S $outfile

```


* Since the options we care about are in the script, we do not need to pass them with the qsub command. The lines starting with `#$` are the qsub options described above. They customize the job and ask for resources such as CPU and memory.
* The input/output files for the bowtie command are stored in `infile`,`outfile` and `btindex` variables. Then, passed to the bowtie command. This is not really necessary but it is easier to read later on what is going on.

* The execution of bowtie starts with the `gzip -dc ...`. Since fastq files are compressed we first need to decompress them and feed the output to bowtie via `|` pipe.
* `--chunkmbs 300 --best -m 1 -p 6 --phred33 -q` are bowtie specific options. Look them up in the [Bowtie manual](http://bowtie-bio.sourceforge.net/).

And, you can run this as follows (assuming this file is saved as 'runBowtie.sh').
```
$ qsub runBowtie.sh
```

### more examples to come...


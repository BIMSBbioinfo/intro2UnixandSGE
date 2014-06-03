# Quickstart and basics


##Quickstart##
Login to the head node: `ssh username@login1`, you can not do any computation here (see [cluster abuse]). The point of the head node is to distribute and schedule your jobs based on the resources demanded by you. Here is how you can start a job:

```powershell
username@login1:~$ qsub -V -b n -cwd runJob.sh
Your job 1 ("runJob.sh") has been submitted
```
- The **-V** option to qsub states that the job should have the same environment variables as the shell executing qsub.
- The **-b** option to qsub states that the command being executed could be a single binary executable or a bash script. In this case the command hostname is a single binary. This option takes a y or n argument indicating either yes the command is a binary or no it is not a binary.
- The **-cwd** option to qsub tells Sun Grid Engine that the job should be executed in the same directory that qsub was called.
- The last argument to qsub is the command to be executed  or script to be run.
The qsub command, if successful, will print the job number to stdout. See [How to submit a job using qsub] section for more.

##Specifying resources:###
The main resources you will be asking for are CPU(slots) and memory.

The memory can be requested with **h_vmem**, this is the maximum amount of memory a slot can take, if it exceeds this amount your job will be automatically killed. Another memory related option is **mem_free**

Here is how you can request those resources:
```powershell
username@login1:~$ qsub -l h_vmem=4G myJob.sh
```
will ask for a machine that has 4GB memory


Now, we can also ask for more CPU using **-pe** option. This option stands for "parallel environment" and each cluster sets up a set of parallel environments for parallel processing. The syntax for the option is as follows:`-pe [environment name] [number of slots]`. The following will start a job with 4 slots using "smp" environment.

```powershell
username@login1:~$ qsub -pe smp 4 -l h_vmem=4G myJob.sh

# Sun Grid Engine for beginners
Using the BIMSB (soon to be called MAX) cluster environment is similar to using unix/linux environments for your job submission (e.g running your scripts or other software). The difference is that you need to specify needed resources beforehand. The cluster is controlled by a SGE (Sun Grid Engine Software) that organizes the queues and resources. This sort of scheduling system is necessary when limited computational resources are shared by many. And, it would be useful if you are running alignments for multiple samples and want to distribute those tasks (jobs) across multiple machines or CPUs, or when running statistical simulations that needs to run on multiple CPUs for a long time. For these cases and many more alike, you just need to submit your job script (which is a shell script) and Sun Grid Engine will take care of the rest (as long as there is no error in your script).

SGE will do the **"job scheduling"**. That means you can submit all your jobs and SGE will queue them and run them when resources you requested becomes available. SGE will also achieve **"load balancing"** where the jobs will be distributed so that specific nodes do not get overloaded. In addition, SGE will allow you to do **"job monitoring and accounting"** which will be useful when you want to check if your job is running ,and if it failed it will help you understand what went wrong.




Within the next sections, we will show how to use Sun Grid Engine for **job submission**, **monitoring** and **troubleshooting**.

# Grid Engine for beginners
Using the Max cluster environment is similar to using GNU/Linux environments for your job submission (e.g running your scripts or other software). The difference is that you need to specify needed resources beforehand. The cluster is controlled by the Grid Engine scheduler that organizes the queues and resources. This sort of scheduling system is necessary when limited computational resources are shared by many. And, it would be useful if you are running alignments for multiple samples and want to distribute those tasks (jobs) across multiple machines or CPUs, or when running statistical simulations that needs to run on multiple CPUs for a long time. For these cases and many more alike, you just need to submit your job script (which is a shell script) and Grid Engine will take care of the rest (as long as there is no error in your script).

Grid Engine will do the **"job scheduling"**. That means you can submit all your jobs and Grid Engine will queue them and run them when resources you requested becomes available. It will also achieve **"load balancing"** where the jobs will be distributed so that specific nodes do not get overloaded. In addition, Grid Engine will allow you to do **"job monitoring and accounting"** which will be useful when you want to check if your job is running ,and if it failed it will help you understand what went wrong.




Within the next sections, we will show how to use Grid Engine for **job submission**, **monitoring** and **troubleshooting**.

# Monitoring cluster usage and troubleshooting
You can monitor the cluster usage and also monitor and control your jobs using the following examples.

`qhost -F` will show the resources available for each node.

`qmon` and ganglia(http://141.80.186.22/ganglia/) will give you visual interface to see the load of the cluster. qmon works when you ssh -X to the login node. Can bu also used to submit jobs other than monitoring.

### monitor your jobs ###
To see a list of all your pending and currently-running jobs, use the qstat command:
`qstat`

To see details about a particular job, use qstat with the -j option. The jobid is the ID number of the job reported by qsub and qstat:
`qstat -j <jobid>`

To see why a pending job has not been scheduled yet, look at the output from `qstat -j <jobid>`.

By default qstat only shows your own jobs. To see all the jobs on the cluster:
`qstat -u \*`

To check memory used by a job
`qstat -f -j <jobid>| grep vmem # -f means qstat in full mode. Gives details`

### delete your jobs ###
`qdel <jobid>` will delete the jobs from the queue.

## Troubleshooting:

### Why my job doesn't start:
Usually, this is because the requested memory or CPU resources are not available. Sometimes, nodes are taken out of the cluster for maintanence, which reduces the available resources.

### Why my job has failed:
Here are a couple of steps that might help you understand why your job failed. More often than not, you probably exceed the resources you asked for.

 * Read at the error file (default <jobname>.e<jobid>)
 * Look at the `qacct -j <jobid>`
    * Runtime above limit
    * Maxvmem above requested limit?
    * Check the exit status ? (137 means SIGKILL, force killed )
    * record what host the process was running
 * ssh to the host node and grep the jobid in `/var/spool/sge/nodeXXX/messages`

```powershell
$ ssh nodeXXX
$ grep <jobid> /var/spool/sge/nodeXXX/messages
```
 * request assistance from helpdesk with all the above information

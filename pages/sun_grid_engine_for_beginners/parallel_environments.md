# Parallel environments
Parallel environments are programming environments designed for parallel computing in clusters. The environments enable execution of shared-memory and distributed-memory parallel applications. The most common  parallel environments are Message Passing Interface (MPI) for distributed-memory machines, and OpenMP for shared-memory machines.

There are two parallel environments configured in the cluster. **orte** defines openMPI based environment for running MPI programs, can be invoked with `-pe orte [num_slots]` in the terminal or in the qsub script. However, most of the time you will be using **smp** environment which is for shared-memory jobs with multi-threading. This can be invoked by `-pe smp [number of slots]` option.

`qconf -sp orte` and `qconf -sp smp` will give you more info on the exact settings of each parallel environment.

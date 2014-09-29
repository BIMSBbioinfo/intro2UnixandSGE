# How to use interactive sessions with qrsh
If you want to run an interactive session using software such as R or Matlab, you need to use *qrsh* to start an interactive session and similar to qsub you need to ask for specific resources. You may want to use *screen* command before you start your session so that after you logged out and if you left somethings running in your session you can re-attach your session. See [here] for screen usage tutorial. In addition, if your software needs X11 forwarding (for example you will need this for R plots) you need to ssh to login1 with `-X` option such as `ssh username@login1 -X`


Here is how you can start an R session using qrsh. The session directly starts R, and qrsh asks for 10G memory max and 5G memory should be available at the moment.
```powershell
username@login1:~$ qrsh -V -l h_vmem=10G,mem_free=5G R
```

Alternatively, you can login to a suitable machine using qrsh and then start R.
The qrsh reguests 3 slots and 5G per slot maximum memory (3*5=15G max memory).

```powershell
username@login1:~ $  qrsh -now no -pe smp 3 -l  h_vmem=5G
local configuration login1.mdccluster not defined - using global configuration
aakalin@node023:~$ R

R version 3.0.2 (2013-09-25) -- "Frisbee Sailing"
Copyright (C) 2013 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu (64-bit)

...
```
A "particular" node can request by:
```powershell
username@login1:~ $ qrsh -l h='node050' -now no ....
...
username@node050:~$ 
```


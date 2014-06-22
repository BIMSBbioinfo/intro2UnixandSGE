# Connecting to a remote server with SSH
SSH enables you to access a shell session (terminal/command line etc.) remotely. That means you can start a shell session on a remote computer and use the filesystem and resources on that computer. Those remote computers are usually unix/linux servers such as login nodes of a cluster. More specifically, this means you need use SSH to connect to the login node from your own machine.


Normally, you use a syntax similar to the following to connect via SSH, `ssh username@remote.host.com`. Then, you will be prompted for your password on the remote host (in the example remote.host.com) for your user account. You should have a user account on the remote machine to be able to use this. Ask the remote machine's system administrator if you do not have an account.

First time, you connect to a remote machine from a computer, you will be asked if you wish to add the remote host to a list of known_hosts, go ahead and say yes. You will see something like this:

```
The authenticity of host 'remote.host.com(213.9.122.134)' can't be established.
RSA key fingerprint is 53:b4:ad:c8:51:17:99:4b:c9:08:ac:c1:b6:05:71:9b.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'arvo.suso.org' (RSA) to the list of known hosts.
```
type `yes` and press enter.


## X11 forwarding
This is a useful feature of SSH because it enables you to see windows and bitmap information on the remote host. That means you can use programs with a user-interface and can see the visual output of your work such as R or matlab plots.

To use this feature, you need to use -X or -Y option with SHH. See below:
```
ssh -X username@remote.host.com
```

or
```
ssh -Y username@remote.host.com
```

You can check if X11 forwarding works by typing `echo $DISPLAY`, this should return something like `localhost:18.0`, should not return an empty string.

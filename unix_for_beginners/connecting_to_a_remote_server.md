# Connecting to a remote server with SSH

In a shell session programmes read from and output to text streams
only.  These input and output streams do not have to be connected to
local resources; an input stream may just as well be connected to an
input source on the network and write to an output stream on a
different machine.  This feature can be used to start a shell session
on a network host, provided that it accepts such connections.

Nowadays, for security reasons plain connections to remote machines
are usually no longer used for shell sessions.  Instead, an encrypted
connection is negotiated before the shell session is started.  The
most commonly used way to achieve this is the Secure Shell protocol,
or short: SSH.  When a remote host (e.g. the login node of a cluster)
listens for SSH connections (commonly on network port 22) and you have
credentials to authenticate on the remote host, you can connect to the
remote and start a shell session there.  This means you can start a
shell session on a remote computer and use the filesystem and
resources on that computer.

To establish a connection to the remote host `remote.host.net` and
authenticate as user `username` execute the following command in a
regular shell session:

    ssh username@remote.host.net

Dependent on the authentication method you may be asked for the
password for `username` on the remote machine before you are admitted.
You should have a user account on the remote machine to be able to use
this.  Ask the remote machine's system administrator if you do not
have an account.

The very first time you connect to a remote machine, you will be asked
if you wish to add the remote host to a list of known hosts, looking
something like this:

```
The authenticity of host 'remote.host.net(213.9.122.134)' can't be established.
RSA key fingerprint is 53:b4:ad:c8:51:17:99:4b:c9:08:ac:c1:b6:05:71:9b.
Are you sure you want to continue connecting (yes/no)?
```

You are asked to confirm your intention to connect because SSH cannot
guarantee that the remote host is really the host you intend to
connect to --- it simply has never encounter this host before, so it
cannot validate the fingerprint against a record from a previous
connection.  The only way to be sure that the machine is indeed the
one you want to connect to is to compare the fingerprint manually, but
this is not feasible for people without physical access to the
machine.

When connecting to a cluster node on a local network you can be
reasonably sure that the connection is safe.  Type `yes` and press
enter to continue.  Your SSH client will record the fingerprint for
this host and prevent you from connecting to a host with the same name
but a different fingerprint to prevent a man-in-the-middle attack.

Upon establishing a connection a shell session will be started.
Confirm that you are on a remote system by running `hostname`.


## X11 forwarding

This is a useful feature of SSH because it enables you to see windows
and bitmap information on the remote host. That means you can use
programs with a user-interface and can see the visual output of your
work such as R or matlab plots.

To use this feature, you need to use -X or -Y option with SHH. See below:

    ssh -X username@remote.host.com

or

    ssh -Y username@remote.host.com

You can check if X11 forwarding works by typing `echo $DISPLAY`, this
should return something like `localhost:18.0`; it should not return an
empty string.

To test if this is working, run `xeyes` on the remote host.  A window
should appear on your machine.  While the programme runs on the remote
host, the window contents are forwarded (hence the name) to your local
machine.  This also works with more complicated applications, but
performance may be inadequate when doing this over a poor connection.

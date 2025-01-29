---
title: Free Oracle Server Setup
description: Guide on how to setup a server with Oracle Cloud VMs
authors:
 - ArcTrooper
---

# Oracle Cloud

???+ warning "This method is not for beginners"
	I will try to make this guide simple to understand and walk you through each step, but there will be lots of Linux CLI usage, dealing with a virtual machine, and SSH. It is not for beginners. 
	
	In the guide, I will assume you have basic knowledge of networking, VM usage, and Linux. 
	
	If you don't know what these terms are, then this method likely is not for you.
	
???+ danger "Warning"
	There have been reports of Oracle banning user accounts for seemingly no reason. Make sure to have a `[backup of your world](../backups.md)` just in case that happens.

## Sign up for Oracle Account

1. Go to the [Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/) website and make an account.
2. Fill out all of the boxes and verify your email address.
3. Once you verified your email, enter and confirm your password, leave **Company Name** blank, create an **Cloud Account Name**, then select your **Home Region** or whatever is closest to where you live.
4. Enter your **Address information**, then verify your **Phone number**.
5. Now you'll need to enter credit card information.
	- You can use a service such as Privacy.com to create a virtual card if you prefer not to give out your actual card info.
	- You will never be charged for an "always free" account.
6. Agree to the TOS and click **Start my free trial**.

It will take a bit to provision a new cloud account, you'll get an email titled **Your Oracle Cloud Account is Fully Provisioned** once your account is ready to go.

???+ tip "Virtual CC"
	You can use a service such as Privacy.com to create a virtual card if you prefer not to give out your actual card info.
	
!!! info "You will never be charged for an "always free" account."

## Creating a VM

list steps with images

4 OCPU, 24 RAM if running 24/7

save private ssh key to `C:\Users\pcName` for easy Powershell access

## Opening Minecraft Server Ports

Add 2 Ingress Rules

Source CIDR: `0.0.0.0/0`
IP Protocol: `TCP` and `UDP`
Port: 25565

## Connecting to VM with SSH

You can use Powershell, or you can download [MobaXterm SSH Client](https://mobaxterm.mobatek.net) for easier access. This is what I'll be using for the remainder of this guide.

Powershell: `ssh -i whateverYouNamedIt.key opc@255.255.255.255`

### Adding More Storage

`lsblk` to confirm new size of boot volume

https://www.youtube.com/watch?v=IUxbffxRQ5U

1. `sudo mkfs -t ext4 /dev/sdb`
2. `sudo mkdir /mnt/whateverNameYouWant`
3. `sudo mount /dev/sdb /mnt/whatYouNamedItPreviously`
4. `sudo nano /etc/fstab`
5. `/dev/sdb /mnt/whatYouNamedIt ext4 defaults,nofail 0 0`
	- `Ctrl+O` to save. `Ctrl+X` to exit nano
6. Reboot instance

https://docs.oracle.com/en-us/iaas/Content/GSG/Tasks/addingstorage.htm

---

`cd ../../mnt/whatYouNamedIt/` to change path to the newly created block volume

`sudo chmod -R 755 mnt` for Only owner can write, read and execute for everyone

`sudo chmod -R 777 mnt` for Everything for everyone

`unzip filename.zip`

### Installing Java

`yum list jdk*` may take a while

`sudo yum install jdk-17.aarch64 -y` may take a while

`java --version` to confirm its installed

## Upload Serverfiles

unzip serverfiles on your pc

enable simplebackups and edit config for backup intervals and backup folder size limits

edit ram allocation in `user_jvm_args.txt` Max 12gb

upload with MobaXterm

## Starting Server

!!! warning "Server will not continue to run if you close the SSH terminal"

Before starting your server you need to open the port so that players can connect.

`sudo firewall-cmd --permanent --zone=public --add-port=25565/tcp`

`sudo firewall-cmd --permanent --zone=public --add-port=25565/udp`

`sudo firewall-cmd --reload`

Set directory to server install

`cd ../../mnt/whatYouNamedIt/`

Start server

`bash startserver.sh`

### Whitelisting and Connecting

The server is set to whitelist by default.

After server is done loading, whitelist player(s) using: `whitelist add playerUsername`.

OP players using: `op playerUsername`

Your server ip is `vmIpAddress:25565`

`stop` or `Ctrl+C` to save and stop the server (If you didn't disable auto-restart, you'll need to `Ctrl+C` again to stop the auto-restart). 

`bash startserver.sh` to start the server again.

### Backing up your server world

Mobaxterm download `world` folder or latest simplebackups zip file (will take a awhile)

> [Oracle Cloud](https://www.oracle.com/cloud/free/)

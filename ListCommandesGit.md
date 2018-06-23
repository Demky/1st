List of GIT commands _(unfinished)_
==

Setup your git
--
Commands | Description
------------ | -------------
git config --global user.name "_your name here"_ | Set a user name, will be linked to your commit
git config --global user.email "_your email here"_ | same as previous this time with email

If you need to check if there is already a registered name or email; just use those without the "string":
> git config --global user.name
>git config --global user.email

Other solution : You can also open the file **.gitconfig**, by default on windows 10 it's here : C:\Users\<user_name>

git commands
--


Commands | Description
------------ | -------------
git status | return folder status (git registerd, unknow...)
git init | we tell git that the current directory should be considered as a git repository
|
git add <name> | add a files to git index
git commit -m "string about the change" | Record changes to the repository and add a comments about the change
official list of every **commit** options : https://git-scm.com/docs/git-commit


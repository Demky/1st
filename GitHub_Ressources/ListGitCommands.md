List of GIT commands _(unfinished)_ :point_left:
==

Setup your git :balloon:
--

Commands | Description
------------ | -------------
git config --global user.name "_your name here"_ | Set a user name, will be linked to your commit
git config --global user.email "_your email here_" | same as previous this time with email
git config --global --unset-all user.name | Remove the user.name
git config user.email "_your email here_" | change email localy (only one repo)
git config user.email | check local email for repo

If you need to check your registered settings (name, email,...) :
> git config --list

On Windows 10; you can also open **.gitconfig**, default location is : C:\Users\ <user_name>

- If need to change git password :
Windows : https://stackoverflow.com/a/51637927/9552861 


git ORIGIN :cloud:
--

Commands | Description
------------ | -------------
git remote show origin | **Inspecting a Remote : Show the origin url of a git folder** | https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes
git remote set-url origin [updated link url https://........git] | Fix problem `This repository moved...` warning in CLI | /


### Bonus

**.patch** : Add .patch at the end of the URL for a commit page, Pull Request, or Compare View and you will have it as plaintext with some complementary information.

git commands :anger:
--


Commands | Description | Official links
------------ | ------------- | -------------
git status | return folder status (git registerd, unknow...) | https://git-scm.com/docs/git-status
git init | we tell git that the current directory should be considered as a git repository | https://git-scm.com/docs/git-init
git add <name> | add a files to git index | https://git-scm.com/docs/git-add
git commit -m "your message" | Record changes to the repository and add a comments about the change | https://git-scm.com/docs/git-commit
  


<br /><br />

> I will finish this file later. :neutral_face:

                    author - Demky



--------------------

TODO (format §) : 
> There are also tools that offer graphical interfaces to compare the differences of versions of a file :
* imdiff 
* meld
* opendiff
* kdiff3
* tkdiff
* xxdiff
* tortoisemerge
* gvimdiff
* diffuse
* ecmerge
* p4merge
* araxis 
* emerge

Launch one of these external merge tools with the git mergetool command as : 
> git mergetool vimdiff 


Must Have links : :pray:
--

* How to format a .md
https://help.github.com/articles/basic-writing-and-formatting-syntax/#quoting-code

* list of git smileys : :speech_balloon:
https://www.webpagefx.com/tools/emoji-cheat-sheet/

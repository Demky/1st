:pencil: Keeping a fork up to date #GitHub
-----------------





### 1. Clone your fork:

    git clone git@github.com:YOUR-USERNAME/YOUR-FORKED-REPO.git

### 2. Add remote from original repository in your forked repository: 

    cd into/cloned/fork-repo
    git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git
    git fetch upstream

### 3. Updating your fork from original repo to keep up with their changes:

    git pull upstream master
   
### 4. Now push to your fork
  
    git push
    
 **That's it; :beginner: your fork is now up to date**
 >This branch is even with REPO-YOU-FORKED-FROM:master.

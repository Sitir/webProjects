# Git Helpers commands/explanations

### Git add

To add all files to stage: 
```
git add .
```
To add specific files only to stage and commit:
```
git add filename.txt && git commit -m 'change word'
```
Check status of not commited/commited files:

```
git status
```
#### Git Branch
Display branches:
```
git branch
```
Change branch:
```
git checkout NAME_OF_BRANCH
```

Create new branch and do change:
```
git checkout -b NAME_OF_BRANCH
```




### Git merge

merge master with branch  worked on:
```
git merge branchWorkedOn
```

Merge without fast forward:
```
git merge --no-ff branchName
```

* Rember to check on which branch you are working on!


### Git remote
Used for setting the url for pull/push.  
  
Add new remote:
```
git remote add NAME PATH_TO_REPOSITORY_REMOTE



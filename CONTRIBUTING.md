# 代码提交及审核工作流程
因为都是中国人，我就不拿英语写了，记得别把这个东西提交到BrightSpace上（

## 初始化repo
第一次的时候需要先把repo clone一份到本地：
```
git clone https://github.com/uOttawa-Collabs/CSI3140-Summer-2022-Project
```
如果你们用ssh的话：
```
git clone ssh://git@github.com/uOttawa-Collabs/CSI3140-Summer-2022-Project
```
## 提交一个新commit
### 拉取最新代码
提交新commit，先拉取远程代码，保证本地的main分支是最新的：
```
# 切换到main分支
git checkout main
# 拉取代码
git pull
```
如果出现冲突，需要先解决冲突，对main来说直接reset就没问题了，因为所有的改动都应该在另外的分支里，而不是在main里面：
```
git reset --hard origin/master
git pull
```
如果你确实在main上改了东西，或者有commit，先备份一下再reset。

### 创建新Branch
我关闭了所有人的对main分支的写入权限，要不然直接push会出乱子。所以每次在改动前需要先创建新branch：
```
git checkout -b 随便一个名字
```
### Commit和Push
在你做完改动后，需要add/commit：
```
git add .
git commit
```
然后输入commit消息。第一行是标题，然后空一行，然后可以写你改了啥或者加了啥功能。
commit完之后，push到远程repo：
```
git push origin branch名字
```

### 提交Pull Request
push完之后在GitHub上会看到你的branch已经更新了，可以提交Pull Request。
或者手动点Pull Request那一栏，左边选main，右边选你的分支，然后创建Pull Request。
一般PR消息就是你的commit消息，右边可以选审核人员。
因为GitHub免费版的限制，只能选一个人，所以就顺便在群里说一下你提交新PR了吧。

### 小组审核
小组成员审核后给出对这个PR的意见，可以选择Changes Requested或者Approve。
PR被所有人Approve之后，我会把这个PR合并到main分支里。

## 冲突处理
在上面的环节中，难免出现冲突，参考这个文章解决冲突：https://www.liaoxuefeng.com/wiki/896043488029600/900004111093344

## 最后
看看[Git教程](https://www.runoob.com/git/git-tutorial.html)，有啥问题来问我

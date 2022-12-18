## 1. GUI SW

-   소스트리 (권고)
-   깃크라켄
-   깃허브 데스크탑 (비사용 권고)
-   https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

## 2. branch 만들기 및 merge test

```shell
(main) $ git branch // 브랜치 목록 확인
(main) $ git branch a // 브랜치 a 생성
(main) $ git checkout a
(a) $ echo '# hello world a' >> 'hello1.txt'
(a) $ git status
(a) $ git add .
(a) $ git commit -m "a1"
(a) $ git push // error
(a) $ git push --set-upstream origin a
(a) $ git checkout main
(main) $ git branch b  // 브랜치 a 생성
(main) $ git branch
  a
  b
* main
(main) $ git checkout b
(b) $ echo '# hello world b' >> 'hello2.txt'
(b) $ git status
(b) $ git add .
(b) $ git commit -m "b1"
(b) $ git push // error
(b) $ git push --set-upstream origin a
(b) $ git checkout main
// 혹시라도 vi나 vim이나 VSC가 열린다면 수정하시고 저장하시고 나가시면(VSC의 경우에는 수정, 저장, 닫기) 됩니다.
// i는 insert로 text를 삽입할 수 있고
// 수정이 다 되셨다 하시면 ESC 한 번 누르시고 :wq
(main) $ git merge a
(main) $ git merge b
(main) $ git add .
(main) $ git commit -m 'merge'
(main) $ git push
```

## 3. conflict test

```shell
(main) $ git add .
(main) $ git commit -m 'main1'
(main) $ git push
(main) $ git branch a
(main) $ git branch b
(main) $ git checkout a

// 파일 수정 README.md에 hello -> hello1
(a) git add .
(a) git commit -m 'a1'
(a) git push // error
(a) git push --set-upstream origin a
(a) git checkout b

// 파일 수정 README.md에 hello -> hello2
(b) git add .
(b) git commit -m 'b1'
(b) git push // error
(b) git push --set-upstream origin b
(b) git checkout main

(main) git merge a
(main) git merge b // conflict

// 메모장 여시고 아래 텍스트를 수정해주세요. visual studio code에서 4개 다 클릭 해보세요.
<<<<<<< HEAD
hello1
=======
hello2
>>>>>>> b
```

## 4. amend, stash, reset, cherry-pick

```shell
$ git add amend.txt
$ git commit --amend

//////////

$ touch test.txt
$ git stash
$ git status
$ git stash pop

//////////

$ git log
$ git reset --hard 025cd1d98da39af2a819c43e17b3d5f2d553649d
$ git push -f origin main

//////////

$ git revert <직전커밋 id>

//////////

$ git branch cherry
$ git checkout cherry
$ 파일 수정 -> commit
$ 파일 생성 -> commit
$ git push
$ git log
$ git switch main
$ git cherry-pick logid

```

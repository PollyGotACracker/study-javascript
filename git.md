# github repository 업로드

## https://github.com 계정 생성
## repository 도구 설치
* https://git-scm.com 에서 다운로드 설치

## github 에 새로운 repository 생성
* github 에 login 한 후 new repository 실행하여 생성

## local project Upload 하기
### local repository 만들기
* local repository 는 내 PC에 저장된 프로젝트를 github 에 업로드하기 위하여 압축하는 절차
1. 프로젝트 폴더에서 Git bash here 실행

2. local 에 계정 정보 저장하기
* git config --global user.name PollyGotACracker
* git config --global user.email bitterns96@gmail.com
* PC를 교체했거나, 윈도우를 재설치했거나, 최초로 github 와 연동할 때만 실행

3. local repository 생성하기
* git init

4. 원격(remote, origin) repository 정보 저장하기
* 새로운 repository 를 생성했을 때만
* git remote add origin https://github.com/PollyGotACracker/JavaScript_Study.git
* origin 이라는 이름으로 github 의 원격 respository 주소를 등록하는 절차

5. 프로젝트를 압축하여 local repository(.git 폴더)에 저장하기
* git add .
* git commit -m "Comment"

6. 업로드하기
* git push -u origin master


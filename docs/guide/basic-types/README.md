# MySQL 이란?

**MySQL**은 1995년 5월 23일 오라클이 개발한 데이터페이스 관리 시스템입니다. **오픈 소스 관계형 데이터베이스 관리 시스템(RDBMS)** 으로, 데이터를 저장하고 관리하는데 매우 유용한 언어입니다.

---

## 🫙 1. MySQL은 무엇을 할때 사용하는가?

MySQL은 보통 다양한 환경에서 사용되고 있고 주요 사례들은 다음과 같습니다.

- **웹 애플리케이션**: 개인&단체 블로그, 쇼핑몰, 소셜 네트워크 등.
- **데이터 분석**: 대량의 데이터를 저장하고 쿼리해 분석.
- **모바일 애플리케이션**: 백엔드 데이터베이스로 활용.
- **게임 개발**: 사용자 데이터와 게임 상태 관리

---

## 🫙 2. MySQL의 장단점

### 장점

- **오픈소스**: 모두가 무료로 사용이 가능하고, 다양한 커스터마이징 가능
- **성능**: 빠른 성능과 쿼리 처리속도를 제공
- **유연성**: 다양한 플랫폼 환경에서 지원되고, 다양한 프로그래밍 언어와 통합 가능
- **안정성**: 데이터 무결성을 보장하고, 트랜젝션 지원

### 단점

- **복잡한 쿼리 방식**: 복잡한 쿼리 성능에 따른 **DBMS**에 비해 떨어질 수 있슴
- **스케일링**: 수평적 확장에 한계가 있을 수 있음
- **기능 제한**: 일부 고급 기능이 다른 상용 **DBMS**에 비해 떨어질 수 있음

---

## 🫙 3.OS별 설치법

- **Windows** 버전

  - **MySQL 공식 사이트에서 다운로드:** : [MySQL 공식사이트](https://www.oracle.com/mysql/technologies/mysql-enterprise-edition-downloads.html)

- **macOS** 버전

  - **Homebrew를 사용해 설치**:
  - **mysql 설치**: `brew install mysql`
  - **mysql 서비스 시작**: ` brew services start mysql`
  - 이후 MySQL Workbench 다운로드

- **Linux** 버전

  - **패키지 목록 업데이트**: `sudo apt update`
  - **MySQL 설치**: `sudo apt install mysql-server`
  - **MySQL 보안 설치**: `sudo mysql_secure_installation`

- **설치 과정 (공통)**

  - 다운로드한 설치 프로그램 실행
  - 설치 유형 선택(개발자 모드, 사용자 정의 등)
  - **MySQL Server, Workbench, Shell** 등 설치

- **데이터베이스 설정(Windows 버전만)**:
  - 설치 중 데이터베이스 설정 가능
  - **비밀번호 설정**: MySQL root 사용자 비밀번호 설정
  - **기본 설정**: 서버 포트(기본값:3306)와 인증 방식 설정
  - **서비스 설정**: MySQL 서버를 Windows 서비스로 실행하도록 설정

---

## 🫙 4. VSCode 세팅하기

기존에 MySQL Workbench를 사용하지 않고 VSCode에서 세팅해서 사용해보겠습니다.

- **VSCode 설치하기**
  - [Visual Studio Code](https://code.visualstudio.com/)설치하기
  - 운영체제에 맞게 설치파일을 실행해 설치.
- **MySQL 설치하기**

  - VSCode에 **Extensions**에서 MySQL 확장 프로그램 설치
  - 초반에 MySQL 설치때처럼 호스트와 포트, 이름, 비밀번호 세팅

- **데이터베이스 생성**

  - 테이블을 생성하기전 데이터베이스를 만들어야함

  ```sql
  CREATE DATABASE 데이터베이스명;

  USE 데이터베이스명; // 사용할 데이터베이스 선택
  ```

- **테이블 생성하기**
  - 모든 연결이 끝났으면 프로젝트 루트에 sql 파일 하나를 생성하고 다음과 같이 입력
  ```sql
   -- 테이블 생성
  CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
  );
  ```
  오른쪽 상단에 재생 버튼을 클릭해 테이블을 생성합니다

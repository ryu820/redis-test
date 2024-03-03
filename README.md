# redis-test

### Redis의 장점

- 빠른 속도: Redis는 인메모리 데이터 저장소로 데이터를 메모리에 저장하기 때문에 일반적인 디스크 기반 데이터베이스보다 빠른 읽기/쓰기 속도를 제공합니다.
- 다양한 데이터 구조: Redis는 단순한 키-값 저장소뿐만 아니라 문자열, 리스트, 해시, 집합 등 다양한 데이터 구조를 지원합니다.
- Pub/Sub 메시징 시스템: Redis는 Pub/Sub 메시징 패턴을 지원하여 메시지 큐와 같은 기능을 구현할 수 있습니다.
- 데이터 영속성: Redis는 데이터를 디스크에 저장하여 장애 상황에서도 데이터의 지속성을 보장합니다.

### Redis의 단점

- 메모리 사용량: Redis는 모든 데이터를 메모리에 저장하기 때문에 **큰 용량의 데이터를 다루는 경우 메모리 부족 문제**가 발생할 수 있습니다.
- 단일 쓰기 스레드: Redis는 단일 쓰기 스레드 모델을 사용하기 때문에 대량의 쓰기 작업을 처리하는 경우 성능이 저하될 수 있습니다.
- 복잡한 쿼리: Redis는 간단한 키-값 조회 위주의 사용을 지향하기 때문에 **복잡한 쿼리**를 수행하는 데는 적합하지 않습니다.

### Docker Redis 설치하기
- redis 이미지 받아오기

```
docker pull redis
```
- redis 실행시키기 
    - redis-server --appendonly yes --requirepass [password]  
      --appendonly yes : 지속적인 데이터 저장을 활성화  
      --requirepass [password] : cli로 접속 시 비밀번호 지정 (redis.conf 파일로 더 많은 설정 가능)  
        
```
docker run -v /path/on/host:/data --name my-redis -p 6379:6379 redis redis-server --appendonly yes --requirepass [password]

//로컬에서 올릴 때 볼륨 설정 안해줬는데 나중에 배포환경에서는 해줘야 할듯
docker run --name my-redis -p 6379:6379 redis redis-server --appendonly yes --requirepass [password] 
```

-> docker exec 로 접속 후 redis-cli 를 통해 redis 연결 확인 가능!

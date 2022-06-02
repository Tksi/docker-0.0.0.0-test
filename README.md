0.0.0.0 と 127.0.0.0 の挙動チェック

# setup

```bash
docker-compose up -d
```

# docker 内

```bash
docker exec client curl -s server0:8080
docker exec client curl -sv server127:8080
```

8000(server0) -> ok  
8080(server127) -> 不通

## server127 内

```bash
docker exec server127 curl -s server0:8080
docker exec server127 curl -s localhost:8000
```

8000(server0) -> ok  
8080(server127) -> ok

# ホストマシン

```bash
curl -sv localhost:8080 # server0
curl -sv localhost:8000 # server127
```

8000(server0) -> ok  
8080(server127) -> 不通

# まとめ

127.0.0.1 -> lo(ループバックインターフェース)で listen  
0.0.0.0 -> lo 含む全インターフェースで listen  
eth0 で割り当てられた ip -> eth0 のみで listen(curl localhost は不通)

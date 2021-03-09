# mad-gab-kaitlin

# Runs a Mad Gab interactive site

### Build
example build version: `0.0.0`
```console
$ docker build -t njmaeys/mad-gab:<build version> .
$ docker push njmaeys/mad-gab:<build version>
```

### Run it
```console
$ docker pull njmaeys/mad-gab:<build version>
$ docker run -p 3000:80 njmaeys/mad-gab:<build version>
```
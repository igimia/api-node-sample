# api-node-sample 

This is a program for api samples using Node.js(Koa).

## Usage

```js
docker-compose up
```


## Install

With [npm](https://npmjs.org/) installed, run

If container not running.
You can use this command to add some npm-packages.
```
$ docker-compose run web /bin/bash
# yarn add [npm-package] 
```

If container runnning.
```
$ docker exec -it node_api_web /bin/bash
# yarn add [npm-package]
```

Please input this command when you want to change the name of the container.
```
$ docker rename OLDNAMW NEW_NAME
```

## License

public

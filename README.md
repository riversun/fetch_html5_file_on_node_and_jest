# About

Testing the HTML5 File API with Jest is quite cumbersome.

I would like to write a test in the front-end style so that it will not be a Node.js specific style.

Here is an example of how to execute a test using the File object of the HTML5 File API in Jest.

## Install

Install Babel

```shell script
npm install --save-dev @babel/core @babel/preset-env
```

Install Jest

```shell script
npm install --save-dev jest babel-jest
```

Install node-fetch because there is no Fetch API in the first place

```shell script
npm install --save-dev node-fetch
```

## How to write jest

```shell script
import fetch from 'node-fetch';

describe('Fetch on Node', () => {

    test('Get HTML5 "File" on Node ', (done) => {

        const path = 'https://riversun.github.io/img/riversun_256.png';

        fetch(path)
            .then(res => {

                return res.arrayBuffer().then(buffer => ({
                    contentType: res.headers.get('Content-Type'),
                    buffer: buffer
                }));

            })
            .then(data => {
                return new File([data.buffer], path, {type: data.contentType});
            })
            .then(file => {

                console.log(`fileName=${file.name} fileSize=${file.size} fileType=${file.type}`);

                //Write some tests
                expect(true).toBe(true);

                done();

            });
    });
});

```
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

const fs = require('fs');
const path = require('path');

process.on('message', data => {
    get(data);
})

function getFiles(dest) {
    return new Promise((resolve, reject) => {
        var dir = [];
        let result = [];
        dir.push(dest);
        while (dir.length > 0) {
            const ele = dir[0];
            dir.splice(0, 1);
            try {
                const data = fs.readdirSync(path.join(__dirname, ele));
                result.push({ folder: ele, content: data });
                for (var i = 0; i < data.length; i++)
                    dir.push(path.join(ele, data[i]));
            } catch (error) { }
        }
        resolve(result);
    })
}

async function get(dest) {
    try {
        const result = await getFiles(dest);
        process.send(result);
    } catch (err) {
        console.log(err);
    }
}
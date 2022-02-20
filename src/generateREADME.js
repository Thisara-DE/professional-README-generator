const fs = require('fs');

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/PRO_README.md', fileContent, err => {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File creted in the dist folder!'
            });
        });
    });
}

module.exports = writeToFile;
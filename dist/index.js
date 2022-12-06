import fs from "fs";
function recursePath(path, file) {
    fs.promises.readdir(path).then((fileList) => {
        fileList.forEach(filename => {
            console.log(filename);
        });
    });
}
const exports = {
    recursePath,
};
export default exports;
globalThis.exports = exports;

const path = require("path");
const fs = require("fs");

function treeHelper(targetPath, indent) {
  targetPath = targetPath.toString();
  if (fs.lstatSync(targetPath).isFile()) {
    console.log(`${indent}├── ${path.basename(targetPath)}`);
  } else {
    console.log(`${indent}└── ${path.basename(targetPath)}`);
    const dirItems = fs.readdirSync(targetPath);
    for (let item in dirItems) {
      treeHelper(path.join(targetPath, dirItems[item]), indent + "\t");
    }
  }
}
const printTree = (path) => {
  if (!fs.existsSync(path)) {
    console.log("Invalid path provided!");
    return;
  }
  treeHelper(path, " ");
};

module.exports = {
  printTree,
};

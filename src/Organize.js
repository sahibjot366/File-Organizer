const path = require("path");
const fs = require("fs");

const types = {
  Music: ["mp3", "aac", "wav", "aiff", "m4a", "flac", "wma"],
  Videos: ["mp4", "mkv", "mov", "wmv", "flv", "avi", "webm", "avchd"],
  Archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  Pictures: ["jpg", "jpeg", "png", "tiff", "bmp", "gif", "eps"],
  "Programming Files": [
    "py",
    "js",
    "css",
    "c",
    "cpp",
    "java",
    "asp",
    "aspx",
    "pl",
    "php",
    "xml",
    "php3",
    "php4",
    "svg",
    "html",
    "htm",
    "json",
  ],
  Documents: [
    "docx",
    "ppt",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  App: ["exe", "dmg", "pkg", "deb"],
};

const assureFolderExistance = (dirpath, folderName) => {
  if (!fs.existsSync(path.join(dirpath, folderName))) {
    fs.mkdirSync(path.join(dirpath, folderName));
    console.log(`${folderName} folder created ✅`);
  }
};

const getCategory = (filename) => {
  const extension = path.extname(filename).slice(1);
  for (let type in types) {
    if (types[type].includes(extension)) {
      return type;
    }
  }
  return "others";
};

const arrangeFiles = (file, fileSrcPath, organizedFilesDirPath) => {
  const category = getCategory(file);
  assureFolderExistance(organizedFilesDirPath, category); // assures that category folder will be created
  const fileDestPath = path.join(organizedFilesDirPath, category, file);
  fs.copyFileSync(fileSrcPath, fileDestPath);
  fs.unlinkSync(fileSrcPath);
};

const OrganizeFiles = (dirpath) => {
  if (!fs.existsSync(dirpath)) {
    console.log("Invalid path entered!");
    return;
  }
  console.log("Starting...");
  assureFolderExistance(dirpath, "Organized Files"); // that organized folder exists, if doesn't exist then it will be created
  const organizedFilesDirPath = path.join(dirpath, "Organized Files");
  const dirItems = fs.readdirSync(dirpath);

  let count = 0;
  dirItems.forEach((item) => {
    const itemPath = path.join(dirpath, item);
    if (fs.lstatSync(itemPath).isFile()) {
      count++;
      arrangeFiles(item, itemPath, organizedFilesDirPath); // copies file to organized folder and deletes files in unorganized folder
    }
  });
  if (count == 0) {
    console.log("Nothing to sort or this directory is already sorted!");
  } else {
    console.log("Done...");
  }
};

module.exports = {
  OrganizeFiles,
};

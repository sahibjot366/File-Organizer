const yargs = require("yargs");
const { OrganizeFiles } = require("./Organize");
const { printTree } = require("./Tree");
yargs.command({
  command: "organize",
  describe: "Organizes files in the given directory according to their types.",
  builder: {
    path: {
      describe: "Path of the directory where files are to be organized",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    OrganizeFiles(argv.path);
  },
});

yargs.command({
  command: "tree",
  describe: "Prints tree view of all files and directories.",
  builder: {
    path: {
      describe: "Path of the directory whose tree view has to be printed",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    printTree(argv.path);
  },
});

yargs.parse();

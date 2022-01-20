const yargs = require("yargs");
const { OrganizeFiles } = require("./Organize");
yargs.command({
  command: "organize",
  describe: "Organizes files in the given directory according to their types.",
  builder: {
    path: {
      describe: "Path of the folder where files are to be organized",
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
  handler: () => {
    console.log("tree");
  },
});

yargs.parse();

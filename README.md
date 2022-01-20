# File-Organizer

This is a command line project to organizes files in the given directory.

## Features

- User can organize and maitain a directory with the help of organize command.
- User can print tree view of a directory with the help of tree command.

## Tech Stack

ECMAscript 6, Node JS, fs, path and yargs module

## Running in your machine

To run this project in your machine you need to install Node JS and NPM in your machine

- Download the installer from [Node JS download page](https://nodejs.org/en/download/).
- Run the installer.
- Follow the installer steps, agree the license agreement and click the next button.
- Restart your system/machine.

Now, test NodeJS by printing its version using the following command in Command Prompt:

```bash
    node -v
```

and test npm by printing its version using command

```bash
    npm -v
```

After installing Node JS, Write following commands in your command line

```bash
    git clone https://github.com/sahibjot366/File-Organizer.git
    cd File-Organizer
    npm init
    npm install
    cd src
```

npm install command will install all the npm packages required in this project.

For organizing a directory, run

```bash
    node app.js organize --path="DIRECTORY_PATH"
```

For printing tree view of a directory, run

```bash
    node app.js tree --path="DIRECTORY_PATH"
```

## Authors

[Sahibjot Singh](https://github.com/sahibjot366)

const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: `inherit` });
  } catch (err) {
    console.log(err);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone https://github.com/RoySounak/test-template.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);

const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log('Congrats! Be ready to hack');
console.log(`cd ${repoName} && npm run start`);

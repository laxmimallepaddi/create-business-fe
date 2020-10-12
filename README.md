# create-business-fe
This repo contains sign up, login and other UI components.

## Setting up Angular App

1. To install Node on your Linux Machine, follow the instructions for your specific Linux distribution at [Node's Linux Installation Instructions Page](https://nodejs.org/en/download/package-manager/) and for Windows, download Node from [here](https://nodejs.org/en/download/) and in command prompt run command below to check node version.

```bash 
node -v
```

As node got installed, we could use node package manager i.e. npm to install typescript & angular. To check the version of node package manager type the following into your command line or terminal window:

```bash 
npm -v
```

2. For Windows, to install TypeScript, simply open your command prompt and type:

```bash 
npm install typescript -g
```
For Linux users you need sudo rights to install TypeScript, so type:

```bash 
sudo npm install typescript -g
```

3. For Windows,to install the Angular CLI, type the following into your command line or terminal window:

```bash 
npm install @angular/cli -g
```
For Mac and Linux users you need sudo rights to install the Angular CLI, so type:

```bash 
sudo npm install @angular/cli -g
```

4. To install a specific versions use @version_number as suffix to typescript or @angular/cli. For example, install a specific version of Angular CLI, type and run the following into your command line or terminal window

```bash 
npm install @angular/cli@8.1.0 -g
```
Use "sudo" incase of Linux OS.

5. Commands to check versions of Typescript & Angular CLI are:

```bash 
tsc -v 
```

```bash 
ng v
```

## Version used in the project

1. Node - v12.6.0
2. NPM - 6.9.0
3. Typescript - Version 3.5.2
4. Angular CLI - 8.1.0

## Command To Run the project

```bash 
ng serve 
```
and go to [http://localhost:4200/](http://localhost:4200/) to launch
.
--END

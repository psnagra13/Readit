// C:\Users\sdkca\Desktop\electron-workspace\build.js
var electronInstaller = require('electron-winstaller');

console.log('runing build.js');

// In this case, we can use relative paths
var settings = {
    // Specify the folder where the built app is located
    appDirectory: './myapp_source_built',
    // Specify the existing folder where
    outputDirectory: './myapp_source_built_installers',
    // The name of the Author of the app (the name of your company)
    authors: 'Our Code World Inc.',
    // The name of the executable of your built
    exe: './myapp_source_built.exe',

    version:'1.3.0'
};

resultPromise = electronInstaller.createWindowsInstaller(settings);

resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});

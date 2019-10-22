/*

through a virtual filesystem of sorts to find a file, then return the path to the file. For example:

Sometimes there might not be a file in the filesystem. In that case, just throw an error.
You're always guaranteed to receive a filesystem with either one or zero files.

Good luck!

 */

let files = {
    'New folder': {
        'New folder': {}
    },
    'New folder (1)': {
        'New folder': {
            'funnyjoke.txt': 'lol i pranked you!!!'
        }
    },
    'New folder (2)': {}
};

console.log(search(files)); // New folder (1)/New folder/funnyjoke.txt



function search(files) {

    let root = "";
    const pathToFile = getFirstValidFile(root, files);

    if (!pathToFile)
        throw new Error('No files!');

    return pathToFile.substr(1);

    function getFirstValidFile(directory, files) {

        for (let fileName of Object.keys(files)) {

            const localDirectory = directory + "/" + fileName;
            const fileContent = files[fileName];

            if (typeof fileContent === 'string')
                return localDirectory;

            if ((typeof fileContent === 'object')){
                const pathToFile = getFirstValidFile(localDirectory, fileContent);
                if (pathToFile)
                    return pathToFile;
            }

        }

        return null;

    }

}
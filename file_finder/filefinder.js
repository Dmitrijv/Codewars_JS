/*

through a virtual filesystem of sorts to find a file, then return the path to the file. For example:

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

Sometimes there might not be a file in the filesystem. In that case, just throw an error.
You're always guaranteed to receive a filesystem with either one or zero files.

Good luck!

 */





function search(files) {

    let path = "";
    let fullPath = getFilePath(path, files);

    if (!fullPath)
    //throw new Error('No files!');
        return fullPath;

    function getFilePath(path, files){

        //console.log(path);

        for (let key of Object.keys(files)) {

            console.log(key)
            console.log(files[key])

            if ( (typeof files[key]) !== 'object'){
                console.log("MATCH!");
                return path + "/" + key;
            }

            if ((typeof files[key]) === 'object' && Object.keys(files[key]).length > 0){
                console.log(" recursive call");
                return getFilePath(path + "/" + key, files[key]);
            }

        }

    }

}
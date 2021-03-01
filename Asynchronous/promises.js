//Solution to functions executing in desirable order using promise | Escaping call back hell
//Promise baed functions
function download(){
    return new Promise((resolve, reject) => {
        console.log('Downloading...');
        //simulate error
        //return reject(new Error('Download failed!'));
        setTimeout(()=> {
            console.info('Download complete');
            resolve();
        }, 4000);
    }) 
};

function compress (){
    return new Promise((resolve, reject) => {
        console.log('Compressing...');
        //simulate error
        return reject(new Error('Compression failed!'));
        setTimeout(()=> {
            console.info('Compression Successful');
            resolve();
        }, 2000);
    });  
};

function upload (){
    return new Promise((resolve, reject) => {
        console.log('Uploading...');
        //simulate error    
        //return reject(new Error('Upload failed!'));
        setTimeout(()=> {
            console.info('Uploaded! Visit all files.');
        }, 6000);
    });
    
};

//Executes in undesirable order.
download()
    .then(() => {
        compress()
            .then(() => {
                upload();
            })
            .catch((err) => {
                console.error(err);
            })
            .then(() => {
                upload();
            })
    })
    .catch((err) => {
        console.error(err);
    })
//Warn error ToDo

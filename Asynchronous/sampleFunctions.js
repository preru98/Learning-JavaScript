//Simulating delay
function download(){
    console.log('Downloading...');
    setTimeout(()=> {
        console.info('Download complete');
    }, 4000);
};
function compress (){
    console.log('Compressing...');
    setTimeout(()=> {
        console.info('Operation Successful');
    }, 2000);
};

function upload (){
    console.log('Uploading...');
    setTimeout(()=> {
        console.info('Uploaded! Visit all files.');
    }, 6000);
};

//Executes in undesirable order.
download();
compress();
upload();

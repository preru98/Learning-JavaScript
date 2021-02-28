//Solution to functions executing in undesirable order using callbacks
function download(downloaded){
    console.log('Downloading...');
    setTimeout(()=> {
        console.info('Download complete');
        downloaded();
    }, 4000);
};
function compress (compressed){
    console.log('Compressing...');
    setTimeout(()=> {
        console.info('Operation Successful');
        compressed();
    }, 2000);
};

function upload (){
    console.log('Uploading...');
    setTimeout(()=> {
        console.info('Uploaded! Visit all files.');
    }, 6000);
};

//Executes in undesirable order.
download(() => {
    compress(() => {
        upload();
    });
});

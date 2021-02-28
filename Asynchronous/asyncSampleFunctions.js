//Solution to functions executing in undesirable order using callbacks
function download(downloaded){
    console.log('Downloading...');
    //simulate error
    //return downloaded(new Error('Download failed!'));
    setTimeout(()=> {
        console.info('Download complete');
        downloaded();
    }, 4000);
};

function compress (compressed){
    console.log('Compressing...');
    //simulate error
    return compressed(new Error('Compression failed!'));
    setTimeout(()=> {
        console.info('Compression Successful');
        compressed();
    }, 2000);
};

function upload (uploaded){
    console.log('Uploading...');
    //simulate error    
    return uploaded(new Error('Upload failed!'));
    setTimeout(()=> {
        console.info('Uploaded! Visit all files.');
    }, 6000);
};

//Executes in undesirable order.
download((err) => {
    if(err != null){
        throw err;
    }    compress((err) => {
        if(err!=null){
            throw err;
        }
        upload((err)=>{
            if(err){
                throw err;
            }
        });
    });
});

//Warn error ToDo

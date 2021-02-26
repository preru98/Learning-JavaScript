//Simulating delay
function download(){
    console.log('Downloading...');
    setTimeout(()=> {
        console.info('Download complete');
    }, 4000);
};

download();
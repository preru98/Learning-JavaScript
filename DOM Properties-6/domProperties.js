    //More like a javaScript class or object
document.body.myDetails={
name: 'Prerna',
id: 'none'
};
alert(document.body.myDetails.name);   // accessing property
alert(document.body.myDetails.id);
alert(document.body.myDetails);

    //Function Declaration
document.body.myFunction=function(){
    alert(document.body.tagName);      
}
document.body.myFunction();           //calling function
    //We can also modify built-in prototypes 

    //HTML Attributes as DOM Properties
alert(button.id);

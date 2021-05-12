let myPhotos = document.querySelectorAll('.fade');
let imagePageCounter = 0;
let prevBtn = document.querySelector('.prev');
let nextbtn = document.querySelector('.next');
let mainContainer = document.querySelector('.mainContainer');



function next() {

    //here we want to check the imageCounter in the limit :
    if(imagePageCounter < myPhotos.length) {
        myPhotos[imagePageCounter].style.display = "block";
    }
    else{
        //in this phase the image count increased more the length of photos that we have
        myPhotos[imagePageCounter-1].style.display = "none";
        //Again making the first to visible we first making the image cout = 0;
        imagePageCounter = 0;
        //making visible it:
        myPhotos[imagePageCounter].style.display = "block";
    }
}

function prev() {

    //Already there is an image we have to disable it:
    myPhotos[imagePageCounter].style.display = "none";
    //decrement the imageCounter var:
    imagePageCounter--;
    //make visible it:
    myPhotos[imagePageCounter].style.display = "block";
}

next();

mainContainer.addEventListener('click' , (event) => {

    if(event.target.className === "prev") {
       if(imagePageCounter !== 0) {
           prev();
       }
       else{

        //edge case :
        //when any fellow uer click the button when imageCount is 0 means we have to go for last image:
           myPhotos[imagePageCounter].style.display = "none";
           imagePageCounter = myPhotos.length - 1;
           myPhotos[imagePageCounter].style.display = "block";
       }
    }


    else if(event.target.className === "next"){
        //already there is a image in the container now
        myPhotos[imagePageCounter].style.display = 'none';
        //increase the photo count for every next
        imagePageCounter++;
        //calling the function:
        next();
        
    }
})




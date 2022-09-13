
function generatecard(){
    let floatingName = document.querySelector("#floatingName");
    let floatingcollegeName = document.querySelector("#floatingcollegeName");
    let floatingLocation = document.querySelector("#floatingLocation");
    // let image_input = document.querySelector("#image_input");

    let fname = document.querySelector("#fname");
    let clgname = document.querySelector("#clgname");
    let locat = document.querySelector("#locat");
    // let image = document.querySelector("#image")
    // let photo = reader.readAsDataURL(this.flies[0]);

    fname.innerHTML = floatingName.value;
    clgname.innerHTML = floatingcollegeName.value;
    locat.innerHTML = floatingLocation.value;
    // console.log(image_input.value);
    // image.innerHTML = image_input.value;
    // photo.innerHTML = display_images.value
    
}

const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change",function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    })
    reader.readAsDataURL(this.files[0]);
})

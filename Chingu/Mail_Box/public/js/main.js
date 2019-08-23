//fuunction to toggle the icon
function myFunction(x) {
    x.classList.toggle("change");

    let val = true;
    const searchShow = document.getElementById('search');
    
    if(!val) {
        searchShow.style.display = 'none';
        val = true;
    }else {
        searchShow.style.display = 'false'
    }
};  

//function to hide search bar
 const searchBox = () => {
   
 };


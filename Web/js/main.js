(function(){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset>150){
            header.classList.add('header_active');
        }
        else{
            header.classList.add('header')
        }
    };
}());
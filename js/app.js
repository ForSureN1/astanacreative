document.addEventListener('DOMContentLoaded', () => {
    let headerMenu = document.querySelector('.mobmenu');
    document.addEventListener('click', e => {
        // burger
        const target = e.target;
        if (target.classList.contains('burger')) {
            target.classList.toggle('_opened');
            headerMenu.classList.toggle('active');
        }
        // mob menu accordeons
        if (target.classList.contains('mobmenu__nav-link')) {
            let submenuFirstLevel = target.nextElementSibling;
            if (submenuFirstLevel != null) {
                target.classList.toggle('active');
                $(submenuFirstLevel).slideToggle();
            }
        }
        if (target.classList.contains('submenu-link')) {
            let submenuSecondLevel = target.nextElementSibling;
            if (submenuSecondLevel != null) {
                target.classList.toggle('active');
                $(submenuSecondLevel).slideToggle();
            }
        }
    });

    // set header phone and lang
    let headerPhone = document.querySelector('.header__phone');
    let headerLangs = document.querySelector('.header__lang');
    let headerPosition = document.querySelector('.burger');
    let mobilePosition = document.querySelector('.mobmenu__items');
    let flagHeader = true;

    function setHeaderItems() {
        if (window.innerWidth <= 992 && flagHeader) {
            flagHeader = false;
            mobilePosition.append(headerPhone);
            mobilePosition.append(headerLangs);
        } else if (window.innerWidth > 992 && !flagHeader) {
            flagHeader = true;
            headerPosition.before(headerPhone);
            headerPosition.before(headerLangs);
        }
    }
    window.addEventListener('resize', setHeaderItems);
    setHeaderItems();

    let headerTemplate = document.querySelector('.header');
    let submenuItems = document.querySelectorAll('.header__menu');
    let submenuCloseBtn = document.querySelector('.header__close-submenu');
    if (headerTemplate) {
        headerTemplate.addEventListener('mouseover', e => {
            const target = e.target;
            if (target.classList.contains('header__nav-link') && !target.classList.contains('active')) {
                let submenuItem = target.nextElementSibling;
                let headerMenuLinks = document.querySelector('.header__nav-link.active')
                if (headerMenuLinks) {
                    headerMenuLinks.classList.remove('active');
                }
                if (submenuItem != null) {
                    submenuCloseBtn.style.display = 'block';
                    submenuCloseBtn.animate([
                        { opacity: 0 },
                        { opacity: 1 }
                    ], { duration: 300, easing: 'ease-in-out' })
                    target.classList.add('active');
                    submenuItems.forEach(item => item.style.display = 'none');
                    submenuItem.style.display = 'grid';
                    submenuItem.animate([
                        { opacity: 0 },
                        { opacity: 1 }
                    ], { duration: 300, easing: 'ease-in-out' })
                } else {
                    submenuItems.forEach(item => item.style.display = 'none');
                    submenuCloseBtn.style.display = 'none';
                }
            }
        });
        submenuCloseBtn.addEventListener('click', () => {
            submenuItems.forEach(item => item.style.display = 'none');
            submenuCloseBtn.style.display = 'none';
            let headerMenuLinks = document.querySelector('.header__nav-link.active')
            if (headerMenuLinks) {
                headerMenuLinks.classList.remove('active');
            }
        })
    }
    // validate Form feedback
    let feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        let feedbackInputs = document.querySelectorAll('.feedback-input');
        // feedbackInputs.forEach(input => {
        //     input.addEventListener('focus', e => {
        //         const target = e.target;
        //         target.previousElementSibling.classList.add('focus');
        //     })
        // })
        feedbackForm.addEventListener('focus', e => {
            const target = e.target;
            if (target.classList.contains('feedback-input')) {
                target.previousElementSibling.classList.add('focus')
                target.nextElementSibling.classList.remove('show');
                target.previousElementSibling.classList.remove('warning');
            }
        }, true);
        feedbackForm.addEventListener('blur', e => {
            const target = e.target;
            if (target.classList.contains('feedback-input')) {
                target.previousElementSibling.classList.remove('focus')
            }
        }, true);
        feedbackForm.addEventListener('submit', e => {
            e.preventDefault();
            feedbackInputs.forEach(input => {
                if (input.value === '') {
                    input.nextElementSibling.classList.add('show');
                    input.previousElementSibling.classList.add('warning');
                }
            })
            const result = Array.from(feedbackInputs).filter(item => item.value === '');
            if (!result.length) {
                feedbackForm.submit();
            }
        })
    }
});

function submitForm() {
    $('#form_loader').show();
}
//Alert form
let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
for (let item of alertClose) {
    item.addEventListener('click', function(event) {
        alertt.classList.remove("alert--active")
        alertt.classList.remove("alert--warning")
        alertt.classList.remove("alert--error")
    })
}



window.onload = () => {
    // $.fn.setCursorPosition = function(pos) {
    //     if ($(this).get(0).setSelectionRange) {
    //         $(this).get(0).setSelectionRange(pos, pos)
    //     } else if ($(this).get(0).createTextRange) {
    //         var range = $(this).get(0).createTextRange()
    //         range.collapse(true)
    //         range.moveEnd('character', pos)
    //         range.moveStart('character', pos)
    //         range.select()
    //     }
    // }
    // $('input[type="tel"]').on('click', function() {
    //     $(this).setCursorPosition(3)
    // }).mask('+7 (999) 999 99 99')
    let swiperProductMain = new Swiper(".hero__slider", {
        spaceBetween: 30,
        // slidesPerView: 3.2,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next-unique',
            prevEl: '.swiper-button-prev-unique'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            577: {
                slidesPerView: 2,
            },
            993: {
                slidesPerView: 'auto',
            },
        },
    });
    $('.marquee').marquee({
        direction: 'left',
        speed: 100,
    });
    $('.team__items').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 700,
        dots: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 1241,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    });

};
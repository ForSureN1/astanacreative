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
            let headerMenuLinks = document.querySelector('.header__nav-link.active');
            if (headerMenuLinks) {
                headerMenuLinks.classList.remove('active');
            }
        });
        document.addEventListener('mouseover', e => {
            const target = e.target;
            if (!target.closest('.header')) {
                submenuItems.forEach(item => item.style.display = 'none');
                submenuCloseBtn.style.display = 'none';
                let headerMenuLinks = document.querySelector('.header__nav-link.active');
                if (headerMenuLinks) {
                    headerMenuLinks.classList.remove('active');
                }
            }
        })
    }
    // validate Form feedback
    let feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        let feedbackInputs = feedbackForm.querySelectorAll('.feedback-input');
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
    let feedbackFormSecond = document.getElementById('feedback-form-2');
    if (feedbackFormSecond) {
        let feedbackInputs = feedbackFormSecond.querySelectorAll('.feedback-input');
        // feedbackInputs.forEach(input => {
        //     input.addEventListener('focus', e => {
        //         const target = e.target;
        //         target.previousElementSibling.classList.add('focus');
        //     })
        // })
        feedbackFormSecond.addEventListener('focus', e => {
            const target = e.target;
            if (target.classList.contains('feedback-input')) {
                target.previousElementSibling.classList.add('focus')
                target.nextElementSibling.classList.remove('show');
                target.previousElementSibling.classList.remove('warning');
            }
        }, true);
        feedbackFormSecond.addEventListener('blur', e => {
            const target = e.target;
            if (target.classList.contains('feedback-input')) {
                target.previousElementSibling.classList.remove('focus')
            }
        }, true);
        feedbackFormSecond.addEventListener('submit', e => {
            e.preventDefault();
            feedbackInputs.forEach(input => {
                if (input.value === '') {
                    input.nextElementSibling.classList.add('show');
                    input.previousElementSibling.classList.add('warning');
                }
            })
            const result = Array.from(feedbackInputs).filter(item => item.value === '');
            if (!result.length) {
                feedbackFormSecond.submit();
            }
        })
    }

    let upper = document.querySelector('.upper');
    let upperBtn = document.querySelector('.upper-btn');
    let upperFlag = true;
    const showUpperArrow = () => {
        if (window.scrollY > window.innerHeight * 2 && upperFlag) {
            upperFlag = false;
            upper.style.display = 'block';
            upper.animate([{
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ], { duration: 200, easing: 'ease-in-out', fill: 'forwards' });
        } else if (window.scrollY < window.innerHeight * 2 && !upperFlag) {
            upperFlag = true;
            let upperAnimate = upper.animate([{
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ], { duration: 200, easing: 'ease-in-out', fill: 'forwards' });
            upperAnimate.addEventListener('finish', () => {
                upper.style.display = 'none';
            })
        }
    }
    if (upper) {
        window.addEventListener('scroll', showUpperArrow);
    }
    if (upperBtn) {
        upperBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                smooth: 'behavior'
            })
        })
    }

    // accordeon items price items
    let priceSection = document.querySelector('.service');
    if (priceSection) {
        priceSection.addEventListener('click', ({ target }) => {
            console.log(target);
            if (target.classList.contains('service__slider-toggle')) {
                let priceList = target.closest('.service__slider-item').querySelector('.service__slider-benefits');
                let priceListItems = priceList.querySelectorAll('.service__slider-benefit');
                if (!target.classList.contains('active')) {
                    target.classList.add('active');
                    priceListItems.forEach((item, i) => {
                        if (i > 5) {
                            item.style.display = 'flex';
                            item.animate([
                                { opacity: 0 },
                                { opacity: 1 }
                            ], { duration: 200, easing: 'ease-in-out' });
                        }
                    });
                } else if (target.classList.contains('active')) {
                    priceListItems.forEach((item, i) => {
                        target.classList.remove('active');
                        if (i > 5) {
                            item.style.display = 'none';
                        }
                    });
                }
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
    let swiperInnerPages = new Swiper(".pages__items", {
        spaceBetween: 30,
        slidesPerView: 3,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next-inner',
            prevEl: '.swiper-button-prev-inner'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            577: {
                slidesPerView: 2,
            },
            1240: {
                slidesPerView: 3,
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
    // slider case
    let caseSlider = document.querySelector('.adaptive');
    if (caseSlider) {
        var swiper = Swiper;
        var init = false;

        function swiperMode() {
            let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1240px)')
            let desktop = window.matchMedia('(min-width: 1240px)');
            // Enable (for mobile)
            if (mobile.matches) {
                if (!init) {
                    init = true;
                    swiper = new Swiper('.adaptive__items', {
                        slidesPerView: 1,
                        autoplay: false,
                        centeredSlides: true,
                        loop: true,
                        navigation: {
                            nextEl: '.swiper-button-prev-unique',
                            prevEl: '.swiper-button-next-unique',
                        },
                    });
                }

            }

            // Disable (for desktop)
            else if (desktop.matches && init) {
                swiper.destroy();
                init = false;
            }
        }
        swiperMode();
        window.addEventListener('resize', function() {
            swiperMode();
        });
    }

    // sliders price pages
    let pricePage = document.querySelector('.service');
    if (pricePage) {
        let init = true;
        // let arraySlider = [];
        const buildSwiperSlider = (sliderElm, i) => {
            return new Swiper(sliderElm, {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    prevEl: `.service-arrow-prev-${i}`,
                    nextEl: `.service-arrow-next-${i}`
                },
            });
        };

        function swiperModePrice() {
            let allSliders = document.querySelectorAll('.service__slider');
            let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)')
            let desktop = window.matchMedia('(min-width: 769px)');
            if (mobile.matches && init) {
                init = false;
                allSliders.forEach((slider, i) => {
                    buildSwiperSlider(slider, i);
                });
            } else if (desktop.matches && !init) {
                init = true;
                allSliders.forEach((slider, i) => {
                    let swiper = slider.swiper;
                    swiper.destroy();
                });
            }
        }
        swiperModePrice();
        window.addEventListener('resize', function() {
            swiperModePrice();
        });
    }

    // sliders price pages
    let contactslider = document.querySelector('.contacts');
    if (contactslider) {
        var swiper = Swiper;
        var init = false;

        function swiperMode() {
            let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1240px)')
            let desktop = window.matchMedia('(min-width: 1240px)');
            // Enable (for mobile)
            if (mobile.matches) {
                if (!init) {
                    init = true;
                    swiper = new Swiper('.contacts__items', {
                        slidesPerView: 1,
                        autoplay: false,
                        centeredSlides: true,
                        spaceBetween: 10,
                        loop: true,
                        navigation: {
                            nextEl: '.contacts__slider-arrow.next',
                            prevEl: '.contacts__slider-arrow.prev',
                        },
                    });
                }

            }

            // Disable (for desktop)
            else if (desktop.matches && init) {
                swiper.destroy();
                init = false;
            }
        }
        swiperMode();
        window.addEventListener('resize', function() {
            swiperMode();
        });
    }


    $('.way').waypoint({
        handler: function() {
            $(this.element).addClass("way--active");

        },
        offset: '88%'
    });
};
function updatePricing() {
    if ($("#pricing_anually_month").is(':checked')) {
        $("#tester_mode").text("0 / Year");
        $("#developer_mode").text("14.99 / Year");
        $("#seller_mode").text("24.99 / Year");
    } else {
        $("#tester_mode").text("0 / Month");
        $("#developer_mode").text("2.99 / Month");
        $("#seller_mode").text("4.99 / Month");
    }
}

$(document).ready(function () {
    $("#pricing_anually_month").click(updatePricing);
    updatePricing();

    $('[data-v]').each(function () {
        let type = $(this).data('v');
        let element = $(this);
        let count = element.text();

        if (count !== '0') {
            let newCount = [];
            count.split(',').forEach(function (c) {
                newCount.push("<span class='countup'>" + c + "</span>");
            });
            element.html(newCount.join(','));
        }
    });

});

const animationDuration = 2000;
const frameDuration = 1000 / 60;
const totalFrames = Math.round(animationDuration / frameDuration);
const easeOutQuad = t => t * (2 - t);
const animateCountUp = (el, countTo) => {
    let frame = 0;

    const counter = setInterval(() => {
        frame++;

        const progress = easeOutQuad(frame / totalFrames);

        const currentCount = Math.round(countTo * progress).toLocaleString(undefined, { minimumIntegerDigits: el.textContent.length });

        if (el.textContent !== currentCount) {
            el.textContent = currentCount;
        }

        if (frame === totalFrames) {
            clearInterval(counter);
        }
    }, frameDuration);
};

const runAnimations = () => {
    const countupEls = document.querySelectorAll('.countup');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const countTo = parseInt(entry.target.textContent.replace(/,/g, ''), 10);
                animateCountUp(entry.target, countTo);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    countupEls.forEach(el => {
        observer.observe(el);
    });
};

runAnimations();

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__backInLeft');
            entry.target.classList.remove('hidden_l');
            observer.unobserve(entry.target);
        }
    });
};

const animateOnScrollInUp = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__backInUp');
            entry.target.classList.remove('hidden_l');
            observer.unobserve(entry.target);
        }
    });
};

const animateOnScrollInDown = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__backInDown');
            entry.target.classList.remove('hidden_l');
            observer.unobserve(entry.target);
        }
    });
};

const animateOnScrollRight = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__backInRight');
            entry.target.classList.remove('hidden_l');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.5 });
const observerRight = new IntersectionObserver(animateOnScrollRight, { threshold: 0.5 });
const observerInUp = new IntersectionObserver(animateOnScrollInUp, { threshold: 0.5 });
const observerInDown = new IntersectionObserver(animateOnScrollInDown, { threshold: 0.5 });

const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
const elementsToAnimateRight = document.querySelectorAll('.animate-on-scroll-right');
const elementsToAnimateInUp = document.querySelectorAll('.animate-on-scroll-in-up');
const elementsToAnimateInDown = document.querySelectorAll('.animate-on-scroll-in-down');

elementsToAnimate.forEach(element => {
    element.classList.add('hidden_l');
    observer.observe(element);
});

elementsToAnimateRight.forEach(element => {
    element.classList.add('hidden_l');
    observerRight.observe(element);
});

elementsToAnimateInUp.forEach(element => {
    element.classList.add('hidden_l');
    observerInUp.observe(element);
});

elementsToAnimateInDown.forEach(element => {
    element.classList.add('hidden_l');
    observerInDown.observe(element);
});

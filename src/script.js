$(document).ready(() => {
    const slickOptions = {
        autoplay: true,
        dosts: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>',
    };
    $(".slider").slick(slickOptions);

    $('footer__form-button').on('click', () => {
        const email = $('#email').val();
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "servermanager2023rj@gmail.com",
            Password: "abc101020",
            To: "crusherfighter1010@gmail.com",
            From: email,
            Subject: "Por favor me adicione na newsletter",
            Body: `Olá,

            Eu gostaria de ser adicionado na newsletter d osite.
            Meu email é $(email).
            
            Obrigado!
            `,
        }).then(
            message => alert(message),
        );
    })
});

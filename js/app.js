'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html'),
            new Route('contact', 'contact.html'),
            new Route('preguntas', 'preguntas.html'),
            new Route('respuestas', 'respuestas.html'),
            new Route('proxima', 'proximamente.html'),
            new Route('EP1', 'EP1_menu.html'),
            new Route('EP2', 'EP2_menu.html'),
            new Route('EP2Roja', 'EP2_roja.html'),

        ]);
    }

    init();
}());
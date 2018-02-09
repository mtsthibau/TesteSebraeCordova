
var navBarCtrl = {

    startNavBar: function () {
        var logoLink = "index.html";
        var logoWidth = "37";
        var logoHeight = "100";

        var navBar = "<nav class='navbar is-fixed-top is-link' role='navigation' aria-label='main navigation'>" +
            "<div class='navbar-brand'>" +
            "<a class='navbar-item has-text-weight-semibold'> Cursos</a>" +
            "<button class='is-mobile button navbar-burger is-link' id='btnSearch'>" +
            "<span class=' fa fa-search has-text-right'></span>" +
            "</button>" +
            "</div>" +
            "</nav>";

        $("#alcNavbar").html(navBar);

        this.registerEvents();
    },


    registerEvents: function () {

        $(document).on("click", ".navbar-item", function (e) {
            return;
        });

    },

};
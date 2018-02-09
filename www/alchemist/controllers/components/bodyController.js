var bodyCtrl = {

    startBody: function (bodyContains) {

        var html = "<div class='wrapper'><div class='row'>";

        for (var i = 0; i < bodyContains.data.length; i++) {
            html += "<div class='col-xs-12 col-sm-4'>" +
                "<div class='card' id='" + i + "'>" +
                "<div class='card-content'>" +
                "<div class='content'>" +
                "<span class='is-size-7 has-text-grey'>" + bodyContains.data[i].category + "</span>" +
                "<br>" +
                "<span class='is-size-6 has-text-black-bist has-text-weight-semibold titulo'>" + bodyContains.data[i].title + "</span>" +
                "<br>" +
                "<span class='is-size-6 has-text-grey'>" + bodyContains.data[i].address.city + "</span>" +
                "</div>" +
                "</div>" +
                "<footer class='card-footer'>" +
                "<span class='card-footer-item has-text-grey has-text-left'> <span class='fa fa-calendar'></span> &nbsp &nbsp" + coreCtrl.dateFormated(bodyContains.data[i].start) +
                "</footer> " +
                "</div>" +
                "</div>";
        }

        html += "</div></div>";
        $("#alcBody").html(html);

        bodyCtrl.registerEvents();
    },

    registerEvents: function () {
        $(document).on("click", ".card", function (e) {
            e.stopImmediatePropagation();

            var id = parseInt($(this).attr("id"));

            bodyCtrl.loadDetalhe(id);

            return;
        });

    },


    loadDetalhe: function (id) {

        var cursoObj = requisitionCtrl.data.data[id];

        var html = "<div class='col-xs-12 col-md-10 col-md-offset-1'>" +
            "<div class='card detalhe'>" +
            "<div class='card-content'>" +
            "<div class='content'>" +
            "<span class='is-size-3'>" + cursoObj.category + "</span>" +
            "<br>" +
            "<span class='is-size-7 has-text-grey has-text-weight-semibold titulo'>" + cursoObj.description + "</span>" +
            "<br><br>" +
            "<div class='col-xs-12 margemBottom-xs'>" +
            "<span class='is-size-6 has-text-grey'><span class='fa fa-calendar'></span> " + coreCtrl.dateFormated(cursoObj.start) + "</span>" +
            "</div>" +
            "<div class='col-xs-12 margemBottom-xs'>" +
            "<span class='is-size-6 has-text-grey'><span class='fa fa-clock'></span> De " + new Date(cursoObj.start).getHours() + " às " + + new Date(cursoObj.finish).getHours() +
            " - " + coreCtrl.diffHours(cursoObj.start, cursoObj.finish) + " h" + "</span>" +
            "</div>" +
            "<div class='col-xs-12 margemBottom-xs'>" +
            "<span class='is-size-6 has-text-grey'><span class='fa fa-map-marker'></span> <a>" + cursoObj.address.street + ", " + cursoObj.address.number + " - " + cursoObj.address.city + "</a></span>" +
            "</div>" +
            "<div class='col-xs-12 margemBottom-xs'>" +
            "<span class='is-size-6 has-text-grey'><span class='fa fa-tag'></span>" + cursoObj.category + "</span>" +
            "</div>" +
            "<div class='col-xs-12 margemBottom-xs'>" +
            "<span class='is-size-6 has-text-grey'><figure class='image is-128x128'>" +
            "<img src= '../images/logo.png' width='80' height='80'> " + cursoObj.consultant.name  +
            "</figure ></span>" +
            "</div>" +
            "<div class='col-xs-12 margemBottom-xs'>" +
            "<button class='button is-warning inscricao'>Inscrição</button>" +
            "</div>" +  
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";


        $("#alcBody").html(html);
        $(".navbar.is-fixed-top.is-link").addClass("nav-detalhe");
        $(".navbar-item.has-text-weight-semibold").html("<span class='fa fa-arrow-left' id='goBack'></span>");
        $("#btnSearch").hide();
        
        $(document).on("click", ".navbar-item", function (e) {
            e.stopImmediatePropagation();

            requisitionCtrl.requestHttp(bodyCtrl.startBody);
            $(".navbar.is-fixed-top.is-link").removeClass("nav-detalhe");
            $(".navbar-item.has-text-weight-semibold").html("Cursos");
            $("#btnSearch").show();

            return;
        });
    }
}
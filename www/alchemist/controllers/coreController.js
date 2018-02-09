var socket = "";

var coreCtrl = {

    startAlchemistApp: function (aEvent) {
        //Start Components
        navBarCtrl.startNavBar();
        requisitionCtrl.requestHttp(bodyCtrl.startBody);
    },

    dateFormated: function (d) {
        var data = new Date(d);
        var dia = data.getDate();
        if (dia.toString().length == 1)
            dia = "0" + dia;
        var mes = data.getMonth() + 1;
        if (mes.toString().length == 1)
            mes = "0" + mes;

        mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];

        var ano = data.getFullYear();
        return dia + " de " + mes + " de " + ano;
    },

    diffHours: function (start, end) {
        return new Date(end).getHours() - new Date(start).getHours();
    }

}
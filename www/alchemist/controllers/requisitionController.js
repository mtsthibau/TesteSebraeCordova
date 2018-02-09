var requisitionCtrl = {
    data: null,
    requestHttp: function (callBack) {

        //PARA HABILITAR CORS!!!!!!

		// var request = new Request({
		// url: "https://git.sebraemg.com.br/publico/test-frontend/raw/master/api/courses.json",
			// onSuccess: function(content) {
				// requisitionCtrl.data = msg;
				// requisitionCtrl.data = JSON.parse(requisitionCtrl.data);

				// if (typeof callBack == "function")
					// callBack(requisitionCtrl.data);
			// }
		// }).send();


        $.ajax({
            method: "GET",
            url: "https://git.sebraemg.com.br/publico/test-frontend/raw/master/api/courses.json",
            data: { }
        }).done(function (msg) {
            requisitionCtrl.data = msg;
            requisitionCtrl.data = JSON.parse(requisitionCtrl.data);

            if (typeof callBack == "function")
                callBack(requisitionCtrl.data);

        }).fail(function (jqXHR, textStatus, msg) {
            alert(msg);
        });
    }
}
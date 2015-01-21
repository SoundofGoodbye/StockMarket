stockApp.factory('notifyService',
    function () {
        return {
            showInfo: function (msg) {
                noty({
                        text: msg,
                        type: 'info',
                        layout: 'topCenter',
                        timeout: 1000
                    }
                );
            },
            showError: function (msg, serverError) {
                var error = serverError.error;
                if (error.length > 0) {
                    msg = msg + ":<br>" + error;
                }
                noty({
                        text: msg,
                        type: 'error',
                        layout: 'topCenter',
                        timeout: 5000
                    }
                );
            }
        }
    });
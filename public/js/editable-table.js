var EditableTable = function () {

    return {

        //main function to initiate the module
        init: function () {

            // var oTable = $('#data-table').dataTable({
            //     "aLengthMenu": [
            //         [5, 10, 15, -1],
            //         [5, 10, 15, "All"] // change per page values here
            //     ],
            //     // set the initial value
            //     "iDisplayLength": 5,
            //     "sDom": "<'row'<'col-lg-6'l><'col-lg-6'f>r>t<'row'<'col-lg-6'i><'col-lg-6'p>>",
            //     "sPaginationType": "bootstrap",
            //     "oLanguage": {
            //         "sLengthMenu": "_MENU_ records per page",
            //         "oPaginate": {
            //             "sPrevious": "Prev",
            //             "sNext": "Next"
            //         }
            //     },
            //     "aoColumnDefs": [{
            //             'bSortable': false,
            //             'aTargets': [0]
            //         }
            //     ]
            // });

            jQuery('#editable-sample_wrapper .dataTables_filter input').addClass("form-control medium"); // modify table search input
            jQuery('#editable-sample_wrapper .dataTables_length select').addClass("form-control xsmall"); // modify table per page dropdown
        }

    };

}();
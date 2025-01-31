$("#kt_datatable_licenses").DataTable({
	"order": [[1, 'desc']],
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'license-fetch.php'
	},
	'columns': [
		{
			data: 'checkbox'
		},
		{
			data: 'key'
		},
		{
			data: 'gendate'
		},
		{
			data: 'genby'
		},
		{
			data: 'expires'
		},
		{
			data: 'note'
		},
		{
			data: 'usedon'
		},
		{
			data: 'usedby'
		},
		{
			data: 'status'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_"
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_tokens").DataTable({
	"order": [[1, 'desc']],
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'token-fetch.php'
	},
	'columns': [
		{
			data: 'app'
		},
		{
			data: 'token'
		},
		{
			data: 'assigned'
		},
		{
			data: 'banned'
		},
		{
			data: 'reason'
		},
		{
			data: 'hash'
		},
		{
			data: 'type'
		},
		{
			data: 'status'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_"
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_reseller_licenses").DataTable({
	"order": [[1, 'desc']],
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'reseller-license-fetch.php'
	},
	'columns': [{
			data: 'key'
		},
		{
			data: 'gendate'
		},
		{
			data: 'expires'
		},
		{
			data: 'note'
		},
		{
			data: 'usedon'
		},
		{
			data: 'usedby'
		},
		{
			data: 'status'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_"
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_users").DataTable({
	"order": [[3, 'desc']],
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'user-fetch.php'
	},
	'columns': [
		{
			data: 'checkbox'
		},
		{
			data: 'username'
		},
		{
			data: 'hwid'
		},
		{
			data: 'ip'
		},
		{
			data: 'createdate'
		},
		{
			data: 'lastlogin'
		},
		{
			data: 'banned'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_user_vars").DataTable({
	"order": [[2, 'asc']],
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'user-var-fetch.php'
	},
	'columns': [{
			data: 'name'
		},
		{
			data: 'data'
		},
		{
			data: 'user'
		},
		{
			data: 'readOnly'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_reseller_users").DataTable({
	"order": [[3, 'desc']],
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'reseller-user-fetch.php'
	},
	'columns': [{
			data: 'username'
		},
		{
			data: 'hwid'
		},
		{
			data: 'ip'
		},
		{
			data: 'createdate'
		},
		{
			data: 'lastlogin'
		},
		{
			data: 'banned'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_subs").DataTable({
	"order": [[1, 'asc']],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_chats").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_messages").DataTable({
	"order": [[2, 'desc']],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_sessions").DataTable({
	"order": [[2, 'desc']],
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'session-fetch.php'
	},
	'columns': [{
			data: 'id'
		},
		{
			data: 'credential'
		},
		{
			data: 'expiry'
		},
		{
			data: 'validated'
		},
		{
			data: 'ip'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_webhooks").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_files").DataTable({
	"order": [[3, 'desc']],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_vars").DataTable({
	"order": [[0, 'asc']],
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'var-fetch.php'
	},
	'columns': [{
			data: 'varid'
		},
		{
			data: 'msg'
		},
		{
			data: 'authed'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_logs").DataTable({
	"order": [[0, 'desc']],
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'log-fetch.php'
	},
	'columns': [{
			data: 'logdate'
		},
		{
			data: 'logdata'
		},
		{
			data: 'credential'
		},
		{
			data: 'pcuser'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_blacklists").DataTable({
	"order": [[1, 'desc']],
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'black-fetch.php'
	},
	'columns': [
		{
			data: 'checkbox'
		},
		{
			data: 'data'
		},
		{
			data: 'type'
		},
		{
			data: 'reason'
		},
		{
			data: 'actions'
		},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_whitelists").DataTable({
	"order": [[1, 'desc']],
	'processing': true,
	'serverSide': true,
	'serverMethod': 'post',
	'ajax': {
		'url': 'white-fetch.php'
	},
	'columns': [{
		data: 'ip'
	},
	{
		data: 'reason'
	},
	{
		data: 'actions'
	},
	],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_account_logs").DataTable({
	"order": [[0, 'desc']],
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_manageaccs").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_webloader").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

$("#kt_datatable_admin").DataTable({
	"language": {
		"lengthMenu": "Show _MENU_",
	},
	"dom": "<'row'" +
		"<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
		"<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
		">" +

		"<'table-responsive'tr>" +

		"<'row'" +
		"<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
		"<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
		">"
});

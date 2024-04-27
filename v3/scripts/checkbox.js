$(document).ready(function() {
    setTimeout(function() {
        $('input[type="checkbox"]').change(function() {
            var selected = $('input[type="checkbox"]:checked').map(function() {
                return this.value;
            }).get();
            $('#selected').val(JSON.stringify(selected));

            var anyChecked = $('input[type="checkbox"]').is(':checked');
            if(anyChecked) {
                $('#delselectedwhitelist').removeClass('hidden');
            } else {
                $('#delselectedwhitelist').addClass('hidden');
            }
        });
    }, 1000);
});

$(document).ready(function () {
    var arrow = document.getElementById('arrow')
    $('#left-sidebarCollapse').on('click', function () {
        $('#left-sidebar').toggleClass('active');
        $('#content').toggleClass('active');
        if (arrow.className == 'fa fa-chevron-left')
            arrow.className = 'fa fa-chevron-right';
        else
            arrow.className = 'fa fa-chevron-left';
    });
});
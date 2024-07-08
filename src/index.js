$(document).ready(function() {
    // Hide all descriptions initially
    $('.description').hide();

    // Click event handler for icons
    $('.icon').click(function() {
        var target = $(this).data('target');
        $('.description').not(target).hide(); // Hide all descriptions except the target
        $(target).toggle(); // Toggle the target description
    });

    $('.portfolio-hover').hover(
        function() {
            $(this).find('.hover-content').css('opacity', '1');
        },
        function() {
            $(this).find('.hover-content').css('opacity', '0');
        }
    );
    
});

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
    // Form submission handler
    $('#contact-form').submit(function(event) {
        event.preventDefault();
        var name = $('#name').val();
        alert(name + ', we have received your message. Thank you for reaching out to us.');
    });
    
});

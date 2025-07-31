$(document).ready(function () {
    const $sidebar = $('#sidebarMenu');
    const $backdrop = $('#sidebarBackdrop');
    const $goTopBtn = $('#goTopBtn');

    // Open sidebar
    $('#openSidebar').on('click', function () {
      $sidebar.addClass('active');
      $backdrop.addClass('active');
      $('body').css('overflow', 'hidden');
    });

    // Close sidebar function
    function closeSidebar() {
      $sidebar.removeClass('active');
      $backdrop.removeClass('active');
      $('body').css('overflow', '');
    }

    // Close when clicking close button or backdrop
    $('#closeSidebar').on('click', closeSidebar);
    $backdrop.on('click', closeSidebar);
    $('.nav-link').on('click', closeSidebar);

    // Close on Escape key
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape' && $sidebar.hasClass('active')) {
        closeSidebar();
      }
    });

    // Close when clicking outside the sidebar
    $(document).on('mousedown', function (e) {
      if (
        $sidebar.hasClass('active') &&
        !$(e.target).closest('#sidebarMenu, #openSidebar').length
      ) {
        closeSidebar();
      }
    });

    // Show/hide on scroll
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
        $goTopBtn.addClass('d-flex');
        $goTopBtn.fadeIn();
      } else {
        $goTopBtn.removeClass('d-flex');
        $goTopBtn.fadeOut();
      }
    });

    // smooth scroll to top on click
    $goTopBtn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 500);
    });

  });

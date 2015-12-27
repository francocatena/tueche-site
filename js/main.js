+function () {
  var hideAddressBar = function () {
    if (! window.location.hash) {
      if (document.height < window.outerHeight)
        document.body.style.height = (window.outerHeight + 50) + 'px'

      setTimeout(function () {
        window.scrollTo(0, 1)
      }, 50)
    }
  }

  $(window).on('load', function () {
    if (! window.pageYOffset) hideAddressBar()
  })

  $(window).on('orientationchange', hideAddressBar)
}()

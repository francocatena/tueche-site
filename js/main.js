+function () {
  var isMobile  = /mobile/i.test(navigator.userAgent)
  var hasNoHash = ! location.hash

  if (isMobile && hasNoHash)
    setTimeout(function() { window.scrollTo(0, 1) }, 1000)
}()

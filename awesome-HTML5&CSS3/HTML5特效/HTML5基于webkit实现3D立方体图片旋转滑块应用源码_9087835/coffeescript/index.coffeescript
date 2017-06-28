$ ->
  $('#nav').on 'click', 'a', (e) ->
    e = e ? e : window.event
    e.preventDefault()
    e.stopPropagation()
    if( $('#nav').hasClass('active'))
      return false
    $('.focus').removeClass('focus')
    $(this).addClass('focus')
    $('#nav').addClass('active');
    theSlide = $(this).attr 'data-slide'
    active = $('.active').attr('data-slide')
    $('.slide').removeClass('active')
    rotateSlider(theSlide, active)
    
  #DEMO  
  setTimeout ()->
    $('#nav a[data-slide="2"]').trigger('click')
  , 500
  
  setTimeout ()->
    $('#nav a[data-slide="3"]').trigger('click')
  , 1200
  
  setTimeout ()->
    $('#nav a[data-slide="4"]').trigger('click')
  , 1900
    
rotateSlider = (slide, active) ->
  slides = 
    1: 'one'
    2: 'two'
    3: 'three'
    4: 'four'
  
  ###
  TODO -
  detect current slide position and calculate no. slides to 
  target.  Ease through those slides to avoid CSS3 
  transition wonkiness.
  ###  
  theSlide = slides[slide]
  delta = Math.abs slide - active
  
  if delta is 3 and active is '1'
    
    $('.slide[data-slide="'+slide+'"]').addClass('active')
    $('.slider-inner').attr 'class', 'slider-inner rotate two'
    setTimeout ()->
      $('.slider-inner').attr 'class', 'slider-inner rotate three'
    , 400
    setTimeout ()->
      $('.slider-inner').attr 'class', 'slider-inner rotate four'
    , 800
    
  else if delta is 3 and active is '4'
    
    $('.slide[data-slide="'+slide+'"]').addClass('active')
    $('.slider-inner').attr 'class', 'slider-inner rotate three'
    setTimeout ()->
      $('.slider-inner').attr 'class', 'slider-inner rotate two'
    , 350
    setTimeout ()->
      $('.slider-inner').attr 'class', 'slider-inner rotate one'
    , 700
    
    
  else
    $('.slide[data-slide="'+slide+'"]').addClass('active')
    $('.slider-inner').attr 'class', 'slider-inner rotate '+theSlide
  
  
  $('#nav').removeClass('active')
  
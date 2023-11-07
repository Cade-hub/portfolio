import Knobs from './knobs.min.js'

function Counter(selector, settings){
    this.settings = Object.assign({
      digits: 5,
      delay: 250, // ms
      direction: ''  // ltr is default
    }, settings || {})
    
    this.DOM = {}
    this.build(selector)
    
    this.DOM.scope.addEventListener('transitionend', e => {
      if (e.pseudoElement === "::before" && e.propertyName == 'margin-top'){
        e.target.classList.remove('blur')
      }
    })
    
    this.count()
  }
  
  Counter.prototype = { 
    // generate digits markup
    build( selector ){
        var scopeElm = typeof selector == 'string' 
              ? document.querySelector(selector) 
              : selector 
                ? selector
                : this.DOM.scope
        
        scopeElm.innerHTML = Array(this.settings.digits + 1)
            .join('<div><b data-value="0"></b></div>');
      
        this.DOM = {
          scope : scopeElm,
          digits : scopeElm.querySelectorAll('b')
        }
    },
    
    count( newVal ){
      var countTo, className, 
          settings = this.settings,
          digitsElms = this.DOM.digits;
  
      // update instance's value
      this.value = newVal || this.DOM.scope.dataset.value|0
  
      if( !this.value ) return;
  
      // convert value into an array of numbers
      countTo = (this.value+'').split('')
  
      if( settings.direction == 'rtl' ){
        countTo = countTo.reverse()
        digitsElms = [].slice.call(digitsElms).reverse()
      }
  
      // loop on each number element and change it
      digitsElms.forEach(function(item, i){ 
          if( +item.dataset.value != countTo[i]  &&  countTo[i] >= 0 )
            setTimeout(function(j){
                var diff = Math.abs(countTo[j] - +item.dataset.value);
                item.dataset.value = countTo[j]
                if( diff > 3 )
                  item.className = 'blur';
            }, i * settings.delay, i)
      })
    }
  }
  
  
  
  /////////////// create new counter for this demo ///////////////////////
  
  var counter = new Counter('.numCounter', {
    direction : 'rtl', 
    delay     : 200, 
    digits    : 7
  })
  
  // change counter value every N seconds
  var counterInterval = setInterval(randomCount, 3000)
  
  function randomCount(){
    counter.count(  +(""+Math.random()).substring(2, 2+counter.settings.digits)  )
  }
  
  function getRandomNum(min,max){
      return Math.floor(Math.random()*(max-min+1) + min)
  }
  
  
  
  /////////////// Controls ///////////////////////
  
  
  var settings = {
    visible: 0, 
    CSSVarTarget: document.querySelector('.numCounter'), 
    knobs: [
      {
        label: 'Number of Digits',
        type: 'range',
        value: 7,
        min: 1,
        max: 12,
        onChange: e => {
          clearInterval(counterInterval)
          counter.settings.digits = +e.target.value;
          counter.build()
          counterInterval = setInterval(randomCount, 3000)
          randomCount()
        }
      },
      {
        label: 'Delay',
        type: 'range',
        value: 200,
        min: 0,
        max: 400,
        step: 25,
        onChange: e => counter.settings.delay = +e.target.value
      },
      {
        cssVar: ['hide'], // alias for the CSS variable
        label: 'Animate Right-To-Left',
        type: 'checkbox',
        checked: true,
        value: 'none',
        onChange: e => counter.settings.direction = e.target.checked ? "rtl" : ""
      }
    ]
  }
  
  var myKnobs = new Knobs(settings)
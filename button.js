
    console.log('running finder')
    var allElements = document.querySelectorAll('*')
    var documentBody = document.querySelector('body');
    var isLocked = false;

    var runScriptBtn = document.createElement('div');
    var runScriptBtnText = document.createTextNode('Toggle Id Finder')
    runScriptBtn.style.cssText('width: 100px; height: 150px; background-color: black; color: white')
    document.querySelector('header').appendChild(runScriptBtn);
  
    allElements.forEach(element => {
        initialBackgroundColor = element.style.backgroundColor;
        initialOverflow = element.style.overflow;
        if(element.tagName !== 'HTML') {
        element.addEventListener('mouseover', e => {
            e.stopPropagation()
            var elementReference = element.id || element.classList[0] || 'NO ID' ;
            var span = document.createElement("span");
            var text = document.createTextNode(elementReference)
            span.setAttribute('id', 'id-checker')
            span.style.border = '2px solid red'
            span.style.padding = '20px'
            span.style.minWidth = '300px';
            span.style.minHeight = '150px'
            span.style.maxHeight = '300px'
            span.style.position = 'absolute'
            span.style.zIndex = '9999'
            span.style.color = 'black'
            // span.style.top = '5rem';
            span.style.fontSize = '2em';
            span.style.backgroundColor = 'white'
            span.addEventListener('keyup', (e) => {
                if( e.keyCode === 13) {
                    console.log('prssed enter')
                } else {
                    console.log(e.keyCode);
                }
            })
    
            if(!isLocked) {
                span.appendChild(text);
            }
    
            element.style.backgroundColor = '#fff5df';
            console.log(element.parentElement.tagName)
            function findSection(el) {
            console.log(el.tagName)
            var isRunning = true;
            if(isRunning) {
                if(el.tagName === 'SECTION'){
                    console.log('found section')
                    el.appendChild(span)
                    return isRunning = false;
                } else if(el.tagName === 'BODY') {
                    return isRunning = false;
                } else {
                    return findSection(el.parentElement);
                }
            }
            }
            findSection(element)
        });
    }
  
  
        if(!isLocked) {
        element.addEventListener('mouseout', e => {
            element.style.backgroundColor = initialBackgroundColor;
            var el = document.getElementById('id-checker');
            return el && el.remove();
        })
        }
  })
  
  
  
  

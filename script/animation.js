window.addEventListener('load',function(e){
    e.preventDefault();
    
    const ratio = .001
    const options={
        root:null,
        rootMargin: '0px',
        threshold: ratio
    } 

    const handleIntersect=function(entries,observer){
        entries.forEach(function(entry){
            if(entry.intersectionRatio < ratio){
                entry.target.classList.add('clear')
            }//if
        });
    }//handle
    
    const observer = new IntersectionObserver(handleIntersect,options);
    document.querySelectorAll('.slide1').forEach(function(r){
        observer.observe(r)
    })

})
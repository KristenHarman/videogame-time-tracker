const decHealth= document.querySelectorAll('.decHealth')


Array.from(decHealth).forEach((el)=>{
    el.addEventListener('click', decHealth)

 function decHealth(){
            var health = document.getElementById("health")
            health.value -= 10; 
                }
            })
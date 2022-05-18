
var div=document.querySelectorAll('.div1');
// alert(div.length)
var count=0;
document.addEventListener('keydown', e=>{
   if(e.key=='ArrowRight' || e.key=='ArrowDown')
      {
         for(i=0;i<div.length;i++)
           div[i].classList.add('sansDisplay');
      if(count<div.length-1)
          count++;
          div[count].classList.remove('sansDisplay');

      }
   if(e.key=='ArrowLeft' || e.key=='ArrowUp')
      {
         for(i=0;i<div.length;i++)
         div[i].classList.add('sansDisplay');
         if(count>0)
           count--;
           div[count].classList.remove('sansDisplay');
      }
});
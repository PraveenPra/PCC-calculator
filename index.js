function show(){
   /*when you press the table, it will show up or else it remains hidden  */ document.getElementById("tab").style.display="block";
  } 
  
    
//to calucate and clear the screen------------------------------  
var cal=document.querySelector('#cal');
        
var clear=document.querySelector('#clear');
    
var ol=document.querySelector('ol');

var ul=document.querySelector('ul');
  
var edit =document.querySelector('#edit');  
var edit1 =document.querySelector('#edit1');
var edit2 =document.querySelector('#edit2');
var edit3 =document.querySelector('#edit3');
var edit4 =document.querySelector('#edit4');
var edit5 =document.querySelector('#edit5');

//----------edit table values and display them. NOTE: edited values are not yet used in the formula. old values are still in use---------------------
 edit.addEventListener('click',()=>{
  monthlyminimum = prompt("enter monthly minimum");
 var span1=document.querySelector('#m11');
 span1.innerHTML=monthlyminimum ;
 weeklyMinimum=monthlyminimum/4;
 var span1a=document.querySelector('#m11a');
 span1a.innerHTML=weeklyMinimum ;
console.log(span1);
}  ) 

edit1.addEventListener('click',()=>{
  tax11= prompt("enter tax ");
 var span1=document.querySelector('#m22');
 span1.innerHTML=tax11 ;
}  ) 

edit2.addEventListener('click',()=>{
  fac11= prompt("enter fac ");
 var span1=document.querySelector('#m33');
 span1.innerHTML=fac11 ;
}  ) 

edit3.addEventListener('click',()=>{
  monthlyRent11= prompt("enter Monthly Rent ");
 var span1=document.querySelector('#m44');
 span1.innerHTML=monthlyRent11 ;
var span1a=document.querySelector('#m44a');
  weeklyRent11=monthlyRent11/4;
 span1a.innerHTML=weeklyRent11 ;
}  ) 

edit4.addEventListener('click',()=>{
  monthlyGst11= prompt("enter Monthly Gst ");
 var span1=document.querySelector('#m55');
 span1.innerHTML=monthlyGst11 ;
var span1a=document.querySelector('#m55a');
  weeklyGst11=monthlyGst11/4;
 span1a.innerHTML=weeklyGst11 ;
}  ) 

edit5.addEventListener('click',()=>{
  unitCharge11= prompt("enter Unit Charge ");
 var span1=document.querySelector('#m66');
 span1.innerHTML=unitCharge11 ;
}  )
//--------------end of edit----------------

cal.addEventListener('click',()=>{
    //inputs------------------------------
     var k=document.querySelector('#kw');
     var d=document.querySelector('#day');
     var u=document.querySelector('#unit');
  
    var kw=k.value;
    var days=d.value;
    var units=u.value;
    //------------------------------------
    var weeks=Math.ceil(days/7);
    var monthunits = ((900 *kw)/11);
    var unitcrg=(kw*225*weeks);
    var unitcharge;
    var uctext;

    //unit charge calculation------------------
    if(unitcrg>monthunits){
        unitcharge=(kw*225*weeks); 
        uctext=kw+"kw * 225 weeklymin *"+weeks+"weeks";
    }
    else{
        unitcharge=(units*11);
        uctext=units+"units * 11rs unitcharge";
    }
    
    //tax calculation
    var tax=(units*11*0.09) ;
    var taxtext=units+"units * 11 * 0.09";
    
    //fac cal
    var fac=(units*0.08);
    var factext=units+"units * 0.08";
    
    //rent cal
    var rent =(75*weeks);
    var renttext="75 weekly rent * "+weeks+"weeks";
    
    //gst cal
    var gst=(14*weeks);
    var gsttext="14 weekly gst * "+weeks+"weeks";
    
    //total cal
    var total=(unitcharge+tax+fac+rent+gst);
    
    //-------------display the calculated result------------------------
        var liuc=document.createElement('li');
        liuc.innerHTML="unit charge = "+unitcharge.toFixed(2)+"  ||  "+uctext;
        
        ol.appendChild(liuc);
    
     var litax=document.createElement('li');
        litax.innerHTML="tax = "+tax.toFixed(2)+"  ||  "+taxtext;
        
        ol.appendChild(litax);
    
    var lifac=document.createElement('li');
        lifac.innerHTML="fac = "+fac.toFixed(2)+"  ||  "+factext;
        
        ol.appendChild(lifac);
    
    var lirent=document.createElement('li');
        lirent.innerHTML="rent = "+rent.toFixed(2)+"  ||  "+renttext;
        
        ol.appendChild(lirent);
    
     var ligst=document.createElement('li');
        ligst.innerHTML="gst = "+gst.toFixed(2)+"  ||  "+gsttext;
        
        ol.appendChild(ligst);
    
     var litotal=document.createElement('li');
        
      var lih1=document.createElement('h1');  
        litotal.appendChild(lih1);
    lih1.innerHTML="total : "+total.toFixed(2);
        ol.appendChild(litotal);
  
    })
   
clear.addEventListener('click',()=>{
    location.reload(); //clears the page ,refresh
    });   
 //------------------------------------------------

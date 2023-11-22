var reqlist=[{
  Name:'Zaroob Restaurant',
  City:'Kochi',
  Quantity:'12kg',
  Date:'23-11-2023'
  
},{
  Name:'Arabian Palace',
  City:'Kochi',
  Quantity:'6kg',
  Date:'23-11-2023'

}]
console.log(reqlist);

function renderlist(){
  
  const storedReqlist = localStorage.getItem('reqlist');

// Check if reqlist exists in local storage
if (storedReqlist) {
  // Parse the stored JSON string back into an array
  reqlist = JSON.parse(storedReqlist);
}

console.log(reqlist);
  let reqhtml='';
  for(let i=0;i<reqlist.length;i++){
      const reqObj=reqlist[i];
      const Name=reqObj.Name;
      const City=reqObj.City;
      const Quantity=reqObj.Quantity;
      const Date=reqObj.Date;
  
      
      const html=`<div><p class="js-donor2">Donor: ${Name}</p>
      <div class="row">
          <div class="col-4">
              <p class="js-qty2">Quantity: ${Quantity}</p>
              <p>Type : Veg</p>
          </div>
          <div class="col-4">
              <p class="js-city2">${City}</p>
              <p class="js-date2">Date: ${Date}</p>
          </div>
      </div>
      </div>
      <div class="donation-requestbtn button-allign">
                  <div class="btn-group status-buttons" role="group" aria-label="Basic example" >
                      <button type="button" class="btn btn-primary status-buttons" onclick="acceptalert(this); senddelreq();">Accept</button>
                      <button type="button" class="btn btn-primary status-buttons" onclick="removeItem(${i}); renderlist();
                      ">Decline</button>
                    </div>
              </div>
              ` 
      ;
      reqhtml+=html;
  }
  document.querySelector('.js-request').innerHTML=reqhtml;
}

renderlist();

function removeItem(index) {
  reqlist.splice(index, 1);
  localStorage.setItem('reqlist', JSON.stringify(reqlist));
}
     function sendreq(){
        const nameinputElement=document.querySelector('.js-name');
        const inpname=nameinputElement.textContent;


        const cityinputElement=document.querySelector('.js-city');
        const inpcity=cityinputElement.textContent;

        const qtyinputElement=document.querySelector('.js-input2');
        const inpqty=qtyinputElement.value;

        const dateinputElement=document.querySelector('.js-input3');
        const inpdate=dateinputElement.value;

        reqlist.push({
          Name:inpname,
          City:inpcity,
          Quantity:inpqty,
          Date:inpdate
          
        });
        localStorage.setItem('reqlist', JSON.stringify(reqlist));
        console.log(reqlist);

        qtyinputElement.value='';
        renderlist();
     }


function submitalert(){
  alert("Donation request submitted successfully");
}
    
function acceptalert(button){
  alert("Donation request accepted");
  button.disabled=true;
}

  

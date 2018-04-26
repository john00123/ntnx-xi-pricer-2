const popupData ={
  title :[
    'Add Instance',
    'Network options',
    'Networking',
    'VMs as a Service',
    'Plan Selection'
  ],

  body: [
    //0 add instance
    `<div class='column'
      style='width:100%; margin-bottom: 20px; padding:0;'>
          <label>Protection Policy</label>
          <select id='dropdown'  style='width:100%;'>
            <option>Diamond</option>
            <option>Gold</option>
            <option>Silver</option>
          </select>
        </div>

        <div class='column' style='width:100%; margin-bottom: 10px; padding:0;'>
          <label>Num of VMs</lable>
          <input type='number'>
        </div>

        <div class='col3'>

          <div class='column'>
            <label>VCPUs per VM</label>
            <input type='number'>
          </div>

          <div class='column'>
            <label>Memory per VM (Ghz) </label>
            <input type='number'>
          </div>
        </div>
    `,

  //1 Network options

`  <div class='network-option' style='width:100%'>
    <label>Connection type</label>
    <select style="width:100%; margin:10px 0 30px 0;">
      <option>
        Direct Connect
      </option>
      <option value="[object Object]"> VPN</option>
    </select>
  </div>

  <div class='network-option' style='width:100%'>
    <h3><input type='checkbox' class='disable' checked> Public IPs </h3>
    <label>Num of Public IPs</label>
    <input type='number' class='disable-me' style="margin:10px 0 0 0"/>
  </div>`

  ],

  footer:[
    //0
    `<button class="secondary cancel">Cancel</button>
     <button class="primary save" style='width:auto'> Save Changes</button>`,

    //1
    `<button class="secondary cancel">Cancel</button>
     <button class="primary save" style='width:auto'>Save Changes</button>`,

    //2
    `<button class="secondary cancel">Cancel</button>
     <button class="primary save" style='width:auto' onclick='elite()'>Save Changes</button>`,
  ]
}

function removePopup(){
  $('.overlay').remove();
  $('body').css('overflow','initial');
}

function CreatePopup(i,j,k){
  $('body').css('overflow','hidden');
 return`<div class="overlay">
    <div class="popup">
      <div class="popup-header" onclick='removePopup()'>${popupData.title[i]}</div>
      <div class="popup-body">${popupData.body[j]}</div>
      <div class="popup-footer">${popupData.footer[k]}</div>
    </div>
  </div>
  `
}

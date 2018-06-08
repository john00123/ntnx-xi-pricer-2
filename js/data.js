const silver=`
  <p style='margin:-15px 0 20px 0' id='policy-description'>
  RPO: 24 hr + </br>
  Free failover compute : None </br>
  Free storage: 2 snapshots, 1 TB per VM </br>
  Support: Production Support
  </p>
  `

const gold=`
  <p style='margin:-15px 0 20px 0' id='policy-description'>
  RPO: 4 hr + </br>
  Free failover compute : 12 hrs per VM/quarter </br>
  Free storage: 1 week of snapshots, 2 TBper VM </br>
  Support: Production Support
  </p>
  `

const diamond=`
  <p style='margin:-15px 0 20px 0' id='policy-description'>
  RPO: 1 hr + </br>
  Free failover compute : 48 hrs per VM/quarter </br>
  Free storage: 1 month of snapshots, 5 TB per VM </br>
  Support: Mission Critical Support
  </p>
  `


const blank =`
  <div class='card' id='selection'>
    <h2> Welcome to Xi Pricer </h2>
    <h3 class='alt' style='margin-top:10px 0 0 0;'>Select any configuration based on your enviroment size to begin</h3>
    <hr>

    <form>
      <h3> <input type="radio" id='config' name='select' value='0' checked/> Small enviroment</h3>
      <p class='alignment alt'>10 protected Virtual Machines, VPN and 1 limited time test failover every quarter</p>

      <h3> <input type="radio" id='config' name='select' value='1'/> Medium environment</h3>
      <p class='alignment alt'>50 protected Virtual Machines, 2 VMs running 24X7, VPN, 2 Public IPs and 1 test failover per quarter</p>

      <h3> <input type="radio" id='config' name='select' value='2'/> Large environment</h3>
      <p class='alignment alt'>200 Protected Virtual Machines with 20 mission-critical VMs, 10 VMs running 24X7, Direct Connect, 10 Public IPs, and long running test failovers every quarter </p>

      <!-- <h3> <input type="radio" id='config' name='select' value='3'/> Use Prism data</h3>
      <p class='alignment alt'>Upload you cluster configuration to price your solution</p> -->

      <h3> <input type="radio" id='config' name='select' value='3'/> Custom Configuration</h3>
      <p class='alignment alt'>Select your own options and configurations</p>
    </form>
    <hr class='sct-sep'>

    <div class='spc' style='margin-bottom:-10px;s'>
      <button class='secondary'>Import Prism data</button>
      <button class='primary' id='continue' style='margin-LEFT:10px;'> Continue </button>
    </div>

  </div>`

const small =
  `<div class='card' id='selection'>

    <div class='section'>
      <div class='section-title spc'>
        <h3> <input type='checkbox' checked style='margin-right:8px;'/> Disaster Recovery</h3>
      </div>
      <div class='section-body instance'>
        <span class='ln'> 300 Gold policy VMs </span></br>
        <span class='ln alt'> 4 VCPU<kbd class='interpunct'>·</kbd> 700 Ghz </span>
      </div>

      <div class='section-body instance'>
        <span class='ln'> 300 Diamond policy VMs</span></br>
        <span class='ln alt'> 4 VCPU<kbd class='interpunct'>·</kbd> 700 Ghz </span>
      </div>

      <div class='section-body'>
        <span class='ln'><a class='edit' href="#">Add Protected VMs</a></span>
      </div>
    </div>
    <hr class='sct-sep'>

    <div class='section'>
      <div class='section-title spc'>
        <h3> <input type='checkbox' checked style='margin-right:8px;'/> Network </h3>

      </div>
      <div class='section-body'>
        <span class='ln'> 100 Mbps <kbd class='interpunct'>·</kbd> Direct Connect</span>
      </div>
      <div class='section-body'>
        <span class='ln'> 5 Public addresses </span>
      </div>

      <div class='section-body'>
        <span class='ln'><a class='manage' href="#">Manage options</a></span>
      </div>

    </div>

    <hr class='sct-sep'>
    <div class='section'>
      <div class='section-title spc'>
        <h3> <input type='checkbox' checked style='margin-right:8px;'/> Live VMs </h3>
      </div>
      <div class='section-body instance'>
        <span class='ln'> 300 VMs</span></br>
        <span class='ln alt'> 4 VCPU <kbd clas='interpunct'>·</kbd> 700 Ghz <kbd class='interpunct'>·</kbd> 300HDD <kbd class='interpunct'>·</kbd> 30 SSD </span>
      </div>

      <div class='section-body'>
        <span class='ln'><a class='vms' href="#">Add live VMs</a></span>
      </div>
    </div>

  </div>`;

const medium =`
  <div class='card' id='selection'>
    <h1> Xi Pricer 1</h1>
  </div>`;

const large =`
  <div class='card' id='selection'>
    <h1> Xi Pricer 2</h1>
  </div>`;

const custom =`
  <div class='card' id='selection'>
    <h1> Xi Pricer 3</h1>
  </div>`;

const payment =
  `  <div class='card' style='margin-top: 20px;' id='payment'>
      <div class='section'>
        <div class='section-title spc'>
          <h3> Subscription plan </h3>
        </div>
        <div class='d'>
          <p class='ln'>
          <input type='radio' name='pay' checked>  12 months subscription (5% discount)</p>
          <p><input type='radio' name='pay'>36 months subscription (10% discount)</p>
          <p><input type='radio' name='pay'>Pay as you go</p>
        </div>

      </div>
    </div>`;

const tiers = [
  {
    tier: 'Starter',
    subtitle: 'For those trying Xi cloud',
    price: 'Free',
    protection: 10,
    vpn: 'VPN',
    downtime: 1,
    failover: 'and a maximum of 8 hours of failover every quarter'
  },
  {
    tier: 'Business',
    subtitle: 'More VMs, public IPs and failover',
    price: '$ per month',
    protection: 50,
    vpn: 'VPN + 2 public IPs',
    downtime: 5,
    failover: 'and a maximum of 8 hours of failover every quarter'
  },
  {
    tier: 'Enterprise',
    subtitle:'Better network more ',
    price:'$$ per month',
    protection: 100,
    vpn: 'Direct Connect + 5 Public IPs',
    downtime: 5,
    failover: 'and a maximum of 8 hours of failover every quarter, 3 days of Downtime in a year.'
  }
];

const items = [
  { name: 'Disaster Recovery',
    elements:[
      { title:'Protected VMs',
        quantity: 3,
        price:300},
      { title:'CPU per VM <span>(Ghz)</span>',
        quantity: 60,
        price:305},
      { title:'Memory per VM <span>(TiB)</span>',
        quantity: 3,
        price:300},
      { title:'Recovery Level',
        quantity: 'Gold',
        price:300}
    ],
   class:'rec'
  },
  {name: 'Networking',
    elements:[
      { title:'Public IP count',
        quantity: 3,
        price:300},
      { title:'Connection type',
        quantity: 'VPN',
        price:305}
    ],
   class:'net'
  },
  {name: 'Virtual Machines as a Service',
    elements:[
      { title:'Running VMs',
        quantity: 3,
        price:300},
      { title:'CPU per VM <span>(Ghz)</span>',
        quantity: 30,
        price:305},
      { title:'Memory per VM <span>(TiB)</span>',
        quantity: 30,
        price:305,},
      { title:'HDD per VM <span>(TiB)</span>',
        quantity: 30,
        price:305,},
      { title:'SSD per VM <span>(TiB)</span>',
        quantity: 30,
        price:305}
    ],
   class:'vmaas'
  }
];

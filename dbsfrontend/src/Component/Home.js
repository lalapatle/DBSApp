import React, { Component } from 'react';
class Home extends Component {
  

    render() {
        return (
          
          <div>

               <img src={'https://mms.businesswire.com/media/20200116005802/en/768027/22/Capgemini_Logo_Color_Print_highres.jpg'} class="float-left" width="150" height="100" align="right"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <img src={'https://seekvectorlogo.com/wp-content/uploads/2019/11/dbs-bank-vector-logo.png'} class="float-right" width="150" height="100" align="left"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <h2 className="text-center">DBS PROCESS INFORMATION MANAGEMENT SYSTEM</h2>
                     <hr/>
                     
                   <br/><br /><br />

                   <div class="dropdown" >
                  <button class="dropbtn">Select option</button>
              <div class="dropdown-content">
    <a href="/personalinfo">Associate</a>
    <a href="/employee">Operation Team</a>
  </div>
</div>
                   
    </div>               
        );
    }
}

export default Home;
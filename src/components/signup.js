import React from 'react'; 
import './signup.css';


function Signup (){ 
  return (
      <div class="main">
    <div class="box">
    <input type="checkbox" class="toggle-btn"  name=""/>
    <div class="signup">
        <form class="form-horizontal signup-form">
            <div class="input-group">
                <span>Username</span>
                <input type="text" placeholder="abc123" name="" class="inp"/>
            </div>
            <div class="input-group">
                <span>Email</span>
                <input type="email" placeholder="abc@gmail.com"  name="" class="inp"/>
            </div>
            <div class="input-group">
                <span>Password</span>
                <input type="password" placeholder="******"   name="" class="inp"/>
            </div>
            <div class="input-group">
                <span>DOB</span>
                <input type="data" name="" class="inp"/>
            </div>
            <div class="input-group" style={{margintop : '20px'}}>
                <input type="submit" value="Signup" class="inp" submit-inp/>
            </div> 
        </form> 
    </div>
    
    <div class="login">
    <form class="form-horizontal login-form">
        <div class="input-group">
            <span>Email</span>
            <input type="email" placeholder="abc@gmail.com"  name="" class="inp"/>
        </div>
        <div class="input-group">
            <span>Password</span>
            <input type="password" placeholder="******"   name="" class="inp"/>
        </div>
    
        <div class="input-group" style={{margintop : '20px'}}>
            <input type="submit" name="Login" class="inp" submit-inp/>
        </div>
        </form>
    </div>
</div>
</div>

  )
}
export default Signup;
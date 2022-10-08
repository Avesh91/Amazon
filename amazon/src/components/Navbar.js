import React from 'react'

const Navbar = () => {
    return (
        <>
        
            <div className='navbar'>
<div className='logo'>
    <img src='./public/img/logo.png' height={'39px'} />
</div>

{/* list */}
<div className='list' >
<form action="/action_page.php">

  <select name="cars" id="catogrie">
  <option value="volvo">All</option>
    <option value="volvo">Apps & games</option>
    <option value="saab">Books</option>
    <option value="opel">Amzone devices</option>
    <option value="audi">Smartphone</option>
    <option value="audi">Mobile accesories</option>
  </select>
  <br /><br />
  {/* <input type="submit" defaultvalue="Submit" /> */}
</form>
</div>

{/* searchbar */}
<div className='search-bar'>
    <input type="search" width={'300px'} className='s-bar'/>
  
</div>
<div >
<button class="button button1">search</button>
</div>

<div class="dropdown" style={{color: 'white',fontWeight:'bolder', marginLeft:'10px'}}>
  <span>Language</span>
  <div class="dropdown-content"  style={{color:'black'}}>
  <p>English</p>
    <p>Hindi</p>
    <p>Marathi</p>
    <p>Gujrati</p>
  </div>
</div>


<div>
   
<div class="dropdown" style={{color: 'white',fontWeight:'bolder', marginLeft:'10px'}}>
  <span> <p style={{color:'white',marginTop:'-10px',marginLeft:'30px'}}>Sign in <span style={{fontWeight:'bolder'}}>Account</span></p>
</span>
  <div class="secDropdown-content" style={{color:'black'}}>
  <a href='' >Sign in</a>
    <p>New Customer? <a href='#'>Start here</a></p>
    <h2>Youre List</h2>
    <p>Create a Wish list</p>
    <p>Wish from any website</p>
    <p>Baby Wishlist</p>
    <p>Discove1r youre style</p>
    <p>Explore Showroom</p>
  
  </div>
</div>
</div>


<div className=''>
<p style={{color: 'white',marginTop: '-5px',marginLeft:'20px',fontWeight:'bolder'}}>Returns & <br/> orders</p>
</div>


<div className='cart'>
<i class="fa fa-shopping-cart" style={{ color:"white",fontSize:'36px'}}></i>


</div>
    </div>



        </>


    )
}

export default Navbar

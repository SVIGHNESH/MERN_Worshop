import './Navbar.css'
// import {logo} from './res/A';
function Navbar() {
  return (
    <nav>
      <div className="firstPartOfNavBar">
            
                <div>Search</div>
                <div>Contact Us</div>
          
      </div>
      <div className='secondPartOfNavBar'>
          <img src="" alt="" />
                <div>Shop Products</div>
                <div>How to Wash Clothes</div>
                <div>Washing Machine 101</div>
                <div>About Ariel</div>
        
        </div>
    </nav>
  );
}

export default Navbar;
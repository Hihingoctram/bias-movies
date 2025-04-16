import { Search } from 'lucide-react';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header-container'>
      {/* Logo */}
      <div className='logo'>
         <img src={logo} alt="Logo" />
      </div>

      {/* Tìm kiếm */}
      <div className='search-box'>
        <label htmlFor='search'>Tìm kiếm:</label>
        <input type='text' id='search' placeholder='Nhập tên phim...' />
        <nav aria-label='Search'>
          <Link to='/seacher'><Search /></Link>  
        </nav>
      </div>

      {/* Chọn thể loại */}
      <div className='category-box'>
        <label htmlFor='category'>Thể loại:</label>
        <select id='category'>
          <option>Phim tình cảm</option>
          <option>Phim hành động</option>
          <option>Phim hài</option>
          <option>Phim kinh dị</option>
        </select>
      </div>

      {/* Chọn đánh giá */}
      <div className='rating-box'>
        <label htmlFor='rating'>Đánh giá:</label>
        <input type='number' id='rating' min='1' max='5' step='0.5' placeholder='4 sao' />
      </div>
    </div>
  );
};

export default Header;

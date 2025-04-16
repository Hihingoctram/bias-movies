import img1 from './assets/Phim01.jpg';
import img2 from './assets/Phim02.jpg';
import img3 from './assets/Phim03.jpg';
import img4 from './assets/Phim04.jpg';
import img5 from './assets/Phim05.jpg';
//
import ig01 from './assets/Pyramid Game.jpg';
import ig02 from './assets/Lovely Runner.jpg';
import ig03 from './assets/Serendipity’s Embrace.jpg';
import ig04 from './assets/Thứ Bậc - Hierarchy.jpg';
import ImageSlider from './components/ImageSlider';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import './App.css'



const IMAGE_URLS = [img1, img2, img3, img4, img5];

const movies = [
  { title: "Resident Playbook", image: img1, rating: 5 },
  { title: "Karma", image: img2, rating: 4 },
  { title: "Hyper Knife", image: img3, rating: 3 },
  { title: "Another Movie", image: img4, rating: 4 },
];

const school = [
  { title: "Pyramid Game", image: ig01, rating: 3 },
  { title: "Lovely Runner", image: ig02, rating: 4 },
  { title: "Serendipity’s Embrace", image: ig03, rating: 3 },
  { title: "Thứ Bậc - Hierarchy", image: ig04, rating: 5 },
];

function App() {
  return (
    <div className="container">
      <div id="full">
        <div style={{ width: '100%', height: '100px' }}>
          <Header />
        </div>
        <div style={{ width: '90%', height: '550px', margin: '0 auto' }}>
          <ImageSlider ImageUrls={IMAGE_URLS} />
        </div>
        <h1>Top Recommendations</h1>
        <div><MovieGrid movies={movies} /></div>
        <h1>Top High School Drama Picks</h1>
        <div><MovieGrid movies={school} /></div> 
     </div>
    </div>
    
  );
}

export default App;
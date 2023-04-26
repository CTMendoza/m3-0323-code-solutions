import logo from './logo.svg';
import './App.css';
import Container from './Carousel';

const images = [
  {
    id: 0,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dcc9zse-cd8f1dde-3d79-4ac1-83db-cbe94cb08e64.png/v1/fit/w_375,h_300/monkey_d__luffy_by_bodskih_dcc9zse-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNTExNTgzMTYtZmQ3ZS00OGNhLWI1ZmUtODU0MmU5ZGZlMzU3XC9kY2M5enNlLWNkOGYxZGRlLTNkNzktNGFjMS04M2RiLWNiZTk0Y2IwOGU2NC5wbmciLCJ3aWR0aCI6Ijw9NjQwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.kRvHIjd9Sho3mdYmfZdm0F_e-G1jadJdWenAzRc6Gs4'
  },
  {
    id: 1,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ce1372a-b75c-4058-b0c8-1bf1c2d6837e/de84yde-c9669baa-2075-4532-9a30-9560e3d44118.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFjZTEzNzJhLWI3NWMtNDA1OC1iMGM4LTFiZjFjMmQ2ODM3ZVwvZGU4NHlkZS1jOTY2OWJhYS0yMDc1LTQ1MzItOWEzMC05NTYwZTNkNDQxMTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-Sac700y17qjBc_NV3ziSyaX2jQKMH7VMMzbrryMVJQ'
  },
  {
    id: 2,
    img: 'https://i.pinimg.com/originals/3f/a0/e4/3fa0e45fdf5373800bd842b16df68a33.png'
  },
   {
    id: 3,
    img: 'https://i.pinimg.com/originals/b8/79/ea/b879ea2f496829864efcdadd2fbf923f.png'
  },
   {
    id: 4,
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ce1372a-b75c-4058-b0c8-1bf1c2d6837e/de7bx3o-0f3c38ad-eeb2-49a3-a2d2-2ab5272beb0e.png/v1/fill/w_520,h_735/_render__marshall_d__teach_by_hobbj_de7bx3o-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM1IiwicGF0aCI6IlwvZlwvMWNlMTM3MmEtYjc1Yy00MDU4LWIwYzgtMWJmMWMyZDY4MzdlXC9kZTdieDNvLTBmM2MzOGFkLWVlYjItNDlhMy1hMmQyLTJhYjUyNzJiZWIwZS5wbmciLCJ3aWR0aCI6Ijw9NTIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.coqugDdZxiopyJ0S0jp5bxUxAmH5DB3DeCqOgZNpWsw'
  },
   {
    id: 5,
    img: 'https://i.pinimg.com/originals/38/22/b3/3822b38be0ae4ecd6d4b7687fe1896c9.png'
  }
]

function App() {
  return (
      <div className='App'>
        <Container images={images}/>
      </div>
  );
}

export default App;

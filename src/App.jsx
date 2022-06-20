import { useState } from 'react'
import ModelsComponent from './components/models'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{overflow:"hidden"}}>
      <ModelsComponent />
     </div>
  )
}

export default App

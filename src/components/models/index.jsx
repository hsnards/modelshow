import Styles from "./model.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination ,EffectFade } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import 'swiper/css/scrollbar';
const ModelsComponent = () => {
    return ( 
         <div  className={Styles.root}>
        <Swiper
          direction={"vertical"}
                slidesPerView={1}
                effect={"fade"}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination ,EffectFade]}
         className="mySwiper"
        >
                <SwiperSlide className={Styles.swiperSlider}>
                    <img  src="/public/image.jpg" />
                </SwiperSlide>
                <SwiperSlide className={Styles.swiperSlider}>
                    <img src="/public/278865405_1157208258359668_3959650466254873679_n.jpg" />
                </SwiperSlide>
          
        </Swiper>
      </div>
     );
}
 
export default ModelsComponent

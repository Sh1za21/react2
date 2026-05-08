import { gallery1Icon } from "../utils/images";
import { gallery2Icon } from "../utils/images";
import { galleryBig3Icon } from "../utils/images";

const Gallery = () => {
    return (
        <>
            <section class="gallery">
                <div class="container">
                    <h2 class="gallery__title">GALLERY</h2>
                    <div class="gallery__wrap">
                        <div class="gallery__img">
                            <img src={gallery1Icon} alt="" />
                        </div>
                        <div class="gallery__img">
                            <img src={gallery2Icon} alt="" />
                        </div>
                        <div class="gallery__Bigimg">
                            <img src={galleryBig3Icon} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
import { rightCarIcon } from "../utils/images";
const Car = () => {
    return (
        <>
            <section class="car">
                <div class="container car__wrap">
                    <div class="car__left">
                        <h2 class="car__left-title">PORSCHE 911 GT3 R5</h2>
                        <p class="car___left-desc">The Porsche 911 GT3 R (or 911 GT3 R5) is a specialized race car designed
                            for participation in various racing series, including GT championships and other international
                            competitions.</p>
                        <p class="car___left-desc">It represents an enhanced version of the legendary Porsche 911, with a
                            reinforced structure, improved aerodynamic characteristics, and a powerful engine to ensure maximum
                            performance on the track.</p>
                    </div>
                    <div class="car__right">
                        <img class="car__right-img" src={rightCarIcon} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Car
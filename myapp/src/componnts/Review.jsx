import { review } from "../Data";
import qoutImg from "../assets/images/quote-img.png"

const Review=()=>{
    return(
        <>
        <section >
            <h1 className="heading">
                sustomers's <span>review</span>
            </h1>
            <div className="box-container">
                {
                    review.map((item, index)=>(
                        <div className="box">
                            <img src={qoutImg} alt=""  className="qoute" />
                        </div>

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut amet nisi dignissimos, non velit reprehenderit qui tempora, quo rerum exercitationem ipsam molestiae cum! Neque, beatae! Provident aperiam facere necessitatibus voluptatibus.
                        </p>

                    ))
                }
            </div>
        </section>
        </>
    );
};

export default Review;

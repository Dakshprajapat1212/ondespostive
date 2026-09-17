import "./Testimonials.css";
import testimonial1 from "../../assets/Testimonial1.png"
import testimonial2 from "../../assets/Testimonial2.png"
import testimonial3 from "../../assets/Testimonial3.png"

function Testimonials() {
  const testimonials = [
    {
      name: "Sophie Martin, France",
      text: "An exceptional journey through India with Ondes Positive. The welcome, hotels and transport were excellent. I recommend them 100%.",
      image: testimonial1,
    },
    {
      name: "Julien Dubois, Paris",
      text: "The organisation was impeccable and very professional. We discovered the real India with comfort and thoughtful support.",
      image: testimonial2,
    },
    {
      name: "Camille Bernard, Lyon",
      text: "Hamari zindagi ki sabse achhi memories bani! Rajasthan bahut beautiful hai aur team ne humein bahut warmly welcome kiya.",
      image: testimonial3,
    },
  ];

  return (
    <section className="testimonial-section">

      <div className="testimonial-heading">
        <span>WHAT OUR GUESTS SAY</span>
        <h2>Trusted By Travellers Worldwide</h2>
      </div>

      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="testimonial-row">

              {testimonials.map((item, index) => (
                <div className="testimonial-card" key={index}>

                  <div className="testimonial-user">
                    <img src={item.image} alt={item.name} />

                    <div className="verified-icon">
                      ✓
                    </div>
                  </div>

                  <div className="testimonial-content">

                    <div className="stars">
                      ★★★★★
                    </div>

                    <p>
                      "{item.text}"
                    </p>

                    <h6>— {item.name}</h6>

                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>

        <div className="carousel-indicators testimonial-indicators">
          <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;
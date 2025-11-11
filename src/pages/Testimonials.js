import AnimationTitles from "../components/functions/AnimationTitles";
import { Container, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Rate from "../components/testimonials/rate";

function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <Container>
        <AnimationTitles className="title mx-auto" title="Testimonials" />
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide>
              <Card className="bg-black-100 rounded h-100">
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="testimonial-avatar me-3">
                      <div className="avatar-circle d-flex align-items-center justify-content-center text-white fw-bold">
                        JD
                      </div>
                    </div>
                    <div>
                      <h6 className="text-white mb-1 fw-normal">John Davis</h6>
                      <p className="gray-90 mb-0" style={{ fontSize: "12px" }}>
                        Real Estate Investor
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Rate stars={4} />
                  </div>
                  <p
                    className="gray-50 mb-0"
                    style={{ fontSize: "14px", lineHeight: "1.6" }}
                  >
                    "Excellent service! Found my dream property within weeks.
                    The team was professional and made the entire process
                    smooth."
                  </p>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-black-100 rounded h-100">
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="testimonial-avatar me-3">
                      <div className="avatar-circle d-flex align-items-center justify-content-center text-white fw-bold">
                        SM
                      </div>
                    </div>
                    <div>
                      <h6 className="text-white mb-1 fw-normal">
                        Sarah Miller
                      </h6>
                      <p className="gray-90 mb-0" style={{ fontSize: "12px" }}>
                        Property Owner
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Rate stars={5} />
                  </div>
                  <p
                    className="gray-50 mb-0"
                    style={{ fontSize: "14px", lineHeight: "1.6" }}
                  >
                    "Outstanding platform for property rentals. Great user
                    experience and the support team is always responsive and
                    helpful."
                  </p>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-black-100 rounded h-100">
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="testimonial-avatar me-3">
                      <div className="avatar-circle d-flex align-items-center justify-content-center text-white fw-bold">
                        RW
                      </div>
                    </div>
                    <div>
                      <h6 className="text-white mb-1 fw-normal">
                        Robert Wilson
                      </h6>
                      <p className="gray-90 mb-0" style={{ fontSize: "12px" }}>
                        Business Executive
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Rate stars={3} />
                  </div>
                  <p
                    className="gray-50 mb-0"
                    style={{ fontSize: "14px", lineHeight: "1.6" }}
                  >
                    "Professional and efficient service. The property listings
                    are accurate and the rental process is straightforward."
                  </p>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-black-100 rounded h-100">
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="testimonial-avatar me-3">
                      <div className="avatar-circle d-flex align-items-center justify-content-center text-white fw-bold">
                        EJ
                      </div>
                    </div>
                    <div>
                      <h6 className="text-white mb-1 fw-normal">
                        Emily Johnson
                      </h6>
                      <p className="gray-90 mb-0" style={{ fontSize: "12px" }}>
                        Property Manager
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Rate stars={5} />
                  </div>
                  <p
                    className="gray-50 mb-0"
                    style={{ fontSize: "14px", lineHeight: "1.6" }}
                  >
                    "Great platform for managing multiple properties. The
                    interface is intuitive and the features are exactly what we
                    need."
                  </p>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-black-100 rounded h-100">
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="testimonial-avatar me-3">
                      <div className="avatar-circle d-flex align-items-center justify-content-center text-white fw-bold">
                        MB
                      </div>
                    </div>
                    <div>
                      <h6 className="text-white mb-1 fw-normal">
                        Michael Brown
                      </h6>
                      <p className="gray-90 mb-0" style={{ fontSize: "12px" }}>
                        Real Estate Agent
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Rate stars={5} />
                  </div>
                  <p
                    className="gray-50 mb-0"
                    style={{ fontSize: "14px", lineHeight: "1.6" }}
                  >
                    "Best rental platform I've used. The quality of properties
                    and the ease of transaction make it stand out from
                    competitors."
                  </p>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-black-100 rounded h-100">
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="testimonial-avatar me-3">
                      <div className="avatar-circle d-flex align-items-center justify-content-center text-white fw-bold">
                        LT
                      </div>
                    </div>
                    <div>
                      <h6 className="text-white mb-1 fw-normal">
                        Lisa Thompson
                      </h6>
                      <p className="gray-90 mb-0" style={{ fontSize: "12px" }}>
                        Home Buyer
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Rate stars={4} />
                  </div>
                  <p
                    className="gray-50 mb-0"
                    style={{ fontSize: "14px", lineHeight: "1.6" }}
                  >
                    "Highly recommend! The property search filters are excellent
                    and helped me find exactly what I was looking for."
                  </p>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-black-100 rounded h-100">
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="testimonial-avatar me-3">
                      <div className="avatar-circle d-flex align-items-center justify-content-center text-white fw-bold">
                        DA
                      </div>
                    </div>
                    <div>
                      <h6 className="text-white mb-1 fw-normal">
                        David Anderson
                      </h6>
                      <p className="gray-90 mb-0" style={{ fontSize: "12px" }}>
                        Property Investor
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Rate stars={2} />
                  </div>
                  <p
                    className="gray-50 mb-0"
                    style={{ fontSize: "14px", lineHeight: "1.6" }}
                  >
                    "Fantastic platform with great property options. The
                    verification process gives me confidence in every
                    transaction."
                  </p>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-black-100 rounded h-100">
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="testimonial-avatar me-3">
                      <div className="avatar-circle d-flex align-items-center justify-content-center text-white fw-bold">
                        CM
                      </div>
                    </div>
                    <div>
                      <h6 className="text-white mb-1 fw-normal">
                        Christina Martinez
                      </h6>
                      <p className="gray-90 mb-0" style={{ fontSize: "12px" }}>
                        Real Estate Consultant
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <Rate stars={4} />
                  </div>
                  <p
                    className="gray-50 mb-0"
                    style={{ fontSize: "14px", lineHeight: "1.6" }}
                  >
                    "Top-notch service and excellent customer support. The
                    platform makes property rental management a breeze."
                  </p>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </Container>
    </div>
  );
}

export default Testimonials;

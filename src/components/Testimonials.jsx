import React from 'react'
import img1 from '../assets/image-01 (1).webp'
import img2 from '../assets/image-02 (1).webp'
import img3 from '../assets/image-03 (1).webp'
import img4 from '../assets/image-04 (1).webp'
export default function Testimonials () {
  return (
    <section id="testimonial" className="bg-light-bg pt-[120px] pb-20 dark:bg-[#14102C]">
  <div className="container">
    <div style={{ opacity: 1, transform: "none" }}>
      {/* Title Section */}
      <div className="wow fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20" data-wow-delay="0s">
        <span className="text-primary mb-3 text-lg font-bold uppercase sm:text-xl">TESTIMONIALS</span>
        <h2 className="mb-3 text-3xl leading-tight font-bold text-black md:text-[45px] dark:text-white">What Our Clients Say's</h2>
        <p className="text-body-color-2 dark:text-body-color text-lg font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, In et dignissim quam condimentum vel.</p>
      </div>
    </div>
    
    <div className="-mx-4 flex flex-wrap">
      {/* Testimonial 1 */}
      <div className="w-full px-4 md:w-1/2">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-[10px] bg-white px-6 py-8 sm:p-10 md:p-8 xl:p-10 dark:bg-[#131B4D]" data-wow-delay="0s">
            {/* <div className="absolute top-0 right-0 z-[-1]">
              <img alt="shape" loading="lazy" width="254" height="182" decoding="async" data-nimg="1" src="/images/shapes/testimonial-shape.svg" style={{ color: "transparent" }} />
            </div> */}
            <div className="mb-8 flex items-center">
              <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-sm">
                <img alt="author" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" className="h-full object-cover" src={img1} style={{ color: "transparent" }} />
              </div>
              <div className="w-full">
                <h3 className="text-dark mb-1 text-lg font-semibold dark:text-white">Jason Keys</h3>
                <p className="text-body-color-2 text-sm font-medium dark:text-white">CEO &amp; Founder @ Dreampeet.</p>
              </div>
            </div>
            <div>
              <p className="text-body-color-2 dark:text-body-color text-base leading-snug font-medium">“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and family.”</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="w-full px-4 md:w-1/2">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-[10px] bg-white px-6 py-8 sm:p-10 md:p-8 xl:p-10 dark:bg-[#131B4D]" data-wow-delay="0s">
            {/* <div className="absolute top-0 right-0 z-[-1]">
              <img alt="shape" loading="lazy" width="254" height="182" decoding="async" data-nimg="1" src="/images/shapes/testimonial-shape.svg" style={{ color: "transparent" }} />
            </div> */}
            <div className="mb-8 flex items-center">
              <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-sm">
                <img alt="author" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" className="h-full object-cover" src={img2} style={{ color: "transparent" }} />
              </div>
              <div className="w-full">
                <h3 className="text-dark mb-1 text-lg font-semibold dark:text-white">Jason Keys</h3>
                <p className="text-body-color-2 text-sm font-medium dark:text-white">CEO &amp; Founder @ Dreampeet.</p>
              </div>
            </div>
            <div>
              <p className="text-body-color-2 dark:text-body-color text-base leading-snug font-medium">“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and family.”</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
     <div className="w-full px-4 md:w-1/2">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-[10px] bg-white px-6 py-8 sm:p-10 md:p-8 xl:p-10 dark:bg-[#131B4D]" data-wow-delay="0s">
            {/* <div className="absolute top-0 right-0 z-[-1]">
              <img alt="shape" loading="lazy" width="254" height="182" decoding="async" data-nimg="1" src="/images/shapes/testimonial-shape.svg" style={{ color: "transparent" }} />
            </div> */}
            <div className="mb-8 flex items-center">
              <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-sm">
                <img alt="author" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" className="h-full object-cover" src={img3} style={{ color: "transparent" }} />
              </div>
              <div className="w-full">
                <h3 className="text-dark mb-1 text-lg font-semibold dark:text-white">Jason Keys</h3>
                <p className="text-body-color-2 text-sm font-medium dark:text-white">CEO &amp; Founder @ Dreampeet.</p>
              </div>
            </div>
            <div>
              <p className="text-body-color-2 dark:text-body-color text-base leading-snug font-medium">“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and family.”</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="w-full px-4 md:w-1/2">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-[10px] bg-white px-6 py-8 sm:p-10 md:p-8 xl:p-10 dark:bg-[#131B4D]" data-wow-delay="0s">
            {/* <div className="absolute top-0 right-0 z-[-1]">
              <img alt="shape" loading="lazy" width="254" height="182" decoding="async" data-nimg="1" src="/images/shapes/testimonial-shape.svg" style={{ color: "transparent" }} />
            </div> */}
            <div className="mb-8 flex items-center">
              <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-sm">
                <img alt="author" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" className="h-full object-cover" src={img4} style={{ color: "transparent" }} />
              </div>
              <div className="w-full">
                <h3 className="text-dark mb-1 text-lg font-semibold dark:text-white">Jason Keys</h3>
                <p className="text-body-color-2 text-sm font-medium dark:text-white">CEO &amp; Founder @ Dreampeet.</p>
              </div>
            </div>
            <div>
              <p className="text-body-color-2 dark:text-body-color text-base leading-snug font-medium">“I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and family.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

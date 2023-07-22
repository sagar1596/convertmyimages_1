import React from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import SeoComponent from '../components/seo';

const About = () => {
    return (
        <div className='container container-about-us'>
            <h1>About Us</h1>

            <section>
                <span className='au-top-section'>
                Welcome to ConvertMyImages.com, your one-stop destination for all your image conversion needs. We are passionate about providing you with a simple and efficient platform to convert and optimize your images effortlessly. Let us dive into some questions to help you understand our platform better:
                </span>

                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            1. What is the core purpose of ConvertMyImages.com?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="1" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            ConvertMyImages.com is designed with the primary goal of enabling users to convert images between different formats easily. We recognize that various devices, platforms, and applications require specific image formats, and we want to make sure you can always have the right format at your fingertips.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2. What image formats does ConvertMyImages.com support?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="2" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            We currently support PNG, JPEG and BMP. We support to and fro between these formats seamlessly. 
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3. Does ConvertMyImages.com support bulk image conversion?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="3" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Absolutely! We understand the importance of efficiency, especially for businesses and professionals. ConvertMyImages.com allows you to upload and convert multiple images simultaneously, saving you valuable time and effort.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            4. What makes ConvertMyImages.com different from other image converters?
                        </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="4" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            ConvertMyImages.com stands out from the crowd thanks to its user-friendly interface and powerful image processing capabilities. Our platform is optimized for speed, ensuring swift conversions without compromising on image quality. Additionally, we prioritize user privacy and data security, guaranteeing that your uploaded images are treated with the utmost confidentiality and never stored on our servers.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            5. Can users optimize their images during the conversion process?
                        </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="5" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Yes, indeed! We go beyond simple image format conversions. ConvertMyImages.com empowers users to optimize their images by adjusting compression levels, resolution, and other settings. This feature is particularly useful for reducing image file sizes without compromising on visual quality.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            6. Do you offer any advanced image editing features?
                        </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="6" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            While our primary focus is on image conversion and optimization, we are continuously working to enhance the platform. As of now, ConvertMyImages.com does not have advanced image editing capabilities, but we have plans to introduce editing features in the near future.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="7">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            7. Is there a registration process to use ConvertMyImages.com?
                        </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="7" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            We believe in simplicity and accessibility. Users can start converting images right away without the need for registration. 
                            </div>
                        </div>
                    </div>
                </div>

                <span className='au-bot-section'>
                At ConvertMyImages.com, we are committed to providing a seamless and convenient image conversion experience. Whether you are a professional photographer, a web developer, or someone who needs to convert images for personal use, we have got you covered. Feel free to explore our platform and unleash the true potential of your images!
                </span>

            </section>
        </div>
    )
};

About.getLayout = (page) => {
    return (
        <>
          <SeoComponent
              title="Convert My Images - About Us"
              description="This is a site used to resize, crop and rotate images to required sizes and formats."
              canonical="https://www.convertmyimages.com/about"
              ourl= 'https://www.convertmyimages.com/about'
              otitle= 'Convert my images - About Us'
              odescription= 'This is a site used to resize, crop and rotate images to required sizes and formats.'
              osite_name= 'ConvertMyImages'
              thandle= '@sagar1596'
              tsite= 'www.sagarbhat.com'
               />
          <HeaderComponent />
          {page}
          <FooterComponent />
        </>
    );
  }
  
  export default About;
import React from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import SeoComponent from '../components/seo';

const Contact = () => {
    return (
        <div className='container container-contact-us'>
            
        </div>
    )
}


Contact.getLayout = (page) => {
    return (
        <>
          <SeoComponent
              title="Convert My Images - Contact Us"
              description="This is a site used to resize, crop and rotate images to required sizes and formats."
              canonical="https://www.convertmyimages.com/contact"
              ourl= 'https://www.convertmyimages.com/contact'
              otitle= 'Convert my images - Contact Us'
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
  
  export default Contact;
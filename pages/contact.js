import React from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import SeoComponent from '../components/seo';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com';

const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
      
      const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };

      const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        try {
          const templateParams = {
            name,
            email,
            subject,
            message
          };
          await emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
          );
          toastifySuccess();
          reset();
        } catch (e) {
          console.log(e);
        }
      };

    return (
        <div className='container container-contact-us'>
            <div className='ContactForm'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='contactForm'>
                        <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                            {/* Row 1 of form */}
                            <div className='row formRow'>
                            <div className='col-12 col-lg-6 mb-4'>
                                <input
                                type='text'
                                name='name'
                                {...register('name', {
                                    required: { value: true, message: 'Please enter your name' },
                                    maxLength: {
                                    value: 30,
                                    message: 'Please use 30 characters or less'
                                    }
                                })}
                                className='form-control formInput'
                                placeholder='Name'
                                ></input>
                                {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                            </div>
                            <div className='col-12 col-lg-6 mb-4'>
                                <input
                                type='email'
                                name='email'
                                {...register('email', {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                })}
                                className='form-control formInput'
                                placeholder='Email address'
                                ></input>
                                {errors.email && (
                                <span className='errorMessage'>Please enter a valid email address</span>
                                )}
                            </div>
                            </div>
                            {/* Row 2 of form */}
                            <div className='row formRow'>
                            <div className='col mb-4'>
                                <input
                                type='text'
                                name='subject'
                                {...register('subject', {
                                    required: { value: true, message: 'Please enter a subject' },
                                    maxLength: {
                                    value: 75,
                                    message: 'Subject cannot exceed 75 characters'
                                    }
                                })}
                                className='form-control formInput'
                                placeholder='Subject'
                                ></input>
                                {errors.subject && (
                                <span className='errorMessage'>{errors.subject.message}</span>
                                )}
                            </div>
                            </div>
                            {/* Row 3 of form */}
                            <div className='row formRow'>
                            <div className='col mb-4'>
                                <textarea
                                rows={3}
                                name='message'
                                {...register('message', {
                                    required: true
                                })}
                                className='form-control formInput'
                                placeholder='Message'
                                ></textarea>
                                {errors.message && <span className='errorMessage'>Please enter a message</span>}
                            </div>
                            </div>
                            <button className='btn btn-primary' type='submit'>
                            Submit
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}


Contact.getLayout = (page) => {
    return (
        <>ya
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
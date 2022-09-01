import React from 'react'

const Footer = () => {
  return (
    <div>

      <footer className="text-center text-lg-start bg-light text-muted bg bg-dark ">

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          <div className="me-5 d-none d-lg-block text-light">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className='text-primary'>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>

        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-light">

                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-light"></i>Soft-Tech
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-light">

                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Node</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">React Native</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-primary">

                <h6 className="text-uppercase fw-bold mb-4">
                  Course
                </h6>
                <p>
                  <a href="#!" className="text-reset">HTML,CSS</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">JAVASCRIPT</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Reactjs</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Nodejs</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-primary">

                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <a href='https://www.google.com/maps/dir/Qutub+Minar,+Seth+Sarai,+Mehrauli,+New+Delhi,+Delhi/Hauz+Khas,+New+Delhi,+Delhi/@28.537465,77.1773149,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x390d1e0667819b4f:0x834995f160759db8!2m2!1d77.1855817!2d28.5245087!1m5!1m1!1s0x390ce2127da1cf23:0xd89ebc21c669134d!2m2!1d77.2031247!2d28.5478897!3e0'><i className="fas fa-home me-3"></i> New Delhi</a>
                <p>
                  <i className="fas fa-envelope me-3"></i>  pietecshubham@gmail.com
                
                </p>
                <p><i className="fas fa-phone me-3"></i> +91-8209026172</p>
                {/* <p><i className="fa fa-whatsapp me-3"></i> +91-8209026172</p> */}
              </div>

            </div>

          </div>
        </section>


        <div className="text-center p-4">
          © 2022
          <a className="text-reset fw-bold" href="https://www.netlify.com/">Netlify</a>
        </div>

      </footer>

    </div>
  )
}

export default Footer

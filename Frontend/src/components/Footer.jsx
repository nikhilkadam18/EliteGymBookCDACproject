import { Link } from "react-router-dom";
import AboutHome from './AboutHome';
const Footer = () => {
  return (
    <div>
      <div class="container-fluid my-5">
        <footer class="text-center bg-light text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase text-color ">
                  EliteGymBook
                  </h5>
                  <p className="d-flex justify-content-center text-justify align-items-center" style={{ fontWeight: '' }}>
  EliteGymBook is your go-to platform for finding and booking the best gyms near you. Our user-friendly web application makes it easy to search, compare, and secure gym memberships with just a few clicks. We're here to help you reach your fitness goals while supporting gym owners in growing their businesses.
</p> </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">About us</h5>

                  <ul class="list-unstyled mb-0">
                  <li>
                      <a href="https://github.com/EliteGymBook/EliteGymBook" class="text-color">
                        Github  
                      </a> 
                      </li>
                      <li>
                      <a href="https://www.facebook.com/profile.php?id=61563945611745" class="text-color">
                        Facebook  
                      </a> 
                      </li>
                      <li>
                      <a href="https://www.instagram.com/elitegymb/" class="text-color">
                        Instagram
                      </a>
                      </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="/Contact" class="text-color">
                        Contact here
                      </a>
                    </li>
                   
                   
                    
                  </ul>
                </div>

                
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
  <p class="d-flex justify-content-center align-items-center">
    <span class="me-3 text-color">Copyright 2024 EliteGymBook. All rights reserved</span>
  </p>
  
</section>
            <hr class="mb-4" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

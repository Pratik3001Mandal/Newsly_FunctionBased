import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="text-center text-lg-start bg-light text-muted">
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>Newsly
                  </h6>
                  <p>Get your daily dose of News here.</p>
                </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Developer Contact</h6>
                  <p>
                    <i class="fas fa-home me-3"></i> Kolkata, 700001, WB
                  </p>
                  <p>
                    <i class="fas fa-envelope me-3"></i>
                    info@newsly.com
                  </p>
                  <p>
                    <i class="fas fa-phone me-3"></i> + 91 9619320623
                  </p>
                  <p>
                    <i class="fas fa-print me-3"></i> + 91 8963258444
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div class="text-center p-4">© 2023 Newsly All Rights Reserved.</div>
        </footer>
      </div>
    );
  }
}

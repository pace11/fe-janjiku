import React from 'react'

export default function Footer() {
  return (
    <footer id="footer" className="bg-transparent">
      <div className="footer-content">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-6 col-xs-12">
              <div className="widget">
                <div className="widget-title">Janjiku.id</div>
                <p className="mb-5">
                  Tugas kami adalah menghadirkan kebahagian dalam bentuk
                  Undangan Pernikahan Website
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-xs-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="widget">
                    <div className="widget-title">Ikuti Kami</div>
                    <ul className="list">
                      <li>
                        <a
                          href="https://www.instagram.com/janjiku.id/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram"></i> janjiku.id
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="widget">
                    <div className="widget-title">Kontak</div>
                    <ul className="list">
                      <li>
                        <a href="tel:+6282248080870">
                          <i className="fa fa-phone"></i> 0822-4808-0870
                        </a>
                      </li>
                      <li>
                        <a href="tel:+6281354141927">
                          <i className="fa fa-phone"></i> 0813-5414-1927
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-content">
        <div className="container">
          <div className="copyright-text text-center">
            &copy; {new Date().getFullYear()} Janjiku.id - build with <i className="fa fa-heart" style={{ color: "#db284e" }}></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

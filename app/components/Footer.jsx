import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 font-sourceSans">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-20">
            <div className="flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="h-24 w-auto" />
            </div>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 lg:gap-32">
              <div className="flex flex-col items-start justify-start">
                <p className="font-bold text-blue-950">Contact us</p>
                <p className="mt-6 space-y-4 text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem veritatis alias laudantium ullam, harum iusto quidem quos quae.
                </p>
                <p className="mt-2 space-y-4 text-sm">mail@gmail.com</p>
                <p className="mt-2 space-y-4 text-sm">0123456789</p>
              </div>

              <div className="flex flex-col items-start justify-start ">
                <p className="font-bold text-blue-950">More</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">About</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">Product</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">Career</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className="hidden lg:flex flex-col items-start justify-start">
                <p className="font-bold text-gray-900">Social Links</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" aria-label="Facebook">
                    <svg className="w-6 h-6 text-gray-700 transition hover:opacity-75" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.351C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0zM12 1.803c-5.573 0-10.14 4.568-10.14 10.14 0 5.573 4.568 10.14 10.14 10.14 5.573 0 10.14-4.568 10.14-10.14 0-5.573-4.568-10.14-10.14-10.14zm2.597 15.672h-2.681v-6.293h2.681v-1.9h-2.681V9.585c0-.813.105-1.205 1.176-1.205h1.345v-2.003h-1.345c-2.135 0-3.53 1.136-3.53 3.178v1.615h-2.681v1.9h2.681v6.293zm-5.263-.702c.64.64 1.463.641 2.103 0s.641-1.463 0-2.103-1.463-.641-2.103 0c-.641.64-.641 1.463 0 2.103z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <svg className="w-6 h-6 text-gray-700 transition hover:opacity-75" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.931 9.931 0 01-2.825.775A4.933 4.933 0 0023.338 3c-.947.56-1.996.973-3.127 1.19A4.916 4.916 0 0016.616 2c-2.713 0-4.923 2.196-4.923 4.914 0 .386.043.761.127 1.124C7.691 8.093 4.066 6.13 1.64 3.161a4.921 4.921 0 00-.666 2.477c0 1.708.871 3.213 2.188 4.094A4.904 4.904 0 01.96 9.14v.049a4.925 4.925 0 003.946 4.823 4.915 4.915 0 01-2.213.084A4.923 4.923 0 005 19.418 9.87 9.87 0 010 21.294 13.946 13.946 0 007.548 23c9.056 0 14.004-7.514 14.004-14.007 0-.213-.006-.426-.017-.637A10.007 10.007 0 0024 4.557z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <svg className="w-6 h-6 text-gray-700 transition hover:opacity-75" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.49 0h-14.98C2.35 0 0 2.35 0 5.49v14.98C0 21.65 2.35 24 5.49 24h14.98C21.65 24 24 21.65 24 18.49V5.49C24 2.35 21.65 0 19.49 0zm-2.74 18.67h-3.44v-5.02c0-1.193-.021-2.726-1.657-2.726-1.659 0-1.911 1.297-1.911 2.634v5.114h-3.44V10.55h3.30v1.44h.045c.46-.87 1.59-1.79 3.27-1.79 3.49 0 4.13 2.309 4.13 5.303v3.77zm-9.72-10.65c-1.104 0-1.993.892-1.993 1.991 0 1.096.889 1.989 1.993 1.989 1.104 0 1.992-.893 1.992-1.989 0-1.099-.888-1.991-1.992-1.991zm1.5 15.39H5.91V10.55h3.44v13.41z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end mt-8"> 
            <p className="text-xs text-gray-500 text-center lg:text-right">&copy; 2022. Company Name. All rights reserved.</p>
          </div>

         
          <div className="flex flex-col items-center mt-4 lg:hidden"> 
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook">
                <svg className="w-6 h-6 text-gray-700 transition hover:opacity-75" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.351C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0zM12 1.803c-5.573 0-10.14 4.568-10.14 10.14 0 5.573 4.568 10.14 10.14 10.14 5.573 0 10.14-4.568 10.14-10.14 0-5.573-4.568-10.14-10.14-10.14zm2.597 15.672h-2.681v-6.293h2.681v-1.9h-2.681V9.585c0-.813.105-1.205 1.176-1.205h1.345v-2.003h-1.345c-2.135 0-3.53 1.136-3.53 3.178v1.615h-2.681v1.9h2.681v6.293zm-5.263-.702c.64.64 1.463.641 2.103 0s.641-1.463 0-2.103-1.463-.641-2.103 0c-.641.64-.641 1.463 0 2.103z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg className="w-6 h-6 text-gray-700 transition hover:opacity-75" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.931 9.931 0 01-2.825.775A4.933 4.933 0 0023.338 3c-.947.56-1.996.973-3.127 1.19A4.916 4.916 0 0016.616 2c-2.713 0-4.923 2.196-4.923 4.914 0 .386.043.761.127 1.124C7.691 8.093 4.066 6.13 1.64 3.161a4.921 4.921 0 00-.666 2.477c0 1.708.871 3.213 2.188 4.094A4.904 4.904 0 01.96 9.14v.049a4.925 4.925 0 003.946 4.823 4.915 4.915 0 01-2.213.084A4.923 4.923 0 005 19.418 9.87 9.87 0 010 21.294 13.946 13.946 0 007.548 23c9.056 0 14.004-7.514 14.004-14.007 0-.213-.006-.426-.017-.637A10.007 10.007 0 0024 4.557z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg className="w-6 h-6 text-gray-700 transition hover:opacity-75" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.49 0h-14.98C2.35 0 0 2.35 0 5.49v14.98C0 21.65 2.35 24 5.49 24h14.98C21.65 24 24 21.65 24 18.49V5.49C24 2.35 21.65 0 19.49 0zm-2.74 18.67h-3.44v-5.02c0-1.193-.021-2.726-1.657-2.726-1.659 0-1.911 1.297-1.911 2.634v5.114h-3.44V10.55h3.30v1.44h.045c.46-.87 1.59-1.79 3.27-1.79 3.49 0 4.13 2.309 4.13 5.303v3.77zm-9.72-10.65c-1.104 0-1.993.892-1.993 1.991 0 1.096.889 1.989 1.993 1.989 1.104 0 1.992-.893 1.992-1.989 0-1.099-.888-1.991-1.992-1.991zm1.5 15.39H5.91V10.55h3.44v13.41z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

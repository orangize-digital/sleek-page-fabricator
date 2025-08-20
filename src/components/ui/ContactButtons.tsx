import React from "react";

const ContactButtons = () => {
  const phoneNumber = "+491713310241";
  const email = "hafen@metallbaumeister-albrecht.de";

  return (
    <>
      <div className="fixed right-4 bottom-[60%] z-50">
        <a
          href={`tel:${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center overflow-hidden bg-[#194d88] w-14 h-14 transition-all duration-300 hover:w-64 rounded-lg"
        >
          <div className="absolute flex items-center justify-center bg-white w-12 h-12 shadow-lg top-1 right-1 rounded-md">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z"
                fill="#194d88"
              />
            </svg>
          </div>
          <div className="flex items-center font-medium justify-center h-full opacity-0 w-40 transition-all duration-300 group-hover:opacity-100 group-hover:mr-8 group-hover:w-40 text-white">
            Kontakt Aufnehmen
          </div>
        </a>
      </div>

      <div className="fixed right-4 bottom-[52%] z-50">
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center overflow-hidden bg-[#194d88] w-14 h-14 transition-all duration-300 hover:w-64 rounded-lg"
        >
          <div className="absolute flex items-center justify-center bg-white w-12 h-12 shadow-lg top-1 right-1 rounded-md">
            <svg
              width="30"
              height="30"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M510.678 112.275c-2.308-11.626-7.463-22.265-14.662-31.054-1.518-1.915-3.104-3.63-4.823-5.345-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557 0-37.395 7.996-50.21 20.814-1.715 1.715-3.301 3.43-4.823 5.345-7.199 8.789-12.354 19.428-14.598 31.054-.922 4.487-1.386 9.124-1.386 13.812v259.833c0 9.968 2.114 19.55 5.884 28.203 3.497 8.26 8.653 15.734 14.926 22.001 1.59 1.586 3.169 3.044 4.892 4.494 12.286 10.175 28.145 16.32 45.319 16.32h369.958c17.18 0 33.108-6.145 45.323-16.384 1.718-1.386 3.305-2.844 4.891-4.43 6.27-6.267 11.425-13.741 14.994-22.001v-.064c3.769-8.653 5.812-18.171 5.812-28.138V126.087c0-4.688-.457-9.325-1.322-13.812zM46.509 101.571c6.345-6.338 14.866-10.175 24.512-10.175h369.958c9.646 0 18.242 3.837 24.512 10.175 1.122 1.129 2.179 2.387 3.112 3.637L274.696 274.203c-5.348 4.687-11.954 7.002-18.696 7.002-6.674 0-13.276-2.315-18.695-7.002L43.472 105.136c.858-1.25 1.915-2.436 3.037-3.565zM36.334 385.92V142.735L176.658 265.15 36.405 387.435c-.071-.464-.071-.986-.071-1.515zm404.645 34.677H71.021c-6.281 0-12.158-1.651-17.174-4.552l147.978-128.959 13.815 12.018c11.561 10.046 26.028 15.134 40.36 15.134 14.406 0 28.872-5.088 40.432-15.134l13.808-12.018 147.92 128.959c-5.016 2.901-10.893 4.552-17.174 4.552zM475.666 385.92c0 .529 0 1.051-.068 1.515L335.346 265.221 475.666 142.8V385.92z"
                fill="#194d88"
              />
            </svg>
          </div>
          <div className="flex items-center font-medium justify-center h-full opacity-0 w-40 transition-all duration-300 group-hover:opacity-100 group-hover:mr-8 group-hover:w-40 text-white">
            E-Mail Schreiben
          </div>
        </a>
      </div>
    </>
  );
};

export default ContactButtons;

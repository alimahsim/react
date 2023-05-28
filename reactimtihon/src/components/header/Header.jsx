import { Link } from "react-router-dom";

import s from "./Header.module.scss";

export const Header = () => {
  // const [ sun, setSun ] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark")
    localStorage.setItem("selectedTheme", "dark")
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light")
    localStorage.setItem("selectedTheme", "light")
  };

  const selectedTheme = localStorage.getItem("selectedTheme")

  if (selectedTheme === "dark"){
    setDarkMode()
  }

  // function MyComponent (props) {
  //   const [isActive, setActive] = useState(false);
  
  //   const toggleClass = () => {
  //     setActive(!isActive);
  //   };
  
  //   return (
  //     <div 
  //       className={isActive ? 'your_className': null} 
  //       onClick={toggleClass} 
  //     >
  //       <p>{props.text}</p>
  //     </div>
  //    );
  // }  

  return (
    <header>
      <div className={s["header-right"]}>
        {/* <img src={booksPic} alt="books-icon" /> */}
        <svg width="45" height="25" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_253)">
          <g clip-path="url(#clip1_2_253)">
          <path d="M16.4213 18.7779C12.9437 17.103 11.1766 16.9214 9.3056 16.7292C7.46113 16.5408 5.55144 16.3411 1.9376 14.6263C1.66909 15.106 1.44735 16.0376 1.2688 17.1668C4.98429 18.3131 6.86519 18.2252 8.67953 18.1363C10.515 18.0469 12.4117 17.9548 16.1222 19.1196C17.3779 19.5141 18.3557 19.9023 19.1334 20.2781C18.4425 19.8261 17.5632 19.3278 16.4213 18.7779Z" color="#41B64D"/>
          <path d="M15.9794 20.2866C12.3507 19.1468 10.5787 19.2325 8.70135 19.3241C6.85283 19.4146 4.93819 19.504 1.17278 18.3471C1.05135 19.2277 0.953297 20.1812 0.875488 21.1017C4.5487 21.6176 6.36979 21.2444 8.12656 20.8802C9.93505 20.506 11.8052 20.1189 15.6138 20.695C17.1034 20.9207 18.2255 21.1954 19.0913 21.4936C18.3227 21.1108 17.3175 20.7067 15.9794 20.2866Z" color="#41B64D"/>
          <path d="M8.22247 22.0584C6.42747 22.4295 4.56815 22.8102 0.823432 22.2874C0.746973 23.2962 0.694351 24.2285 0.666016 24.92C4.42828 24.8886 6.20349 24.238 7.92203 23.6077C9.67656 22.9646 11.4904 22.2996 15.3292 22.2996C16.6272 22.2996 17.6562 22.3773 18.4888 22.5056C17.7233 22.2767 16.7662 22.0632 15.5442 21.8785C11.8201 21.3142 10.0723 21.6756 8.22247 22.0584Z" color="#41B64D"/>
          <path d="M36.472 18.1502C38.2904 18.238 40.1745 18.3274 43.9079 17.1732C43.7235 15.945 43.5014 14.9926 43.2427 14.6268C39.6096 16.3549 37.6954 16.5535 35.8455 16.743C33.9745 16.9352 32.2069 17.1157 28.7294 18.7922C27.5874 19.3427 26.7072 19.841 26.0168 20.2941C26.7945 19.9177 27.7727 19.5285 29.0298 19.1345C32.7394 17.9686 34.637 18.0612 36.472 18.1502Z" color="#41B64D"/>
          <path d="M42.9622 13.5232L39.0249 0.0654297C36.1753 1.40439 34.6555 1.55985 33.1852 1.71051C31.6821 1.86437 30.2627 2.00972 27.4701 3.35506C23.5972 5.22162 23.3872 6.38755 23.2747 7.01417C23.2203 7.31497 23.156 7.65144 22.8079 7.87079V23.1637C22.8097 23.1605 22.8133 23.1573 22.8155 23.153C22.8317 23.1253 22.8461 23.0918 22.8605 23.0551C22.8897 22.9709 22.9118 22.8698 22.9387 22.7223C23.1141 21.7475 23.4074 20.1157 28.5221 17.6524C32.077 15.9381 33.9692 15.7448 35.7992 15.5569C37.5947 15.3732 39.4509 15.1837 42.9622 13.5232Z" color="#41B64D"/>
          <path d="M37.0235 20.8941C38.7821 21.2583 40.6041 21.6304 44.2831 21.1145C44.2058 20.1615 44.1109 19.2144 43.9984 18.3546C40.2213 19.5174 38.3026 19.4284 36.4492 19.3374C34.5719 19.2464 32.8002 19.1607 29.1711 20.3005C27.8331 20.7211 26.8283 21.1252 26.0579 21.509C26.9241 21.2109 28.0467 20.9362 29.5363 20.7104C33.344 20.1328 35.2159 20.5198 37.0235 20.8941Z" color="#41B64D"/>
          <path d="M37.2289 23.6221C38.947 24.2519 40.7227 24.903 44.4849 24.9349C44.4525 24.131 44.4004 23.2244 44.3338 22.3007C40.5855 22.8251 38.7239 22.4439 36.9285 22.0723C35.0786 21.6895 33.3313 21.3285 29.6068 21.8923C28.3857 22.0776 27.4281 22.2916 26.6631 22.5195C27.4951 22.3928 28.5238 22.3134 29.8218 22.3134C33.6609 22.3134 35.4748 22.9789 37.2289 23.6221Z" color="#41B64D"/>
          <path d="M22.2127 22.7094C22.2275 22.7914 22.2401 22.8579 22.2536 22.9191V7.87117C21.9055 7.65183 21.8412 7.31536 21.7872 7.01456C21.6743 6.38793 21.4647 5.222 17.5914 3.35545C14.7988 2.0101 13.3793 1.86476 11.8767 1.7109C10.406 1.56023 8.88712 1.40424 6.03833 0.0663452L2.18701 13.5081C5.69966 15.1697 7.55628 15.3603 9.35308 15.544C11.1827 15.7319 13.0744 15.9257 16.6298 17.6384C21.7445 20.1023 22.0377 21.7346 22.2127 22.7094Z" color="#41B64D"/>
          </g>
          </g>
          <defs>
          <clipPath id="clip0_2_253">
          <rect width="43.819" height="24.8695" fill="white" transform="translate(0.666016 0.0654297)"/>
          </clipPath>
          <clipPath id="clip1_2_253">
          <rect width="43.819" height="24.8695" fill="white" transform="translate(0.666016 0.0654297)"/>
          </clipPath>
          </defs>
        </svg>
        {/* <img src={owaBooksPic} alt="owa-books" /> */}
        <svg width="184" height="25" viewBox="0 0 184 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_244)">
          <g clip-path="url(#clip1_2_244)">
          <g clip-path="url(#clip2_2_244)">
          <g clip-path="url(#clip3_2_244)">
          <path d="M18.0246 23.4391H24.5773V24.9347H0.305908V23.4391H6.8586C5.25226 22.3492 3.98286 20.8536 3.0504 18.9521C2.12186 17.0507 1.65758 14.9405 1.65758 12.6217C1.65758 9.0507 2.69583 6.06404 4.77232 3.66173C6.8488 1.26405 9.40524 0.0652161 12.4416 0.0652161C15.478 0.0652161 18.0344 1.26405 20.1109 3.66173C22.1874 6.06404 23.2256 9.0507 23.2256 12.6217C23.2256 14.9405 22.7555 17.0507 21.8152 18.9521C20.8749 20.8536 19.6114 22.3492 18.0246 23.4391ZM18.5535 12.6356C18.5535 10.4698 17.9659 8.62171 16.7905 7.09128C15.6151 5.56085 14.1714 4.79564 12.4592 4.79564C10.7432 4.79564 9.29749 5.56085 8.12212 7.09128C6.94675 8.62171 6.35907 10.4698 6.35907 12.6356C6.35907 14.806 6.94675 16.6495 8.12212 18.166C9.29749 19.6872 10.7432 20.4478 12.4592 20.4478C14.1714 20.4478 15.6151 19.6872 16.7905 18.166C17.9659 16.6495 18.5535 14.806 18.5535 12.6356ZM47.5558 23.4391H54.1967V24.9347H43.7065L39.2107 8.03041L34.7443 24.9347H24.2541V23.4391H30.8949L24.1659 0.621736H29.1319L33.1869 14.6043L36.8306 0.621736H41.6202L45.2345 14.6043L49.3189 0.621736H54.2848L47.5558 23.4391ZM74.5893 23.4391H77.9979V24.9347H70.2699L68.3599 19.6826H59.7503L57.8403 24.9347H50.1122V23.4391H53.4914L61.8366 0.621736H66.2736L74.5893 23.4391ZM66.6262 14.9173L64.0698 7.8565L61.484 14.9173H66.6262ZM91.6263 23.4391H95.7401V24.9347H74.6716V23.4391H77.5219V0.621736H85.5144C86.9053 0.621736 88.1061 0.818838 89.1169 1.21304C90.1238 1.60724 90.8819 2.14057 91.3913 2.81304C92.312 4.06521 92.7723 5.47969 92.7723 7.0565C92.7723 8.95794 92.2532 10.3724 91.215 11.3C90.8623 11.6246 90.6175 11.8263 90.4803 11.9052C90.3432 11.9887 90.0984 12.1232 89.7457 12.3087C91.0191 12.6333 92.0338 13.3104 92.7899 14.34C93.5422 15.3742 93.9183 16.6565 93.9183 18.1869C93.9183 20.4826 93.1543 22.2333 91.6263 23.4391ZM82.1058 14.7434V20.3434H85.2499C86.5624 20.3434 87.5478 20.151 88.206 19.766C88.8603 19.3857 89.1874 18.6321 89.1874 17.5052C89.1874 16.3829 88.8407 15.6408 88.1472 15.2791C87.4499 14.922 86.3372 14.7434 84.8092 14.7434H82.1058ZM82.1058 5.21303V10.4652H84.2803C85.5536 10.4652 86.4998 10.3029 87.1188 9.97823C87.7339 9.6536 88.0415 8.95099 88.0415 7.87041C88.0415 6.79447 87.7574 6.08259 87.1893 5.73477C86.6212 5.38694 85.6613 5.21303 84.3097 5.21303H82.1058ZM113.459 23.4391H120.012V24.9347H95.7401V23.4391H102.293C100.686 22.3492 99.419 20.8536 98.4905 18.9521C97.558 17.0507 97.0918 14.9405 97.0918 12.6217C97.0918 9.0507 98.1301 6.06404 100.207 3.66173C102.283 1.26405 104.839 0.0652161 107.876 0.0652161C110.912 0.0652161 113.469 1.26405 115.545 3.66173C117.622 6.06404 118.66 9.0507 118.66 12.6217C118.66 14.9405 118.19 17.0507 117.249 18.9521C116.309 20.8536 115.046 22.3492 113.459 23.4391ZM113.988 12.6356C113.988 10.4698 113.4 8.62171 112.225 7.09128C111.049 5.56085 109.606 4.79564 107.893 4.79564C106.177 4.79564 104.732 5.56085 103.556 7.09128C102.381 8.62171 101.793 10.4698 101.793 12.6356C101.793 14.806 102.381 16.6495 103.556 18.166C104.732 19.6872 106.177 20.4478 107.893 20.4478C109.606 20.4478 111.049 19.6872 112.225 18.166C113.4 16.6495 113.988 14.806 113.988 12.6356ZM137.73 23.4391H144.283V24.9347H120.012V23.4391H126.564C124.958 22.3492 123.688 20.8536 122.756 18.9521C121.827 17.0507 121.363 14.9405 121.363 12.6217C121.363 9.0507 122.401 6.06404 124.478 3.66173C126.554 1.26405 129.111 0.0652161 132.147 0.0652161C135.184 0.0652161 137.74 1.26405 139.817 3.66173C141.893 6.06404 142.931 9.0507 142.931 12.6217C142.931 14.9405 142.461 17.0507 141.521 18.9521C140.581 20.8536 139.317 22.3492 137.73 23.4391ZM138.259 12.6356C138.259 10.4698 137.671 8.62171 136.496 7.09128C135.321 5.56085 133.875 4.79564 132.159 4.79564C130.447 4.79564 129.003 5.56085 127.828 7.09128C126.652 8.62171 126.065 10.4698 126.065 12.6356C126.065 14.806 126.652 16.6495 127.828 18.166C129.003 19.6872 130.447 20.4478 132.159 20.4478C133.875 20.4478 135.321 19.6872 136.496 18.166C137.671 16.6495 138.259 14.806 138.259 12.6356ZM164.823 0.621736L156.654 11.3695L163.912 23.4391H166.351V24.9347H159.475L153.451 15.3347L151.394 18.0478V24.9347H144.283V23.4391H146.81V0.621736H151.394V10.6043L159.151 0.621736H164.823ZM179.568 23.4391H183.329V24.9347H164.582V23.4391H168.578C167.5 22.7898 166.521 21.955 165.639 20.9347L168.372 16.9695C170.586 19.2652 172.633 20.413 174.513 20.413C175.356 20.413 176.018 20.1973 176.5 19.766C176.978 19.3394 177.217 18.7597 177.217 18.0269C177.217 17.2988 176.962 16.7191 176.453 16.2878C175.944 15.8611 174.935 15.4275 173.426 14.9869C171.036 14.3145 169.289 13.4403 168.184 12.3643C167.075 11.2837 166.521 9.58867 166.521 7.27911C166.521 4.97419 167.222 3.19564 168.625 1.94347C170.024 0.691302 171.771 0.0652161 173.867 0.0652161C175.238 0.0652161 176.61 0.343477 177.981 0.899997C179.352 1.45652 180.547 2.24492 181.566 3.26521L179.244 7.23041C177.462 5.63042 175.62 4.83042 173.72 4.83042C172.956 4.83042 172.355 5.04375 171.916 5.47042C171.473 5.90172 171.252 6.46984 171.252 7.17476C171.252 7.88432 171.522 8.4478 172.063 8.86519C172.6 9.28258 173.844 9.77418 175.795 10.34C177.742 10.9104 179.254 11.7637 180.332 12.9C181.409 14.0362 181.948 15.613 181.948 17.6304C181.948 20.1347 181.154 22.071 179.568 23.4391Z" color="#41B64D"/>
          </g>
          </g>
          </g>
          </g>
          <defs>
          <clipPath id="clip0_2_244">
          <rect width="183.035" height="24.8695" fill="white" transform="translate(0.299561 0.0652161)"/>
          </clipPath>
          <clipPath id="clip1_2_244">
          <rect width="183.035" height="24.8695" fill="white" transform="translate(0.299561 0.0652161)"/>
          </clipPath>
          <clipPath id="clip2_2_244">
          <rect width="183.035" height="24.8695" fill="white" transform="translate(0.299561 0.0652161)"/>
          </clipPath>
          <clipPath id="clip3_2_244">
          <rect width="183.035" height="24.8695" fill="white" transform="translate(0.299561 0.0652161)"/>
          </clipPath>
          </defs>
        </svg>
      </div>
      <div className={s["header-left"]}>
        {/* <DarkMode></DarkMode> */}
        <div onClick={()=>{setDarkMode()}} className={s["moon"]}>
          {/* <img src={hilalPic} alt="hilal-icon" /> */}
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M15.3033 0.215831C10.546 1.19962 6.96889 5.4302 6.96889 10.5C6.96889 16.299 11.649 21 17.4222 21C20.4047 21 23.0955 19.7454 25 17.7328C23.1159 22.5722 18.4276 26 12.9422 26C5.79443 26 0 20.1797 0 13C0 5.8203 5.79443 0 12.9422 0C13.7486 0 14.5378 0.0740787 15.3033 0.215831Z" color="#41B64D"/>
          </svg>
          </div>
        <div onClick={()=>{setLightMode()}} className={s["sun"]}>
          {/* <img  src={sunPic} alt="sun-icon" /> */}
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M12 1C12 0.447715 12.4477 0 13 0C13.5523 0 14 0.447715 14 1V4C14 4.55228 13.5523 5 13 5C12.4477 5 12 4.55228 12 4V1ZM18 13C18 15.7614 15.7614 18 13 18C10.2386 18 8 15.7614 8 13C8 10.2386 10.2386 8 13 8C15.7614 8 18 10.2386 18 13ZM13 21C12.4477 21 12 21.4477 12 22V25C12 25.5523 12.4477 26 13 26C13.5523 26 14 25.5523 14 25V22C14 21.4477 13.5523 21 13 21ZM25 12C25.5523 12 26 12.4477 26 13C26 13.5523 25.5523 14 25 14H22C21.4477 14 21 13.5523 21 13C21 12.4477 21.4477 12 22 12H25ZM5 13C5 12.4477 4.55228 12 4 12H1C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H4C4.55228 14 5 13.5523 5 13ZM20.7782 3.80761C21.1687 3.41709 21.8019 3.41709 22.1924 3.80761C22.5829 4.19814 22.5829 4.8313 22.1924 5.22183L20.0711 7.34315C19.6805 7.73367 19.0474 7.73367 18.6569 7.34315C18.2663 6.95262 18.2663 6.31946 18.6569 5.92893L20.7782 3.80761ZM7.34315 18.6569C6.95262 18.2663 6.31946 18.2663 5.92893 18.6569L3.80761 20.7782C3.41709 21.1687 3.41709 21.8019 3.80761 22.1924C4.19814 22.5829 4.8313 22.5829 5.22183 22.1924L7.34315 20.0711C7.73367 19.6805 7.73367 19.0474 7.34315 18.6569ZM22.1924 20.7782C22.5829 21.1687 22.5829 21.8019 22.1924 22.1924C21.8019 22.5829 21.1687 22.5829 20.7782 22.1924L18.6569 20.0711C18.2663 19.6805 18.2663 19.0474 18.6569 18.6569C19.0474 18.2663 19.6805 18.2663 20.0711 18.6569L22.1924 20.7782ZM7.34315 7.34315C7.73367 6.95262 7.73367 6.31946 7.34315 5.92893L5.22183 3.80761C4.8313 3.41709 4.19814 3.41709 3.80761 3.80761C3.41709 4.19814 3.41709 4.8313 3.80761 5.22183L5.92893 7.34315C6.31946 7.73367 6.95262 7.73367 7.34315 7.34315Z" color="#F27851"/>
          </svg>
        </div>
        <Link to="/sign-in" className={s["log-out"]} onClick={()=>{localStorage.removeItem("token")}}>log out</Link>
      </div>
    </header>
  );  
};

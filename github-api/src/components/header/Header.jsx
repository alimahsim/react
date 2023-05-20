import React, { Component } from "react";
import s from "./Header.module.scss";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { modeIcon } = this.props
    return (
      <header>
        <div className={s["header-right"]}>devfinder</div>
        <div className={s["header-left"]}>
          <div className={s["header-left_content"]}>
            <div className={s["header-left_content__text"]}>light</div>
            <img src={modeIcon}
            //   src="<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            //     <path d='M13.5451 6.45505C12.6456 5.55558 11.3757 4.97357 10.0001 4.97357C8.62443 4.97357 7.35459 5.52913 6.45511 6.45505C5.55564 7.35452 4.97363 8.62437 4.97363 10C4.97363 11.3757 5.55564 12.6455 6.45511 13.545C7.35459 14.4445 8.62443 15.0265 10.0001 15.0265C11.3757 15.0265 12.6456 14.4709 13.5451 13.545C14.4445 12.6455 15.0265 11.3757 15.0265 10C15.0265 8.62437 14.471 7.35452 13.5451 6.45505Z' fill='#90A4D4'/>
            //     <path d='M10.0001 3.4127C10.3705 3.4127 10.6879 3.09524 10.6879 2.72487V0.687831C10.6879 0.31746 10.3705 0 10.0001 0C9.62972 0 9.31226 0.31746 9.31226 0.687831V2.72487C9.31226 3.09524 9.62972 3.4127 10.0001 3.4127Z' fill='#90A4D4'/>
            //     <path d='M15.6349 5.34392L17.09 3.88889C17.3545 3.62434 17.3545 3.20106 17.09 2.93651C16.8254 2.67196 16.4021 2.67196 16.1376 2.93651L14.6825 4.39154C14.418 4.65609 14.418 5.07937 14.6825 5.34392C14.9206 5.60847 15.3439 5.60847 15.6349 5.34392Z' fill='#90A4D4'/>
            //     <path d='M19.3123 9.31219H17.2752C16.9049 9.31219 16.5874 9.62966 16.5874 10C16.5874 10.3704 16.9049 10.6879 17.2752 10.6879H19.3123C19.6826 10.6879 20.0001 10.3704 20.0001 10C20.0001 9.62966 19.6826 9.31219 19.3123 9.31219Z' fill='#90A4D4'/>
            //     <path d='M15.6086 14.6561C15.344 14.3915 14.9207 14.3915 14.6562 14.6561C14.3916 14.9206 14.3916 15.3439 14.6562 15.6084L16.1112 17.0635C16.3758 17.328 16.799 17.328 17.0636 17.0635C17.3281 16.7989 17.3281 16.3756 17.0636 16.1111L15.6086 14.6561Z' fill='#90A4D4'/>
            //     <path d='M10.0001 16.5873C9.62972 16.5873 9.31226 16.9047 9.31226 17.2751V19.3121C9.31226 19.6825 9.62972 20 10.0001 20C10.3705 20 10.6879 19.6825 10.6879 19.3121V17.2751C10.6879 16.9047 10.3705 16.5873 10.0001 16.5873Z' fill='#90A4D4'/>
            //     <path d='M4.36511 14.6561L2.91008 16.1111C2.64553 16.3756 2.64553 16.7989 2.91008 17.0635C3.17463 17.328 3.59791 17.328 3.86246 17.0635L5.31749 15.6084C5.58204 15.3439 5.58204 14.9206 5.31749 14.6561C5.07939 14.3915 4.65611 14.3915 4.36511 14.6561Z' fill='#90A4D4'/>
            //     <path d='M3.4127 10C3.4127 9.62966 3.09524 9.31219 2.72487 9.31219H0.687831C0.31746 9.31219 0 9.62966 0 10C0 10.3704 0.31746 10.6879 0.687831 10.6879H2.72487C3.09524 10.6879 3.4127 10.3704 3.4127 10Z' fill='#90A4D4'/>
            //     <path d='M4.36511 5.34392C4.62966 5.60847 5.05294 5.60847 5.31749 5.34392C5.58204 5.07937 5.58204 4.65609 5.31749 4.39154L3.86246 2.93651C3.59791 2.67196 3.17463 2.67196 2.91008 2.93651C2.64553 3.20106 2.64553 3.62434 2.91008 3.88889L4.36511 5.34392Z' fill='#90A4D4'/>
            //     </svg>"
            alt="The sun icon "/>
          </div>
        </div>
      </header>
    );
  }
}
export { Header };

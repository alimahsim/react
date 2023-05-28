
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import getData from "../../resourse/bookInfo"

import fullStar from "../../assets/patterns/full-star.png";
import emptyStar from "../../assets/patterns/empty-star.png";
import locationIcon from "../../assets/patterns/location.png";
import headphones from "../../assets/patterns/headphones.png";
import authorPhoto from "../../assets/imgs/author-photo.png";
import thinkBook from "../../assets/imgs/think-book.png";
import designBook from "../../assets/imgs/design-book.png";
import sprintBook from "../../assets/imgs/sprint-book.png";
import learnUXBook from "../../assets/imgs/learn-ux-book.png";
import reactBook from "../../assets/imgs/react-book.png";
import richDadBook from "../../assets/imgs/rich-dad-book.png";
import harryPotterBook from "../../assets/imgs/harry-potter-book.png";

import s from "./Info.module.scss";

export const Info = () => {

  const { postId } = useParams()
  const navigate = useNavigate()
  const [info, setInfo] = useState([])

  useEffect(()=>{
    getData('https://owabooks.vercel.app/db.json')
    .then(data =>{
      setInfo([data[postId-1]])
    })
  },[postId])

// console.log(info[0].title);

// let [aboutAuthor, author, createdAt, curentlyReading, description, editionNumber,
//    haveRead, id, img, like, rate, title] = useState();

// console.warn(aboutAuthor, info?.aboutAuthor);

return (
    <>
      <div className={s["info-main"]}>
        <div className={s["back-icon"]} onClick={()=>{navigate(-1)}}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.25 7L0.75 7M0.75 7L6.375 12.625M0.75 7L6.375 1.375" color="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p>Back to results</p>
        </div>
        <div className={s["info-main_content"]}>
          <div className={s["info-main_content__book-photo"]}>
            <img src={info[0]?.img} alt="There is a photo of book" />
            <div className={s["social-status"]}>
              <div className={s["pending"]}>
                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.82275 17.9568C4.76606 17.9668 4.70791 17.9668 4.651 17.9568C4.47528 17.8845 4.36043 17.7135 4.3596 17.5234V14.2215H2.46214C2.00837 14.2215 1.57337 14.0412 1.25235 13.7204C0.931558 13.3997 0.751465 12.9644 0.751465 12.5109V1.94009C0.751465 1.48631 0.931558 1.05131 1.25235 0.730506C1.57334 0.409509 2.00836 0.229416 2.46214 0.229416H14.6167C14.8518 0.259223 15.0281 0.459118 15.0281 0.696323C15.0281 0.933319 14.8518 1.13342 14.6167 1.16323H2.46214C2.04964 1.16323 1.71509 1.49757 1.71509 1.91028V12.5184C1.71509 12.7166 1.79388 12.9067 1.93396 13.0468C2.07403 13.1869 2.26392 13.2655 2.46214 13.2655H4.82272C5.08264 13.2655 5.29337 13.4762 5.29337 13.7361V16.2762L8.03521 13.4748C8.1213 13.3799 8.24323 13.3257 8.37122 13.3253H18.6506C18.8489 13.3253 19.0388 13.2467 19.1788 13.1064C19.3191 12.9664 19.3977 12.7765 19.3977 12.5782V5.89214C19.3808 5.75812 19.4223 5.62325 19.5115 5.52195C19.6009 5.42044 19.7295 5.36249 19.8646 5.36249C19.9999 5.36249 20.1285 5.42044 20.2177 5.52195C20.3071 5.62325 20.3486 5.75812 20.3315 5.89214V12.5185C20.3296 12.9658 20.1527 13.3946 19.8385 13.7131C19.5242 14.0314 19.0979 14.2142 18.6506 14.2219H8.57291L5.16635 17.7854C5.07985 17.8867 4.95583 17.9486 4.82264 17.9571L4.82275 17.9568Z" fill="black"/>
                  <path d="M12.0766 3.98695H3.26888C3.03355 3.95714 2.85742 3.75704 2.85742 3.52004C2.85742 3.28304 3.03356 3.08294 3.26888 3.05313H12.0766C12.2106 3.03625 12.3455 3.07773 12.447 3.16694C12.5483 3.25636 12.6065 3.38497 12.6065 3.52004C12.6065 3.65532 12.5483 3.78393 12.447 3.87314C12.3455 3.96256 12.2106 4.00404 12.0766 3.98695Z" fill="black"/>
                  <path d="M9.30505 6.81826H3.26888C3.03355 6.78846 2.85742 6.58835 2.85742 6.35136C2.85742 6.11415 3.03356 5.91426 3.26888 5.88445H9.30505H9.30484C9.43907 5.86736 9.57394 5.90884 9.67524 5.99826C9.77675 6.08747 9.8347 6.21608 9.8347 6.35136C9.8347 6.48642 9.77675 6.61503 9.67524 6.70446C9.57394 6.79367 9.43907 6.83515 9.30484 6.81826H9.30505Z" fill="black"/>
                  <path d="M9.30505 9.64213H3.26888C3.03355 9.61232 2.85742 9.41222 2.85742 9.17522C2.85742 8.93822 3.03356 8.73812 3.26888 8.70831H9.30505H9.30484C9.43907 8.69143 9.57394 8.7327 9.67524 8.82212C9.77675 8.91154 9.8347 9.04015 9.8347 9.17522C9.8347 9.31029 9.77675 9.4389 9.67524 9.52832C9.57394 9.61774 9.43907 9.65922 9.30484 9.64213H9.30505Z" fill="black"/>
                  <path d="M11.24 9.64212C11.0818 9.64546 10.933 9.56771 10.8452 9.43597C10.7573 9.30424 10.7429 9.13707 10.8067 8.9922L11.9571 6.16824H11.9573C11.984 6.10509 12.0248 6.04881 12.0767 6.00399L17.9112 0.169526C18.094 -0.00890138 18.3858 -0.00890138 18.5686 0.169526L20.2943 1.91021C20.3852 1.99526 20.4367 2.11427 20.4363 2.23892C20.4342 2.36274 20.3831 2.48092 20.2943 2.56763L14.6092 8.24522C14.5678 8.29066 14.5167 8.3263 14.4598 8.34986L11.4193 9.6199C11.3614 9.63782 11.3007 9.64533 11.24 9.6422L11.24 9.64212ZM12.8238 6.6091L12.0767 8.31248L14.0117 7.49809L19.2859 2.26873L18.2249 1.17798L12.8238 6.6091Z" fill="black"/>
                </svg>
                <p>Review</p>
              </div>
              <div className={s["noting"]}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.139 16.7157H9.80496C9.86097 16.7151 9.91649 16.7044 9.96869 16.6843C10.0209 16.6637 10.0689 16.6338 10.1105 16.5961L15.753 11.262C15.7972 11.2213 15.8327 11.1719 15.8569 11.1171C15.8792 11.0652 15.892 11.0097 15.8948 10.9533V6.14824C15.8948 5.88727 15.6832 5.67581 15.4224 5.67581C15.1616 5.67581 14.9501 5.88725 14.9501 6.14824V10.4461H12.0469C11.3269 10.4478 10.6371 10.7347 10.1283 11.2442C9.6195 11.7535 9.33341 12.4436 9.3326 13.1635V15.7707H3.13899C2.66958 15.7707 2.21945 15.5844 1.88767 15.2524C1.55572 14.9207 1.3692 14.4705 1.3692 14.0011V3.95347C1.3692 3.4839 1.55554 3.03343 1.88733 2.70113C2.21911 2.36868 2.66924 2.18151 3.13899 2.1807H10.9922C11.253 2.1807 11.4644 1.96927 11.4644 1.70845C11.4644 1.44748 11.253 1.23602 10.9922 1.23602H3.13899C2.41907 1.23769 1.72907 1.52475 1.22043 2.03407C0.711625 2.54338 0.425369 3.23355 0.424561 3.95343V14.0011C0.425392 14.7207 0.711629 15.4107 1.2206 15.9195C1.72941 16.4283 2.41924 16.7145 3.13899 16.7153L3.139 16.7157ZM12.0471 11.3911H14.2512L10.2775 15.1477V13.1638C10.2775 12.6943 10.4638 12.2438 10.7956 11.9115C11.1274 11.579 11.5775 11.3919 12.0471 11.3911Z" fill="black"/>
                <path d="M14.7709 0.146804C14.6458 0.147635 14.5261 0.197336 14.4371 0.285268L7.26735 7.45505C7.21632 7.50775 7.17759 7.57125 7.15399 7.64089L6.30692 10.2418C6.25373 10.4105 6.29861 10.595 6.42345 10.7203C6.54895 10.8453 6.73329 10.8902 6.90217 10.8369L9.50307 9.98665V9.98682C9.57255 9.96321 9.63604 9.92449 9.68874 9.87345L16.8555 2.70366C17.0381 2.51849 17.0381 2.22128 16.8555 2.03609L15.1049 0.285238C15.0163 0.196642 14.8963 0.14694 14.7711 0.146774L14.7709 0.146804ZM9.10283 9.12383L7.49696 9.64974L8.02288 8.04387L14.7705 1.28642L15.8536 2.36953L9.10283 9.12383Z" fill="black"/>
                </svg>
                <p>Notes</p>
              </div>
              <div className={s["shareing"]}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4934 0.923828C15.5147 0.923828 13.895 2.54349 13.895 4.52221C13.895 4.84468 13.9415 5.1557 14.0222 5.45357L7.36387 8.78319C6.70331 7.94442 5.68234 7.40153 4.53808 7.40153C2.55936 7.40153 0.939697 9.02119 0.939697 10.9999C0.939697 12.9786 2.55936 14.5983 4.53808 14.5983C5.68102 14.5983 6.70263 14.0554 7.36323 13.2171L14.0224 16.5468C13.9424 16.8446 13.8952 17.1551 13.8952 17.4776C13.8952 19.4563 15.5149 21.076 17.4936 21.076C19.4723 21.076 21.092 19.4563 21.092 17.4776C21.092 15.4989 19.4723 13.8792 17.4936 13.8792C16.3493 13.8792 15.3285 14.4221 14.6678 15.2609L8.00951 11.9313C8.09013 11.6334 8.13668 11.3223 8.13668 10.9999C8.13668 10.6774 8.09013 10.3669 8.00951 10.0691L14.6687 6.73945C15.3292 7.5777 16.3502 8.12059 17.4938 8.12059C19.4725 8.12059 21.0922 6.50093 21.0922 4.52221C21.0922 2.54349 19.4725 0.923828 17.4938 0.923828H17.4934ZM17.4934 2.36349C18.6944 2.36349 19.6528 3.32191 19.6528 4.52289C19.6528 5.72387 18.6944 6.6823 17.4934 6.6823C16.2924 6.6823 15.334 5.72387 15.334 4.52289C15.334 3.32191 16.2924 2.36349 17.4934 2.36349ZM4.53807 8.84051C5.73905 8.84051 6.69747 9.79893 6.69747 10.9999C6.69747 12.2009 5.73905 13.1593 4.53807 13.1593C3.33709 13.1593 2.37866 12.2009 2.37866 10.9999C2.37866 9.79893 3.33709 8.84051 4.53807 8.84051ZM17.4934 15.3184C18.6944 15.3184 19.6528 16.2768 19.6528 17.4778C19.6528 18.6788 18.6944 19.6372 17.4934 19.6372C16.2924 19.6372 15.334 18.6788 15.334 17.4778C15.334 16.2768 16.2924 15.3184 17.4934 15.3184Z" fill="black"/>
                </svg>
                <p>Share</p>
              </div>
            </div>
          </div>
          <div className={s["info-main_content__book-info"]}>
            <div className={s["book-info_content"]}>
              <div className={s["book-title"]}>{info[0]?.title}</div>
              <div className={s["book-author"]}>By <span>{info[0]?.author}</span>, {info[0]?.createdAt}</div>
              <div className={s["edition"]}>{info[0]?.editionNumber}</div>
              <div className={s["book-rating"]}>
                <div className={s["stars"]}>
                  <img src={fullStar} alt="There is a full star icon" />
                  <img src={fullStar} alt="There is a full star icon" />
                  <img src={fullStar} alt="There is a full star icon" />
                  <img src={fullStar} alt="There is a full star icon" />
                  <img src={emptyStar} alt="There is a empty star icon" />
                </div>
                <div className={s["rating"]}>{`${info[0]?.rate} Ratings`}</div>
                <div className={s["reading"]}>{`${info[0]?.curentlyReading} Curently Reading`}</div>
              </div>
              <div className={s["availability-and-status"]}>
                <div className={s["availability"]}>Availability
                  <div className={s["copy"]}>
                  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0.5C3.35697 0.5 0 3.85697 0 8C0 12.143 3.35697 15.5 7.5 15.5C11.643 15.5 15 12.143 15 8C15 3.85697 11.643 0.5 7.5 0.5ZM6.34255 10.6575C6.25601 10.744 6.13341 10.8161 6.02524 10.8161C5.91707 10.8161 5.79447 10.7404 5.70433 10.6538L3.6851 8.63462L4.32692 7.99279L6.02885 9.69471L10.5288 5.16226L11.1599 5.8149L6.34255 10.6575Z" color="#41B64D"/>
                    </svg>
                    {/* <img src={completedIcon} alt="" />  #F27851*/}
                    <span>Hard Copy</span>
                  </div>
                  <div className={s["e-book"]}>
                    {/* <img src={completedIcon} alt="" /> */}
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0.5C3.35697 0.5 0 3.85697 0 8C0 12.143 3.35697 15.5 7.5 15.5C11.643 15.5 15 12.143 15 8C15 3.85697 11.643 0.5 7.5 0.5ZM6.34255 10.6575C6.25601 10.744 6.13341 10.8161 6.02524 10.8161C5.91707 10.8161 5.79447 10.7404 5.70433 10.6538L3.6851 8.63462L4.32692 7.99279L6.02885 9.69471L10.5288 5.16226L11.1599 5.8149L6.34255 10.6575Z" color="#41B64D"/>
                    </svg>
                    <p>E-Book</p>
                  </div>
                  <div className={s["audio-book"]}>
                    {/* <img src={completedIcon} alt="" /> */}
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0.5C3.35697 0.5 0 3.85697 0 8C0 12.143 3.35697 15.5 7.5 15.5C11.643 15.5 15 12.143 15 8C15 3.85697 11.643 0.5 7.5 0.5ZM6.34255 10.6575C6.25601 10.744 6.13341 10.8161 6.02524 10.8161C5.91707 10.8161 5.79447 10.7404 5.70433 10.6538L3.6851 8.63462L4.32692 7.99279L6.02885 9.69471L10.5288 5.16226L11.1599 5.8149L6.34255 10.6575Z" color="#41B64D"/>
                    </svg>
                    <p>Audio-Book</p>
                  </div>
                </div>
                <div className={s["status"]}>Status
                  <div>in-Shelf</div>
                  <div className={s["location"]}>
                    <img src={locationIcon} alt="" />
                    <p>CS A-15</p>
                  </div>
                </div>
              </div>
              <div className={s["btns"]}>
                <div className={s["borrow"]}>Borrow</div>
                <div className={s["read-more"]}>
                  <p>Read more</p>
                  <img src={headphones} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={s["info-main_content_book-author"]}>
            <div className={s["author-title-name-photo"]}>
              <div className={s["title-author-name"]}>
                <div className={s["title"]}>
                  <span>About  </span>Author
                </div>
                <div className={s["author-name"]}>{info[0]?.author}</div>
              </div>
              <img src={authorPhoto} alt="author photo" />
            </div>
            <div className={s["text"]}>
              {info[0]?.aboutAuthor}
            </div>
          </div>
        </div>
        <div className={s["info-description"]}>
          <div className={s["info-description_content"]}>
            <div className={s["description-title"]}>Description</div>
            <p>
              {info[0]?.description}
            </p>
          </div>
        </div>
        <h4>
          <span>Other</span> Books
        </h4>
        <div className={s["info-cards"]}>
          <div className={s["info-card"]}>
            <div className={s["info-card_context"]}>
              <img src={thinkBook} alt="There is a photo of the book" />
              <div className={s["info-card_context__text"]}>
                <h5>Don’t Make Me think</h5>
                <h6>Steve Krug, 2000</h6>
                <p>4.5<span>/5</span></p>
              </div>
            </div>
          </div>
          <div className={s["info-card"]}>
            <div className={s["info-card_context"]}>
              <img src={designBook} alt="There is a photo of the book" />
              <div className={s["info-card_context__text"]}>
                <h5>The Design of Every</h5>
                <h6>Don Norman, 1988</h6>
                <p>4.5<span>/5</span></p>
              </div>
            </div>
          </div>
          <div className={s["info-card"]}>
            <div className={s["info-card_context"]}>
              <img src={sprintBook} alt="There is a photo of the book" />
              <div className={s["info-card_context__text"]}>
                <h5>Sprint:How to solve</h5>
                <h6>Jake Knapp, 2000</h6>
                <p>
                  4.5<span>/5</span>
                </p>
              </div>
            </div>
          </div>
          <div className={s["info-card"]}>
            <div className={s["info-card_context"]}>
              <img src={learnUXBook} alt="There is a photo of the book" />
              <div className={s["info-card_context__text"]}>
                <h5>Learn UX : Design Gr</h5>
                <h6>Jeff Gothelf, 2016</h6>
                <p>4.5<span>/5</span></p>
              </div>
            </div>
          </div>
          <div className={s["info-card"]}>
            <div className={s["info-card_context"]}>
              <img src={reactBook} alt="There is a photo of the book" />
              <div className={s["info-card_context__text"]}>
                <h5>The Road to React</h5>
                <h6>Steve Krug, 2000</h6>
                <p>
                  4.5<span>/5</span>
                </p>
              </div>
            </div>
          </div>
          <div className={s["info-card"]}>
            <div className={s["info-card_context"]}>
              <img src={richDadBook} alt="There is a photo of the book" />
              <div className={s["info-card_context__text"]}>
                <h5>Rich Dad Poor Dad</h5>
                <h6>Robert T.Kiyosaki, 1997</h6>
                <p>4.5<span>/5</span></p>
              </div>
            </div>
          </div>
          <div className={s["info-card"]}>
            <div className={s["info-card_context"]}>
              <img src={harryPotterBook} alt="There is a photo of the book" />
              <div className={s["info-card_context__text"]}>
                <h5>Harry Potter and The</h5>
                <h6>J.K. Rowling, 2002</h6>
                <p>4.5<span>/5</span></p>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

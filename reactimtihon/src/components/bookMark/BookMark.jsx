import React from "react";

import s from "./BookMark.module.scss";

export const BookMark = ({ books, changeLike }) => {

  let cutLetter = (item)=>{
    if( item.length >= 27){
        return item.slice(0, 27) + '...'
    } else return item;
}

  return (
    <>
      <div className={s["book-mark-wrapper"]}>
        <div className={s["book-mark-content"]}>
          <div className={s["title"]}>Bookmarks</div>
          {books.map((item) => {
            if (item.like) {
              return (
                <div className={s["book-mark-card"]}>
                  <img src={item.img} alt="There is a photo of the book" />
                  <div className={s["card-text"]}>
                    <p>{cutLetter(item.title)}</p>
                    <p>{item.author}</p>
                    {/* <img src={heardIcon} alt="There is a heard icon"/> */}
                    <div className={s["full-head"]} onClick={()=>{changeLike(item.id)}}>
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.30731 13.9307L7.30223 13.928L7.28461 13.9185C7.26961 13.9103 7.24815 13.8985 7.22067 13.8832C7.16571 13.8525 7.08662 13.8076 6.98685 13.7489C6.78738 13.6316 6.50479 13.4588 6.16674 13.2341C5.49177 12.7854 4.5899 12.1258 3.68563 11.2829C1.8961 9.61468 0 7.1363 0 4.08339C0 1.80598 1.91616 0 4.22923 0C5.58949 0 6.80746 0.621522 7.58345 1.59571C8.35943 0.621522 9.5774 0 10.9377 0C13.2507 0 15.1669 1.80598 15.1669 4.08339C15.1669 7.1363 13.2708 9.61468 11.4813 11.2829C10.577 12.1258 9.67513 12.7854 9.00015 13.2341C8.66211 13.4588 8.37952 13.6316 8.18004 13.7489C8.08027 13.8076 8.00118 13.8525 7.94623 13.8832C7.91875 13.8985 7.89729 13.9103 7.88228 13.9185L7.86467 13.928L7.85959 13.9307L7.85744 13.9319C7.68636 14.0227 7.48054 14.0227 7.30946 13.9319L7.30731 13.9307Z"
                          fill="#F34040"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

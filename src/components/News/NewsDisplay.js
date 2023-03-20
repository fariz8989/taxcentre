import React from "react";
import { icon } from "../../assets/Icon";
export default function NewsDisplay() {
  return (
    <>
      <div id="news-display">
        <div className="news-wrapper">
          <div>
            <img src={require("../..//assets/consulting.webp")} />
          </div>
          <div className="news-display-text">
            <h1>Penerapan Pajak Karbon pada PLTU A</h1>
            <div className="news-information">
              <span>Kamis, 3 Maret 2023</span>
              <div>
                {icon.tags}
                <span>Pajak</span>
              </div>
            </div>
            <span>Penulis : Ahmad Fariz</span>

            {/* News Content */}
            <div className="news-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse porta tortor a ligula gravida ultricies. Nulla porta
                sollicitudin varius. Donec nec ultrices velit, ut egestas
                turpis. Ut nibh magna, sodales vitae fringilla in, dapibus quis
                lectus. Etiam vel facilisis odio. Aenean at dapibus metus.
                Praesent velit augue, fermentum id facilisis at, tempor id
                tortor. Nam vitae ligula aliquet, sagittis dolor porta, lobortis
                turpis. Proin tristique egestas magna non bibendum.
              </p>
              <p>
                Sed ut nunc sit amet massa scelerisque volutpat. Aliquam maximus
                tortor consequat posuere tincidunt. Quisque imperdiet tincidunt
                nunc eu dignissim. Aenean vel purus rutrum, euismod est et,
                congue ipsum. Morbi porta tempor lorem, sit amet varius arcu
                commodo in. In ullamcorper, dui id blandit condimentum, urna
                felis iaculis dolor, vitae imperdiet lorem sapien a nulla.
                Aenean vitae odio nec metus porta blandit et a quam. Sed ornare
                dignissim mauris vitae ornare. Etiam massa nibh, malesuada vel
                tincidunt ac, congue sit amet risus. Morbi semper augue nec
                elementum accumsan. Nulla nec blandit massa. In eget porttitor
                libero. Sed diam nibh, egestas sit amet odio at, sodales
                accumsan mi. Phasellus et tempus est. Ut sollicitudin efficitur
                turpis, et gravida elit euismod id.
              </p>
              <p>
                Donec at mi malesuada, luctus libero sit amet, placerat elit.
                Cras a mattis nibh. Donec velit ligula, vehicula et gravida id,
                tristique a sem. Sed quis nisl quis dui convallis semper
                vulputate non est. Fusce nec imperdiet enim. Praesent malesuada
                lectus a varius pellentesque. Aenean nec dui faucibus, pulvinar
                orci malesuada, pulvinar sapien. Donec cursus tellus in odio
                placerat, eget euismod tortor dignissim. Donec nec eros leo.
              </p>
            </div>
            {/* END NEWS CONTENT */}
            
          </div>
          {/* Share */}
          <div className="share-container">
            <span>Share News :</span>
            <div>
                {icon.facebook}
                {icon.whatsapp}
                {icon.linkedin}
            </div>
          </div>
          {/* END SHARE */}
        </div>
      </div>
    </>
  );
}

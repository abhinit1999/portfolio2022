import React from "react";
import "./style.css";
import pic from "./photo.JPG";
const index = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="left">
          <img className="my_pic" src={pic} alt="img" />
        </div>
        <div className="right">
          <span className="bio">MY BIO</span>
          <hr className="horizontal_line" />
          <span className="text">
            Loremff3f ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quaerat vero consectetur quis, quibusdam aliquid alias saepe, quam
            totam tempora nobis ab aperiam. Porro, nostrum cupiditate blanditiis
            nemo corrupti in cum, consequuntur error natus illum sit eum quam
            modi officia ullam aliquid ut molestiae iure aliquam! Ea quas
            provident consequuntur obcaecati sunt neque qui perspiciatis?
            Voluptates accusamus praesentium consequuntur non, iure corrupti
            sint. Mollitia, tempore impedit? Soluta nemo aliquam atque aut quae
            sed facilis repellendus doloribus perferendis nostrum alias corrupti
            eius placeat reiciendis quos porro, temporibus enim et quasi ducimus
            consequatur ipsam aliquid? Aspernatur quod tempore quidem
            perspiciatis corporis voluptatem, cumque cum labore debitis corrupti
            voluptates ipsum, asperiores vel nam repellendus ea numquam, nihil
            est delectus qui natus rem consectetur. Adipisci saepe sint magnam
            minima? Officiis optio eaque suscipit magni aut quaerat doloribus at
            accusantium ipsum omnis et nam iure sed, tempora soluta quisquam est
            molestias. Eius et voluptatibus esse non repellat? Sit perspiciatis
            sequi nam, aliquam aspernatur molestiae enim aliquid quo quae
            dolorem recusandae omnis velit magnam voluptatem aut quod
            accusantium repellendus officia ab harum asperiores neque.
            Voluptatem corporis sit possimus necessitatibus ducimus eum
            mollitia, quasi harum aspernatur ex cupiditate neque quia sunt?
            Iusto enim quo tempora in quas.
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;

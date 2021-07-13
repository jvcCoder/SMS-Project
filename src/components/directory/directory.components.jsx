import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "sign in",
          imageUrl: "https://i.ibb.co/vXYJhHK/sign-in.jpg",
          size: "large",
          id: 1,
          linkUrl: "signin",
        },
        {
          title: "sign up",
          imageUrl: "https://i.ibb.co/7zBsqWp/sign-up.jpg",
          size: "large",
          id: 2,
          linkUrl: "signup",
        },

        {
          title: "rent",
          imageUrl: "https://i.ibb.co/2Mq18ZH/rent.jpg",
          id: 3,
          size: "large",
          linkUrl: "rent",
        },

        {
          title: "contact us",
          imageUrl: "https://i.ibb.co/LRTttrm/contact.jpg",
          id: 4,
          size: "large",
          linkUrl: "contactus",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem
            key={id}{...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

import React from "react";
import RENT_DATA from "./rent.data.js";
import RentPreview from "../../components/rent-preview/rent-preview.component";

class RentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: RENT_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='rent-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <RentPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default RentPage;

import React from "react";
import RENT_DATA from "./rent.data.js";
import RentPreview from "../../components/rent-preview/rent-preview.component";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "./maps.styles.scss";

class RentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: RENT_DATA,
    };
  }

  render() {
    const mapStyles ={
      width: "40%",
      height: "500px",
    };

    const { collections } = this.state;
    return (
      <div className='rent-page'>
        <div className='rent-scooter'>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <RentPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
        <div className='maps'>
          <Map
            google={this.props.google}
            zoom={7}
            style={mapStyles}
            initialCenter={
              {
                lat: 53.350145,
                lgn: -6.266157,
              }
            }
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCCqUaqUaSpRtLShd2Tyi5PuphF94YhzmQ'
})(RentPage);

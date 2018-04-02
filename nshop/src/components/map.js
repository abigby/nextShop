import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponet = ({ text }) => {
    return(
        <div>
        </div>
    )
}
class NextShopMap extends Component {
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
    }

    render() {
        return(
            <div id="nsMap" style={{width:'100%', height:'100vh'}}>
                <GoogleMapReact
                    boostrapURLKeys={{key: ["AIzaSyBpPC4BLH1GUSTqJ5-gYewwLzRvYREYlQo"]
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                ></GoogleMapReact>
            </div>
        )
    }
}

export default NextShopMap;
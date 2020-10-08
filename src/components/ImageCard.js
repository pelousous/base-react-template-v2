import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'rowSpan' : 1};
        this.image = React.createRef();

    }
    componentDidMount() {
        this.image.current.addEventListener('load', this.setSpans);
    }
    setSpans = () => {
        const height = this.image.current.clientHeight;

        this.setState({'rowSpan': Math.ceil(height / 10) });
    }
    render() {
        const {urls, description} = this.props.image;
        return(
            <div style={{'gridRowEnd': `span ${this.state.rowSpan}`}}>
                <img 
                    ref={this.image} 
                    src={urls.regular} 
                    alt={description}
                />
            </div>
        )
    }
}

export default ImageCard;
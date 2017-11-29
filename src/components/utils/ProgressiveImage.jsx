import React from 'react';

export default class ProgressiveImage extends React.Component {
  state = {
    image: props.placeholder,
    loading: true
  };

  componentDidMount() {
    const { src } = this.props;
    this.loadImage(src);
  }

  componentWillReceiveProps({ src, placeholder }) {
    // We only invalidate the current image if the src has changed.
    if (src !== this.props.src) {
      this.setState({ image: placeholder, loading: true }, () => {
        this.loadImage(src);
      });
    }
  }

  componentWillUnmount() {
    if (this.image) {
      this.image.onload = null;
      this.image.onerror = null;
    }
  }

  // If there is already an image we nullify the onload
  // and onerror props so it does not incorrectly set state
  // when it resolves
  loadImage = src => {
    if (this.image) {
      this.image.onload = null;
      this.image.onerror = null;
    }
    const image = new Image();
    this.image = image;
    image.onload = this.onLoad;
    image.onerror = this.onError;
    image.src = src;
  };

  // use this.image.src instead of this.props.src to
  // avoid the possibility of props being updated and the
  // new image loading before the new props are available as
  // this.props.
  onLoad = () =>
    this.setState({
      image: this.image.src,
      loading: false
    });

  onError = errorEvent => {
    const { onError } = this.props;
    if (onError) {
      onError(errorEvent);
    }
  };

  render() {
    const { image, loading } = this.state;
    const { children } = this.props;
    if (!children || typeof children !== 'function') {
      throw new Error(`ProgressiveImage requires a function as its only child`);
    }
    return children(image, loading);
  }
}

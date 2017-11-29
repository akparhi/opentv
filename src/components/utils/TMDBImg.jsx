import React from 'react';

import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import Empty from './empty.svg';

const IMG_PATH = 'https://image.tmdb.org/t/p/';

const styles = {
  errored: {
    backgroundImage: `url(${Empty})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  }
};

class TMDBImg extends React.Component {
  state = { errored: false };

  onNoImage = () => this.setState({ errored: true });

  render() {
    const { className, classes, alt, path, imgPath, ...rest } = this.props;
    let style = className;
    let src = '';

    if (imgPath) src = `${IMG_PATH}${path}${imgPath}`;
    if (this.state.errored) style = classnames(style, classes.errored);

    return (
      <img
        src={src}
        alt=""
        className={style}
        {...rest}
        onError={this.onNoImage}
        style={{ styles }}
      />
    );
  }
}

export default withStyles(styles)(TMDBImg);

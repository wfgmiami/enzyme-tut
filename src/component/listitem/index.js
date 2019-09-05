import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {

  render() {
    const {title, desc} = this.props;

    if(!title) {
      return null;
    }

    return (
      <div data-test='listItemComponent'>
        <div data-test="componentTitle">
          {title}
        </div>
        <div data-test="componentDesc">
          {desc}
        </div>
      </div>
    )
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
}

export default ListItem;

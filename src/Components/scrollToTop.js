import React from 'react';
import customIcons from '../Icons/customIcons';
import ".././Pages/App/App.css"

class ScrollToTopButton extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <div className='btnScrollTop' onClick={this.scrollToTop}>
        <customIcons.scrollTop/>
      </div>
    );
  }
}

export default ScrollToTopButton;

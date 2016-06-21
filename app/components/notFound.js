import React from 'react';

class NotFound extends React.Component {

  getStyle(){
      return {
          paddingBottom: 20 + 'px'
      }
  }
  render() {

    return (
        <div className="post-box news-post">
            <div className="post-box-inner bg-light">
                <div className="post-header d-table">
                    <div className="tool-left">
                    </div>
                    <div className="tool-right">
                    </div>
                    <div className="post-content" style={this.getStyle()}>
                        <div className="post-text">
                            <h3>No Contest Found</h3>
                        </div>
                    </div>
                    <div className="post-footer">
                        <div className="d-table">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        );
  }
}

export default NotFound;

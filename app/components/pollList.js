import React, { Component } from 'react';
import Poll from  './poll';
import { observer } from "mobx-react";
import store from '../store/index';

@observer
class PollList extends Component {

    constructor(props) {
        super(props);
        store.loadPollList();
    }
    componentDidMount () {
        $(window).on('scroll',  () => {
            if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                store.loadPollList();
            }
        });
    }
  render() {
      return (
        <div className="event-post-wrapper">
            {store.pollLists.map(function(poll, index){
                return <Poll poll={poll} key={index} />;
            })}
            {( store.showLoader
                    ? <div className="content-loading"><i className="fa fa-spinner fa-pulse"> </i></div>
                    : ''
            )}
        </div>
      );
  }
}

PollList.propTypes = {};
PollList.defaultProps = {};

export default PollList;

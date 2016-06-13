import React from 'react';
import Store from '../store/index'
import { observer } from "mobx-react";

@observer
class TopFilter extends React.Component {
    changeOrder() {
        Store.setOrder();
    }
    componentDidMount () {
        $("#contest-type").on('click', 'a', function(){
            Store.changeContestType( $(this).text());
        });
    }
  render() {
    return (
        <section className="filter-bar">
            <div className="container">
                <div className="row">
                    <div className="col-xs-8">
                        <div className="filter-nav-wrapper clearfix">
                            <h4 className="nav-title">filters</h4>
                            <nav className="filter-nav">
                                <ul className="clearfix">
                                    <li className="dropdown poll">
                                        <span className="list-title">contest type:</span>
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">popular</a>
                                        <ul className="dropdown-menu" id="contest-type">
                                            <li><a href="javascript:void(0)">Most Popular</a></li>
                                            <li><a href="javascript:void(0)">Most Recent</a></li>
                                        </ul>
                                    </li>
                                    {Store.mostPopular ?
                                        <li className="dropdown poll">
                                            <span className="list-title">duration type:</span>
                                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Daily</a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Daily</a></li>
                                                <li><a href="#">Weekly</a></li>
                                                <li><a href="#">Monthly</a></li>
                                                <li><a href="#">Yearly</a></li>
                                            </ul>
                                        </li> : ''
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="col-xs-4">
                        <div className="tool-right">
                            <ul className="post-view-list">
                                <li className="sorting"><a href="javascript:void(0)" className="btn-sorting" onClick={this.changeOrder}><span>Sort</span> <i className="gg-sort-down"></i></a></li>
                                <li className="post-view"><a href="javascript:void(0)" className="btn-post-view"><i className="gg-grid-fill"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

TopFilter.propTypes = {};
TopFilter.defaultProps = {};

export default TopFilter;

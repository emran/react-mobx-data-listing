import React, {Component} from 'react';
import moment from 'moment';

class Poll extends Component {

    getCategory(category) {
        return (category.length > 0) ? category[0].name : 'no';
    }
    getCover(files) {
        return (files) ? files.url : null;
    }

    getProfileDetilsRoute(profile){
        return GGLogicEndpoints.profileDetailsRoute.replace('slug', profile.slug);
    }

    getPollDetailsLink(slug, id) {
        return GGLogicEndpoints.pollDetailsRoute.replace('slug', slug).replace('id', id);
    }
    render() {
    return (

        <div className="post ev-poll">
            <div className="post-inner">
                {( this.getCover(this.props.poll.files)
                        ? <div className="post-media"><div className="media-wrapper"><a href={this.getPollDetailsLink(this.props.poll.profile.slug, this.props.poll.id)}>
                        <img src={this.getCover(this.props.poll.files)} alt="Image"/></a></div></div>
                        : ''
                )}

                <div className="post-content">
                    <div className="details">
                        <div className="icon">
                            <a href="#"><i className="gg-poll2"></i></a>
                        </div>
                        <h2 className="title"><a href={this.getPollDetailsLink(this.props.poll.profile.slug, this.props.poll.id)}>{this.props.poll.title}</a></h2>
                        <div className="meta">
                            <ul>
                                <li className="tag"><a href="#">{this.getCategory(this.props.poll.category)}</a></li>
                                <li className="author"><a href={this.getProfileDetilsRoute(this.props.poll.profile)}>{this.props.poll.profile.display_name}</a></li>
                                <li className="dtime">{moment(this.props.poll.created_at).format("MMM MM")}, {moment(this.props.poll.created_at).fromNow()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post-footer">
                    <div className="d-table">
                        <div className="tool-left">
                            <ul className="tool-list">
                                <li><i className="gg-power"></i><span>{this.props.poll.total_votes}</span> <span className="grid-hide">Votes</span></li>
                                <li data-toggle="tooltip" title={moment(this.props.poll.end_date).format("D MMM, h:mm A")}><i className="gg-clock"></i><span>{moment(this.props.poll.settings.end_date).toNow(true)}</span> <span className="grid-hide">left</span></li>
                                <li><i className="gg-rating"></i><span>20</span></li>
                            </ul>
                        </div>
                        <div className="tool-right">
                            <ul className="tool-list post-interaction-list">
                                <li className="like"><a href="#"><i className="gg-like-line"></i><span>100</span></a></li>
                                <li className="dislike"><a href="#"><i className="gg-dislike"></i><span>10</span></a></li>
                                <li className="dropdown dot-h-dropdown"><a href="#" data-toggle="dropdown"><i className="gg-ellipsis-v"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li><a href="#">Bookmark</a></li>
                                        <li><a href="#">Flag</a></li>
                                        <li><a href="#">DisableNotification</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

Poll.propTypes = {};
Poll.defaultProps = {};

export default Poll;

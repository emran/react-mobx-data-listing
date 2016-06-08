import React from 'react';
import Filter from './filter'
import PollList from './pollList'
import TopFilter from './top-filter'

class Main extends React.Component {

  render() {
    return (
        <div>
            <TopFilter />
            <section className="section-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8">
                            <PollList />
                        </div>
                        <div className="col-xs-4">
                            <Filter />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div>
          <form action="#">
              <div className="right-sidebar">
                  <div className="widget">
                      <div className="widget-content">

                          <div className="search-area sidebar-search">
                              <input className="input-search" type="text" placeholder="Search" />
                                  <button><i className="gg-search"></i></button>
                          </div>

                      </div>
                  </div>

                  <div className="widget">
                      <h3 className="widget-title">PopularKeywords</h3>

                      <div className="widget-content">
                          <ul className="tag-list">
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="terrorism" name="keyword" />
                                      <label for="terrorism">Terrorism</label>
                              </li>
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="eco-tourism" name="keyword" />
                                      <label for="eco-tourism">Eco Tourism</label>
                              </li>
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="hillary-clinton" name="keyword" />
                                      <label for="hillary-clinton">Hillary Clinton</label>
                              </li>
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="artificial" name="keyword" />
                                      <label for="artificial">Artificial Intelligence</label>
                              </li>
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="donald" name="keyword" />
                                      <label for="donald">Donald Trump</label>
                              </li>
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="cricket" name="keyword" />
                                      <label for="cricket">Cricket</label>
                              </li>
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="middle" name="keyword" />
                                      <label for="middle">Middle East</label>
                              </li>
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="usa" name="keyword" />
                                      <label for="usa">USA Election</label>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <div className="widget">
                      <h1 className="widget-title">DaysLeft</h1>

                      <div className="widget-content">
                          <ul className="tag-list days-left">
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="lessthenone" name="days-left" />
                                      <label for="lessthenone"> 1</label>
                              </li>
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="onetotwo" name="days-left" />
                                      <label for="onetotwo">1 - 2</label>
                              </li>

                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="onetofive" name="days-left" />
                                      <label for="onetofive">2 - 5</label>
                              </li>


                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="morethan5" name="days-left" />
                                      <label for="morethan5">5+</label>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <div className="widget">
                      <h1 className="widget-title">PrizeType</h1>

                      <div className="widget-content prize-type-filter">
                          <ul className="tag-list">
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" data-prize-type="money" id="prize-type-money"
                                         name="prize-type" />
                                      <label for="prize-type-money">Money</label>
                              </li>
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" data-prize-type="item" id="prize-type-item"
                                         name="prize-type" />
                                      <label for="prize-type-item">Item</label>
                              </li>

                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" data-prize-type="no-prize" id="prize-type-no-prize"
                                         name="prize-type" />
                                      <label for="prize-type-no-prize">NoPrize</label>
                              </li>

                          </ul>

                          <div className="prize-type-min-max d-table">
                              <input type="text" className="form-control" />
                                  <label for="">To</label>
                                  <input type="text" className="form-control" />
                          </div>

                      </div>
                  </div>

                  <div className="widget">
                      <h1 className="widget-title">Status</h1>

                      <div className="widget-content">
                          <ul className="tag-list">
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="ongoing" name="status" />
                                      <label for="ongoing">ongoing</label>
                              </li>
                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="completed" name="status" />
                                      <label for="completed">Completed</label>
                              </li>

                              <li className="btn-as-radio">
                                  <input type="radio" className="btn-as-radio-input" id="upcoming" name="status" />
                                      <label for="upcoming">Upcoming</label>
                              </li>

                          </ul>
                      </div>
                  </div>

              </div>

          </form>


      </div>
    );
  }
}

Filter.propTypes = {};
Filter.defaultProps = {};

export default Filter;

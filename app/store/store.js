import { observable } from 'mobx'

class Store{

    @observable order       = 'desc';
    @observable pollLists   = [];

    nextPage        = '';
    isReloadPoll    = false;
    showLoader      = true;

    setPollList (poll) {
        this.pollLists = ((this.pollLists.length > 0) && !this.isReloadPoll )
                            ? this.pollLists.concat(poll)
                            : poll;
    }

    setLoader(flag = true) {
        this.showLoader = flag;
    }

    setOrder() {
        var sort = $(".btn-sorting");
        this.order = (sort.hasClass('sort-reverse')) ? 'desc' : 'asc';
        this.setReloadPoll(true);
        this.setLoader();
        this.nextPage = '';
        this.loadPollList();
        sort.toggleClass('sort-reverse');
    }

    setReloadPoll(flag = false){
        this.isReloadPoll = flag;
    }

    loadPollList() {
        var URL = GGLogicEndpoints.pollPublicListAPI + '?order=' + this.order,
            POLL_API_URL = (this.pollLists && !this.isReloadPoll) ? URL + "&page=" + this.nextPage : URL ;

        if(this.nextPage == -1)
            return;

        $.ajax({
            url: POLL_API_URL,
            dataType: 'json',
            type:'GET',
            cache: false,
            success: function(poll) {
                console.log(poll);
                this.setPollList(poll.data.poll);
                if(this.isReloadPoll){
                    this.setReloadPoll();
                }
                if((poll.data.paginate.current != 'undefined') ){
                    if(poll.data.paginate.total > (poll.data.paginate.current * poll.data.paginate.per_page)) {
                        this.nextPage =  poll.data.paginate.current + 1 ;
                    }else{
                        this.setLoader(false);
                        this.nextPage = -1;
                    }
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }.bind(this)
        });
    }
}

export default Store;

ActInsight = {};

ActInsight.FilterArea = function () {
    this.isShowing = true;
    this.visWidth = '400px';
};

ActInsight.FilterArea.prototype = {

    initEventHandlers: function () {
        $(".show-hide").on('click', function () {
            if(this.isShowing) {
                this.collapseFilterArea();
            }
            else
            {
                this.expandFilterArea();
            }
        }.bind(this));
    },

    collapseFilterArea: function () {
        $("#filter-area").animate({width: 0}, 500);
        $("#body-area").animate({"right": "0px"}, 500);
        this.isShowing = false;
    },

    expandFilterArea: function () {
        $("#filter-area").animate({width: this.visWidth}, 500);
        $("#body-area").animate({"right": this.visWidth}, 500);
        this.isShowing = true;
    }
};

var filtArea;
$(function() {
    filtArea = new ActInsight.FilterArea();
    filtArea.initEventHandlers();
});
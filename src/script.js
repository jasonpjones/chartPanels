
ActInsight = {};

ActInsight.FilterArea = function () {
    this.isShowing = false;
    this.visWidth = '400px';
    this.animationSpeed = 100;
    this.$filterArea = $("#filter-area");
    this.$bodyArea = $("#body-area");
    this.$showFilterArrow = $("#show-filter");
    this.$hideFilterArrow = $("#hide-filter");
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
        var _this = this;
        this.$filterArea.animate({width: 0}, this.animationSpeed);
        this.$bodyArea.animate({"right": "0px"}, this.animationSpeed, function() {
            _this.$showFilterArrow.show();
        });
        this.$hideFilterArrow.hide();
        this.isShowing = false;
    },

    expandFilterArea: function () {
        var _this = this;
        this.$filterArea.animate({width: this.visWidth}, this.animationSpeed);
        this.$bodyArea.animate({"right": this.visWidth}, this.animationSpeed);
        this.$showFilterArrow.hide();
        this.$hideFilterArrow.show();
        this.isShowing = true;
    }
};

var filtArea;
$(function() {
    filtArea = new ActInsight.FilterArea();
    filtArea.initEventHandlers();
});
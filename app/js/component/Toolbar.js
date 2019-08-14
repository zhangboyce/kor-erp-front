import $ from 'jquery';

export default class Toolbar {
    constructor(parent) {
        this.parent = parent;
        this.path = 'toolbar.html';
        this.bars = [];
        this.currentBar = {  };
    }

    render() {
        let barNames = this.bars.map(it => it.name);
        this.parent.html(window.nunjucks.render(this.path, { bars: barNames, current: this.currentBar.name }));
        this.mounted();
        return this;
    }

    mounted() {
        let self = this;
        $('.bar a').click(function(e){
           e.preventDefault();
           e.stopPropagation();

           let name = $(this).parent().data('name');
           if (self.currentBar.name === name) return;

           let bar = self.bars.find(it => it.name === name);
           self.switch(bar);
        });

        $('.bar i.close').click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            let name = $(this).parent().data('name');
            self.remove(name);
        });
    }

    add(bar) {
        let index = this.bars.findIndex(it => it.name === bar.name);
        if (index !== -1) {
            if (bar.name !== this.currentBar.name) {
                this.switch(bar);
            }
        } else {
            this.bars.push(bar);
            this.switch(bar);
        }
    }

    remove(barName) {
        let index = this.bars.findIndex(it => it.name === barName);
        if (index === -1) return;
        this.bars.splice(index, 1);
        if (this.currentBar.name === barName) {
            if (this.bars.length === 0) {
                // this.render();
                return;
            }
            if (this.bars.length === index) {
                this.switch(this.bars[index - 1])
            } else {
                this.switch(this.bars[index]);
            }
        } else {
            this.render();
        }
    }

    switch(bar) {
        if (!bar || !bar.name || !bar.segment) return;
        if (this.currentBar.name && this.currentBar.name === bar.name) return;

        let currentBarSegment = this.currentBar.segment || {};
        (currentBarSegment.destroy || function () {}).call(currentBarSegment);

        this.currentBar = bar;
        this.currentBar.segment.render();
        this.render();
    }
}
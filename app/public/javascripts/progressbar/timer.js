//TIMER
window.onload = function onLoad() {
    var line = new ProgressBar.Line('#progress', {
        color: '#f6325a',
        duration: 20000,
        text: {
            value: 20
        },
        step: function(state, bar) {
            var nummer = Math.abs(((20 * bar.value())-20).toFixed(0));
            bar.setText( nummer + " seconden");
            if (bar.value() == 1){
                bar.setText("De tijd is om!")
            }
        }
    });
    line.animate(1);
};
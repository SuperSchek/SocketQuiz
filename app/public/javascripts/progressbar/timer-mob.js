//TIMER
window.onload = function onLoad() {
    var lineMobile = new ProgressBar.Line('#progress-mob', {
        color: '#ffffff',
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
    lineMobile.animate(1);
};
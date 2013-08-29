$(document).ready(function() {
    $('.clipper_1').baron({
        scroller: '.scroller',
        bar: '.scroller__bar',
        barOnCls: 'baron'
    });

    $('.clipper_2 .scroller').jScrollPane();

    var baron3 = $('.clipper_fix').baron({
        scroller: '.scroller',
        bar: '.scroller__bar',
        barOnCls: 'baron'
    }).fix({
        elements: '.header__title',
        outside: 'header__title_state_fixed',
        before: 'header__title_position_top',
        after: 'header__title_position_bottom'
    });

    var baronFix = baron({
        scroller: '.clipper_fix2 .scroller',
        bar: '.scroller__bar',
        barOnCls: 'baron'
    }).fix({
        elements: '.header__title',
        outside: 'header__title_state_fixed',
        before: 'header__title_position_top',
        after: 'header__title_position_bottom'
    });

    $('.clipper_fix2').on('click', function() {
        var height = $(this)[0].style.height;

        if (height) {
            $(this).css({height: ''});
        } else {
            $(this).css({height: '100px'});
        }
        
        setTimeout(function() {
            baronFix.update();
        }, 400);
    });

    $('.clipper_controls').baron({
        scroller: '.scroller',
        bar: '.scroller__bar',
        barOnCls: 'baron'
    }).fix({
        elements: '.header__title',
        outside: 'header__title_state_fixed',
        before: 'header__title_position_top',
        after: 'header__title_position_bottom'
    }).controls({
        track: '.scroller__track-visual',
        forward: '.scroller__up',
        backward: '.scroller__down',
        screen: .5,
        delta: 60
    });

    baronTest = $('.clipper_test').baron({
        scroller: '.scroller',
        bar: '.scroller__bar',
        barOnCls: 'baron'
    }).fix({
        elements: '.header__title',
        outside: 'header__title_state_fixed',
        before: 'header__title_position_top',
        after: 'header__title_position_bottom'
    }).controls({
        track: '.scroller__track-visual',
        forward: '.scroller__up',
        backward: '.scroller__down',
        screen: .5,
        delta: 60
    });

    $('.clipper_test').on('click', function() {
        baronTest.test();
    });

    setTimeout(function() {
        baron3.update();
    }, 300);

    baron({
        scroller: '.clipper_pull .scroller',
        bar: '.scroller__bar',
        barOnCls: 'baron'
    }).fix({
        elements: '.header__title',
        outside: 'header__title_state_fixed',
        before: 'header__title_position_top',
        after: 'header__title_position_bottom'
    }).pull({
        block: '.load',
        elements: [{
            self: '.load__value',
            property: 'width'
        }, {
            self: $('.pull-header'),
            property: 'left'
        }],
        limit: 115,
        callback: function() {
            console.log('asd');
            $('.load').css('background', 'red');
        }
    });

    $('.profit').baron({
        scroller: '.scroller',
        bar: '.scroller__bar',
        barOnCls: 'baron'
    });
});
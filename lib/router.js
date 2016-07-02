FlowRouter.route('/', {
    name: 'home',
    action: function(){
        BlazeLayout.render('mainLayout', { main: 'Home'});
    }
});
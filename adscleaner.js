// Sites to be cleaned
// NOTE: this sites should also be added in mainfest.json
var sites = {
    'wikipedia.org':{
        'remove':
            ['#siteNotice']
    },
    'grooveshark.com':{
        'remove':
            ['.capital-column', '#capital-300x250-placeholder',
             '#capital-300x250'],
        'exec':
            function(){
                $('.small-home-section').css('width', '100%');
            }
    },
    'facebook.com':{
        'exec':
            function(){
                $('#pagelet_ego_pane_w').remove();
                var ego = $('.ego_section');
                ego.each(function(){
                    if($(this).text().indexOf('Anuncios')>=0)
                        $(this).remove();
                });
            }
    },
    'youtube.com':{
        'remove':
            ['#watch-channel-brand-div', '#ad_creative_1']
    },
    'mail.live.com':{
        'remove':
            ['#SkyscraperContent'],
        'exec':
            function(){
                $('#MainContent').css('margin-right', '0px');
            }
    },
    'seriales.us':{
        'remove':
            ['.IL_BASE', '#pub2', '.a728']
    }
};


// Auxiliar function to get current URL
var pathname = $(location).attr('href');
function in_url(url){
    return pathname.indexOf(url)>=0;
};
// Perform the ADS cleaning!
(function(){
    // Check sites to clean ads
    for(site in sites){
        if(in_url(site)){
            // Remove elements from "remove"
            if(sites[site].hasOwnProperty('remove')){
                sites[site]['remove'].forEach(function(item) {
                    $(item).remove();
                });
            }
            // Excecute actions from exec
            if(sites[site].hasOwnProperty('exec')){
                sites[site]['exec']();
            }
        }
    }
    $(window).resize();
    setTimeout(arguments.callee, 10000);
})();

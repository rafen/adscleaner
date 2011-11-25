// Sites to be cleaned
// NOTE: this sites should also be added in mainfest.json
var sites = {
    'wikipedia.org':{
        'remove':
            ['#siteNotice']
    },
    'grooveshark.com':{
        'remove':
            ['#searchCapitalWrapper_300', '#playlistCapitalWrapper_300',
            '#commCapitalWrapper_300', '#theme_page_header',
            '#exploreCapitalWrapper_728', '#exploreCapitalWrapper_300',
            '#artistCapitalWrapper_728', '#artistCapitalWrapper_300',
            '#albumCapitalWrapper_300', '#songCapitalWrapper_728',
            '#songCapitalWrapper_300'],
        'exec':
            function(){
                $('#musicCapitalWrapper_160').parent().remove();
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

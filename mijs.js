var pages = book.getElementsByTagName( "section" );
var resul = function(){
for( var i = 0, len = pages.length; i < len; i++ ) {
    pages[i].style.zIndex = len - i;
    console.log(pages);
};};
resul();
var oldCardID = '';
var oldCardClass = '';

function flipCardByClick(cardid) {
    if (oldCardID != '') {
        document.getElementById(oldCardID).className = oldCardClass;
    }
    
    var thisCard = document.getElementById(cardid);

    oldCardID = cardid;
    oldCardClass = thisCard.className;
    
    thisCard.className = thisCard.className + " hover";
}
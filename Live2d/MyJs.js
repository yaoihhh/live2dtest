
//勃起管理
global_erect_value=0;
max_erect_value=3;
function resetErectValue() {
    global_erect_value=0;
}

function plusErectValue(value) {
    global_erect_value=global_erect_value+value;
}

function isErect() {
    if(global_erect_value>max_erect_value){
        resetCumValue();
        return true;
    }
    return false;
}

//射精管理
global_cum_value=0;
max_cum_value=3;

function resetCumValue() {
    global_cum_value=0;
}

function plusCumValue(value) {
    globle_cum_value=global_cum_value+value;
}

function isCum() {
    if(global_cum_value>max_cum_value){
        resetCumValue();
        return true;
    }
    return false;
}
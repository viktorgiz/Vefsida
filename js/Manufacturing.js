document.addEventListener('DOMContentLoaded', () => {
    let Manuf = document.getElementsByClassName('manufacturing')[0];
    Manuf.addEventListener('mouseover', Funct);
    Manuf.addEventListener('mouseout', Remov);
});
function Funct(){
        let div = document.createElement('div');
        div.style="position:absolute;padding: 0.35rem 20px 0 ;";

        let p1 =document.createElement('p');
        p1.appendChild(document.createTextNode('- Assignments'));
        let p2 =document.createElement('p');
        p2.appendChild(document.createTextNode('- Diary'));

        p1.style="width: 6.5rem; margin:0;color:#fff;font-size:0.8rem;index:1000;";
        p2.style="width: 6.5rem; margin:0;color:#fff;font-size:0.8rem;index:1000;";
        p1.className="manufacturing In_Ut";
        p2.className="manufacturing In_Ut";

        div.appendChild(p1);
        div.appendChild(p2);

        div.className="manufacturing In_Ut";
        

        let append = document.querySelector('#home-section > header > div > div > div:last-child > nav > ul > div > li');
        append.appendChild(div);
}
function Remov(){
    if(document.getElementsByClassName('In_Ut')!=0){
        if(document.getElementsByClassName('In_Ut').onpointerover){

        } else {
            let el = document.getElementsByClassName('In_Ut')[0];
            el.removeChild(el.firstChild);
            el.removeChild(el.firstChild);
            el.parentNode.removeChild(el);
        }
    }
    
}


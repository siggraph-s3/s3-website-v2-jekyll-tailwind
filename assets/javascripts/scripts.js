function navToggle() {
    var btn = document.getElementById('menuBtn');
    var nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}

//Javascript to toggle the menu
document.getElementById('menuBtn').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}
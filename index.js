function openPage(pageName, elmnt, background_color, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "";
    }
    elmnt.style.color = color;
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = background_color;
}
document.getElementById("defaultOpen").click();

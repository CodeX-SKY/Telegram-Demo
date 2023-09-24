// Menu Folders
let flb1 = document.querySelector(".flb1");
let flb2 = document.querySelector(".flb2");
let flb3 = document.querySelector(".flb3");
let flb4 = document.querySelector(".flb4");
let flb5 = document.querySelector(".flb5");

flb1.addEventListener('click' , function(){
    if(flb1.classList.contains("flb-selected")){
        // flb1.classList.remove("flb-selected");
        console.log("Folder - 1  All Ready Selected");
    } else {
        flb1.classList.add("flb-selected");
        console.log("Folder - 1  Selected");
        
        // Remove Other Folders
        flb2.classList.remove("flb-selected");
        flb3.classList.remove("flb-selected");
        flb4.classList.remove("flb-selected");
        flb5.classList.remove("flb-selected");
    }
})
flb2.addEventListener('click' , function(){
    if(flb2.classList.contains("flb-selected")){
        // flb2.classList.remove("flb-selected");
        console.log("Folder - 2  All Ready Selected");
    } else {
        flb2.classList.add("flb-selected");
        console.log("Folder - 2  Selected");
        
        // Remove Other Folders
        flb1.classList.remove("flb-selected");
        flb3.classList.remove("flb-selected");
        flb4.classList.remove("flb-selected");
        flb5.classList.remove("flb-selected");
    }
})
flb3.addEventListener('click' , function(){
    if(flb3.classList.contains("flb-selected")){
        // flb3.classList.remove("flb-selected");
        console.log("Folder - 3  All Ready Selected");
    } else {
        flb3.classList.add("flb-selected");
        console.log("Folder - 3  Selected");
        
        // Remove Other Folders
        flb1.classList.remove("flb-selected");
        flb2.classList.remove("flb-selected");
        flb4.classList.remove("flb-selected");
        flb5.classList.remove("flb-selected");
    }
})
flb4.addEventListener('click' , function(){
    if(flb4.classList.contains("flb-selected")){
        // flb4.classList.remove("flb-selected");
        console.log("Folder - 4  All Ready Selected");
    } else {
        flb4.classList.add("flb-selected");
        console.log("Folder - 4  Selected");
        
        // Remove Other Folders
        flb1.classList.remove("flb-selected");
        flb2.classList.remove("flb-selected");
        flb3.classList.remove("flb-selected");
        flb5.classList.remove("flb-selected");
    }
})
flb5.addEventListener('click' , function(){
    if(flb5.classList.contains("flb-selected")){
        // flb5.classList.remove("flb-selected");
        console.log("Folder - 5  All Ready Selected");
    } else {
        flb5.classList.add("flb-selected");
        console.log("Folder - 5  Selected");
        
        // Remove Other Folders
        flb1.classList.remove("flb-selected");
        flb2.classList.remove("flb-selected");
        flb3.classList.remove("flb-selected");
        flb4.classList.remove("flb-selected");
    }
})
// Menu Folders +


// Show and Hide User 
user_remove = function(){
    usbb.classList.remove("user-big-box-hide")
    usbb.classList.remove("user-big-box-show")
}

let flbmn = document.querySelector(".flb-menu");
let usbb = document.querySelector(".user-big-box");
let ussh = document.querySelector(".user-shadow");

flbmn.addEventListener('click' , function(){
    if(usbb.classList.contains("user-big-box-show")){
        usbb.classList.add("user-big-box-hide")
        usbb.addEventListener('animationend' , user_remove)
    } else {
        usbb.classList.add("user-big-box-show")
        usbb.removeEventListener('animationend' , user_remove)
    }
})
ussh.addEventListener('click' , function(){
    if(usbb.classList.contains("user-big-box-hide")){
        usbb.classList.add("user-big-box-show")
        usbb.removeEventListener('animationend' , user_remove)
    } else {
        usbb.classList.add("user-big-box-hide")
        usbb.addEventListener('animationend' , user_remove)
    }
})


// On Off 
let usmn = document.querySelector(".user-more-night");
let usnf = document.querySelector(".us-on-off");

usmn.addEventListener('click' , function(){
    if(usnf.classList.contains("us-on-off2")){
        usnf.classList.remove("us-on-off2");
        console.log("Night Mode");
    } else {
        usnf.classList.add("us-on-off2")
        console.log("Custom Theme");
    }
})


// Contact click to open chat
let cto5 = document.querySelector(".cto5");
let cto6 = document.querySelector(".cto6");
let cto7 = document.querySelector(".cto7");
let cto8 = document.querySelector(".cto8");


let chat_cto5 = document.querySelector(".chat-cto5");
let chat_cto6 = document.querySelector(".chat-cto6");
let chat_cto7 = document.querySelector(".chat-cto7");
let chat_cto8 = document.querySelector(".chat-cto8");
let select_chat_more = document.querySelector(".select-chat-more");

cto5.addEventListener('click', function(){
    if(chat_cto5.classList.contains("chat-ctos")){
        chat_cto5.classList.add("chat-ctos");
        console.log("All ready selected Contact");
    } else {
        chat_cto5.classList.add("chat-ctos");
        console.log("Selected Contact and Open Chat");
    }

    select_chat_more.classList.add("remove");
    chat_cto6.classList.remove("chat-ctos");
    chat_cto7.classList.remove("chat-ctos");
    chat_cto8.classList.remove("chat-ctos");
})
cto6.addEventListener('click', function(){
    if(chat_cto6.classList.contains("chat-ctos")){
        chat_cto6.classList.add("chat-ctos");
        console.log("All ready selected Contact");
    } else {
        chat_cto6.classList.add("chat-ctos");
        console.log("Selected Contact and Open Chat");
    }

    select_chat_more.classList.add("remove");
    chat_cto5.classList.remove("chat-ctos");
    chat_cto7.classList.remove("chat-ctos");
    chat_cto8.classList.remove("chat-ctos");
})
cto7.addEventListener('click', function(){
    if(chat_cto7.classList.contains("chat-ctos")){
        chat_cto7.classList.add("chat-ctos");
        console.log("All ready selected Contact");
    } else {
        chat_cto7.classList.add("chat-ctos");
        console.log("Selected Contact and Open Chat");
    }

    select_chat_more.classList.add("remove");
    chat_cto5.classList.remove("chat-ctos");
    chat_cto6.classList.remove("chat-ctos");
    chat_cto8.classList.remove("chat-ctos");
})
cto8.addEventListener('click', function(){
    if(chat_cto8.classList.contains("chat-ctos")){
        chat_cto8.classList.add("chat-ctos");
        console.log("All ready selected Contact");
    } else {
        chat_cto8.classList.add("chat-ctos");
        console.log("Selected Contact and Open Chat");
    }

    select_chat_more.classList.add("remove");
    chat_cto5.classList.remove("chat-ctos");
    chat_cto6.classList.remove("chat-ctos");
    chat_cto7.classList.remove("chat-ctos");
})
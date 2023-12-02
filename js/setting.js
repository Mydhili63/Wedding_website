const color = [
    {
        name:'pink',
        code:'#fb839e',
        url:'css/skins/pink.css'
    },
    {
        name:'blue',
        code:'#3e99f4',
        url:'css/skins/blue.css'
    },
    {
        name:'lightgreen',
        code:'#0dcdbd',
        url:'css/skins/lightgreen.css'
    },
    {
        name:'red',
        code:'#cc3b3b',
        url:'css/skins/red.css'
    },
    {
        name:'yellow',
        code:'#ff9801',
        url:'css/skins/yellow.css'
    }
]


$(document).ready(function(){
    setColors();
    function setColors(){
        for(let i=0; i<color.length; i++){
            const span = document.createElement("span");
                span.style.backgroundColor =  color[i].code;
                $(".colors").append(span)
        }
    }
    $(".colors span").click(function(){
        const index = $(this).index();
        $(".alternate-style").attr("href",color[index].url);
    });
    $(".theme-mode").change(function(){
        if($(this).val() == 'light'){
            $("body").removeClass("dark")
        }else{
            $("body").addClass("dark")
        }
    })
    $(".s-toggle-btn").click(function(){
        $(".setting").toggleClass("open");
    })
})
const CONFIG = {
    '北京':{
        schoolList: [
            "北京大学1",
            "北京大学2",
            "北京大学3",
            "北京大学4",
            "北京大学5",
        ]
    },
    '上海': {
        schoolList: [
            "上海大学1",
            "上海大学2",
            "上海大学3",
            "上海大学4",
            "上海大学5",
        ]
    },
    '南京': {
        schoolList: [
            "南京大学1",
            "南京大学2",
            "南京大学3",
            "南京大学4",
            "南京大学5",
        ]
    },
    '杭州': {
        schoolList: [
            "杭州大学1",
            "杭州大学2",
            "杭州大学3",
            "杭州大学4",
            "杭州大学5",
        ]
    }
}
const REGION = document.getElementById('region');
const SCHOOL = document.getElementById('school');


const YESSTU = document.getElementById('yes');
const NOSTU = document.getElementById('no');

const STU = document.getElementsByClassName('yes-stu')[0];
const FIRE = document.getElementsByClassName('no-stu')[0];

function init() {
    for(key in CONFIG) {
        REGION.add(new Option(key));
    }
    for(let i=0;i<CONFIG['北京'].schoolList.length;i++) {
        SCHOOL.add(new Option(CONFIG['北京'].schoolList[i]));
    }
    FIRE.style.display = 'none';
}


YESSTU.addEventListener('click', function(){
    STU.style.display = 'flex';
    FIRE.style.display = 'none';
})


NOSTU.addEventListener('click', function(){
    STU.style.display = 'none';
    FIRE.style.display = 'flex';
})

REGION.addEventListener('change', function() {
    let key = this.options[this.selectedIndex].text;
    
    SCHOOL.options.length = 0;
    for(let i=0;i<CONFIG[key].schoolList.length;i++) {
        SCHOOL.add(new Option(CONFIG[key].schoolList[i]));
    }
})
init();
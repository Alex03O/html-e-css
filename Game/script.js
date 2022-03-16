class Script{
    constructor(menu, navList, navLinks){
        this.menu = document.querySelector(menu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active'

    }
    addClickEnvent(){
        this.menu.addEnventListener('click');
    }
    init(){
        if(this.menu){
            this.addClickEnvent();
        }
        return this;
    }
    const
}
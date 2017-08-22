import Hello from "./components/Hello"

const version = "1.0.1";
const install = function(Vue,config={}){
    if(install.installed)return
    Vue.component("plusSwitch",Hello)
}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue);
}

export default {
    install,
    Hello
}
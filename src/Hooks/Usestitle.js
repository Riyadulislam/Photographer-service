const { useEffect } = require("react")

const Usestitle=title=>{
    useEffect(()=>{
        document.title=title;
    },[title])
};
export default Usestitle;
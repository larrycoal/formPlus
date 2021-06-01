import axios from 'axios'

export const template = async()=>{
   let res =await axios.get("https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates").then((res)=>{
    return res.data.map((data)=>{
        return {
            ...data,
            category:data.category[Math.floor(Math.random()*2)]
        }
    })
   })

    return {
        type:"all_template",
        payload:res
    }
}
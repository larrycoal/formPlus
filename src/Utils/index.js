export const FormField = ({ input, handleChange }) => {
  let inputField = null;
  switch (input.type) {
    case "text":
      inputField = (
        <input
          type="text"
          value={input.value}
          name={input.name}
          placeholder={input.placeholder}
          onChange={(e) => {
            handleChange(e.target);
          }}
        />
      );
      break;
    case "select":
      inputField = (
        <span>
          <label>{input.name}</label>
          <select
            value={input.value}
            name={input.name}
            onChange={(e) => {
              handleChange(e.target);
            }}
          >
            {input.options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </span>
      );
      break;
    default:
      return inputField;
  }
  return inputField;
};
export const TemplateCard = ({ template }, key) => (
  <div key={key}>
    <h2>{template.name}</h2>
    <p>{template.description}</p>
    <a href={template.link}>Use Template</a>
  </div>
);

export const filter = (state,filterInput)=>{   
    let newState = state
    if(filterInput.name==="category"){
         if(filterInput.value === "All"){
             return {
                filteredTemplate:newState,
                 category:filterInput.value
             }
         }else {
            let filtered = newState.filter((state)=>state.category === filterInput.value)
            return {
                filteredTemplate:filtered,
                category:filterInput.value,
                order:"Default",
                date:"Default"
            }
         }
    }
    else if(filterInput.name === "search"){
        let filtered = newState.filter((state)=>state.name.match(filterInput.value))
        return{
            filteredTemplate:filtered
        }
    }else if(filterInput.name === "order"){
        let def = newState
        let ordered = newState.sort((a,b)=>{
            let name1 = a.name.toUpperCase()
          let name2 = b.name.toUpperCase()
          if(name1 < name2){
            return -1
          }
          if(name1 > name2){
            return 1
          }
          return 0
        })
        if(filterInput.value === "Ascending"){
            return {
                filteredTemplate:ordered,
                order:filterInput.value
            }
        }
        else if(filterInput.value === "Descending"){
            return {
                filteredTemplate:ordered.reverse(),
                order:filterInput.value
            }
        }
        if(filterInput.value === "Default"){
            return {
                filteredTemplate:def,
                order:filterInput.value
            }
        }
    }
    else if(filterInput.name === "date"){
        let def = newState
        let ordered = newState.sort((a,b)=>{
            return a.date - b.date
        })
        if(filterInput.value === "Ascending"){
            console.log(ordered)
            return {
                filteredTemplate:ordered,
                date:filterInput.value
            }
        }
        else if(filterInput.value === "Descending"){
            return {
                filteredTemplate:ordered.reverse(),
                date:filterInput.value
            }
        }
        if(filterInput.value === "Default"){
            return {
                filteredTemplate:def,
                date:filterInput.value
            }
        }
    }
}

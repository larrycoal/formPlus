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

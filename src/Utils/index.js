export const FormField = ({ input }) => {
  let inputField = null;
  switch (input.type) {
    case "text":
      inputField = <input type="text" placeholder={input.placeholder} />;
      break;
    case "select":
      inputField = (
        <span>
          <label>{input.name}</label>
          <select>
            {input.options.map((option) => (
              <option value={option}>{option}</option>
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
export const TemplateCard = ({template}) => (
  <div>
    <h2>{template.name}</h2>
    <p>
      {template.description}
    </p>
    <a href={template.link}>
        Use Template
    </a>
  </div>
);

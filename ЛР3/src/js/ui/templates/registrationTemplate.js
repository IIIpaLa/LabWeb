export const createRegistrationTopTemplate = ({
  button: { href, title },
}) => {
  const template = `
    <a href="${href}" class="registration_info_left1">${title}</a>
  `;

  return template;
};

export const createRegistrationBottomTemplate = ({ content }) => {
  const template = `
    <h3 class="registration_info_left2">${content}</h3>
  `;

  return template;
};

export const createRegistrationLeftTemplate = ({ type, title }) => {
    switch (type) {
        case "button":
        return `
            <button class="cta_buttons go_btn">
                ${title}
            </button>
        `;
    default:
      return ``;
  }
};
  
export const registrationTemplate = ({
    registrationTopData,
    registrationlBottomData,
    registrationLeftData,
}) => {
  const registrationTop = createRegistrationTopTemplate(registrationTopData);
  const registrationBottom = createRegistrationBottomTemplate(registrationlBottomData);
  const registrationLeft = createRegistrationLeftTemplate(registrationLeftData);
  const resultTemplate = 
    `
    <div class="registration_info_left">
      ${registrationTop}
      ${registrationBottom}
    </div>
    <div class="registration_info_right">
      ${registrationLeft}
    </div>
    `;
  
    return resultTemplate;
};
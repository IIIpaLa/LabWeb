export const createGirlTemplate = ({ src, alt }) => {
    return `
          <img class="girl_section_img" src="${src}"  alt="${alt}"/>      
      `;
};

export const createGirlTopTemplate = ({
  button: { href, title },
}) => {
  const template = `
    <a href="${href}" class="right_cta">${title}</a>
  `;

  return template;
};

export const createGirlMiddleTemplate = ({ header, content }) => {
  const template = `
    <h2 class="right_header">${header}</h2>
    <p class="container_content">${content}</p>
  `;

  return template;
};

export const createGirlBottomTemplate = ({
  button: { href, title },
}) => {
  const template = `
    <a href="${href}" class="right_cta1">${title}</a>
  `;

  return template;
};
  
export const girlTemplate = ({
  girl,
  girlTopData,
  girlMiddleData,
  girlBottomData,
}) => {
  const girlImage = createGirlTemplate(girl);
  const girlTop = createGirlTopTemplate(girlTopData);
  const girlMiddle = createGirlMiddleTemplate(girlMiddleData);
  const girlBottom = createGirlBottomTemplate(girlBottomData);
  const resultTemplate = 
    `
    <div class="section_girl">
      ${girlImage}
    </div>
    <div class="right_container">
      ${girlTop}
      ${girlMiddle}
      ${girlBottom}
    </div>
    `;
  
    return resultTemplate;
};
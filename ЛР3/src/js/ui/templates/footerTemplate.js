export const createFooterTopTemplate = ({ header }) => {
    const template = `
      <h1>${header}</h1>
    `;
  
    return template;
};

export const createFooterBtnTemplate = ({ type, title }) => {
    switch (type) {
        case "button":
        return `
            <button class="btn">
                ${title}
            </button>
        `;
    default:
      return ``;
  }
};

export const createGPT3Template = ({ src, alt }) => {
    return `
          <img src="${src}" alt="${alt}"/>      
      `;
};

export const createTitleTemplate = ({ content }) => {
    const template = `
        <p class="category-title">${content}</p>
    `;
  
    return template;
};

export const createLinksTopTemplate = ({ title, href }) => {
    const template = `
      <a href="${href}">${title}</a>
    `;
    return template;
};

export const createTextTemplate = ({ content }) => {
    const template = `
        <p class="text_in_footer">${content}</p>
    `;
  
    return template;
};

export const footerTemplate = ({
    step_info,
    btn,
    gpt3,
    adressData,
    categoryTitle1,
    linkData,
    categoryTitle2,
    companyData,
    categoryTitle3,
    contactsData
  }) => {
    const footerTop = createFooterTopTemplate(step_info);
    const footerBtn = createFooterBtnTemplate(btn);
    const gptImage = createGPT3Template(gpt3);

    const adress = adressData
    .map((adressItem) => createTextTemplate(adressItem))
    .join("");

    const title1 = createTitleTemplate(categoryTitle1);

    const links = linkData
    .map((linksItem) => createLinksTopTemplate(linksItem))
    .join("");

    const title2 = createTitleTemplate(categoryTitle2);

    const company = companyData
    .map((companyItem) => createLinksTopTemplate(companyItem))
    .join("");

    const title3= createTitleTemplate(categoryTitle3);

    const contacts = contactsData
    .map((contactsItem) => createTextTemplate(contactsItem))
    .join("");

    const resultTemplate = 
      `
      <div class="step_into">
          ${footerTop}
          ${footerBtn}
        </div>
       <div class="footer_menu">
          <div class="category_links">
            <div class="adress_documentation">
                ${gptImage}
                ${adress}
            </div>
            <div class="links">
                ${title1}
                ${links}
            </div>
            <div class="compay">
                ${title2}
                ${company}
            </div>  
            <div class="contacts">
                ${title3}
                ${contacts}
            </div>          
          </div>
        </div> 
      `;
      return resultTemplate;
  };
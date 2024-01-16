export const createBlogMainTemplate = ({ src, alt, data, content, button: {href, title}}) => {
    const template = `
        <img src="${src}" alt="${alt}" />
        <p class="date1">
           ${data}
        </p>
        <h3 class="name_news1">
          ${content}
        </h3>
        <a href="${href}" class="continue_news">${title}</a>
    `;
    return template;
};

export const createBlogTemplate = ({ src, alt, clas, data, content, button: {href, title}}) => {
    const template = `\
        <div class="${clas}">
          <img src="${src}" alt="${alt}"/>
            <p class="date2">
                ${data}
            </p>
            <h3 class="name_news2">
                ${content}
            </h3>
            <a href="${href}" class="continue_news">${title}</a>
        </div>
    `;
    return template;
  };

  export const blogTemplate = ({blogMain , blog}) =>
  {
      const main = createBlogMainTemplate (blogMain);
      const first = blog.filter((item) => { if ((item.id >= 1) && (item.id <= 2)) return item});
      const second = blog.filter((item) => { if (item.id >= 3) return item});
    
      const firstl = first.map((item) => createBlogTemplate(item)).join("");
      const secondl = second.map((item) => createBlogTemplate(item)).join("");
  
      const resultTemplate = `
        <div class="news">
        <div class="blog-container1">
        <div class="text_news1">
          ${main}
        </div>
        </div>
        <div class="row1">
          <div class="blog-container2">
            ${firstl}
          </div>
        </div>
        <div class="row2">
          <div class="blog-container2">
              ${secondl}
          </div>
        </div>
      </div>
    `
      return resultTemplate;
  };

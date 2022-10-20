class Api {
  constructor() {

  }


  /**
   * Заполняет строковый шаблон template данными из объекта object
   *
   * @author    User Name
   * @version    v.1.0 (dd/mm/yyyy)
   * @param    {object} object
   * @param    {string} template
   * @return    {string}
   */

  get_api_path(object, template) {
    let str = '';
    const regex = /%|%/g;
    template.split('/').forEach(el => {
      if(el.match(regex)){
        el = object[el.replaceAll(`%`, '')]
        if(typeof el === "string"){
          el = el.replaceAll(/\s/g, '%20')
        }
      }
      str += el + '/'
    })
    return str
  }
}


let user =
  {
    id: 20,
    name: 'John Dow',
    role: 'QA',
    salary: 100,
  };

let api_path_templates =
  [
    "/api/items/%id%/%name%",
    "/api/items/%id%/%role%",
    "/api/items/%id%/%salary%",
  ];

let api = new Api();

let api_paths = api_path_templates.map((api_path_template) => {
  return api.get_api_path(user, api_path_template);
});

console.log(JSON.stringify(api_paths));


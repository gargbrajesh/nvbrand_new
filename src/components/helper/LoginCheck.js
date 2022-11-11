import Encodr from "encodr";
import Cookies from 'js-cookie';

const checkToken =  data => {
    const JSON = new Encodr("json");
    var token = Cookies.get('token');
    if(token){
        data = JSON.decode(token);
        return data;
    }
    // else{
    //     window.location.replace(process.env.NEXT_PUBLIC_BASE_URL+'/signin');
    // }
  };

  export { checkToken };
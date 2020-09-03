import Axios from 'axios';
import config from '../../vue.config'


const instance = Axios.create({
    baseURL:config.devServer.proxy,
    timeout: 2000,
    headers: { 
        'Accept':'application/json',
         'Content-Type': 'application/json',}
  });

  export default instance;
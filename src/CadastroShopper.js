import './index.css'
import './reset.css'
import logo from './assets/logo.svg'
const placeholderLogin = 'Insira seu login...'
const placeholderEmail= 'Insira seu email...'
const placeholderSenha = 'Insira sua senha...'

function CadastroShopper() {
    
      return (
     <div className="main">
        <img src={logo} alt='logo' className='imageLogin'/>
        <input type='text' placeholder={placeholderLogin} className='inputLogin'/>
        <input type='text' placeholder={placeholderEmail} className='inputLogin'/>
        <input type='password' placeholder={placeholderSenha} className='inputSenha'/>
        <button className='btn btn_cadastro'>CADASTRAR</button>
        <button className='btn btn_login'>VOLTAR</button>

     </div>
      );
     
      }
     
   export default CadastroShopper;

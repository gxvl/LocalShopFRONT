import './index.css';
import './reset.css'
import logo from './assests/logo.svg'
import google from './assests/google.svg'
import email from './assests/email.png'

function App() {

  return (
    <div className="main">
      <img src={logo} alt='logo' className='image'/>
      <h1 className='title'>LocalShop</h1>
      <h2 className='subtitle'>Como desejar continuar?</h2>
      <button className='btn'><img src={google} alt='google logo' />Continuar com o Google</button>
      <button className='btn'><img src={email} alt='email logo' />Continuar com E-mail</button>
      <p className='subtitle'>Não tem login? Cadastre-se</p>
      <button className='btn'>Deseja cadastrar sua loja?</button>
    </div>
  );
}

export default App;

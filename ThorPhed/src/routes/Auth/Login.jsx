// CSS
import './Auth.css';

// Components
import {Link, useNavigate} from "react-router-dom";
import Message from "../../components/Messages/Message";

// Hooks
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Redux
import {login, reset} from "../../slices/authSlice";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const {loading, error} = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password
    };

    navigate("/")
    dispatch(login(user));
  };

  // clean all suth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  // useEffect(()=>{
  //   dispatch(reset());
  // }, dispatch);

  return (
    <div id="login">
      <h2><span>Green</span>Social</h2>
      <p className="subtitle">Faça o login para voltar a participar.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
        <input type="password" name="senha" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password || ""}/>
        {!loading && <input type="submit" value="Entrar"/>}
        {loading && <input type="submit" value="Aguarde..." disabled/>}
        {error && <Message msg={error} type="error"/>}
      </form>
      <p>Não tem uma conta? <Link to="/register">Clique aqui</Link></p>
    </div>
  )
}

export default Login
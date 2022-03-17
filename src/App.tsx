import './App.css';
import {delay, login, logout} from "./service/api";
import useInput from "./hooks/useInput";
import {useState} from "react";
import {Login, LoginResult} from "./typings/Auth";
import bonobono from './assets/images/bonobono.jpeg'
import nuburi from './assets/images/nuburi.jpeg'
function App() {
    const [id, handleId] = useInput('');
    const [password, handlePassword] = useInput('');
    const [result, setResult] = useState<LoginResult>();

    const delayTime = delay(1000);

    const onLogin = () => {
        delayTime(() => login({id, password})).then((r: any) => {
            setResult(r)
        });
    }

    const onLogout = () => {
        delayTime(() => logout()).then((r: any) => {
            setResult(r)
        });
    }
    return (
        <div className="App">
            {result?.isLogin ?
                <>
                    {result.id} 환영합니다.
                    <button onClick={onLogout}>로그아웃</button>
                    {result?.id.includes('kakaoenterprise.com') ? <img src={bonobono} alt={'보노보노'}/> : <img src={nuburi} alt={'너부리'}/>}

                </>
                :
                <>
                    <input type="text" onChange={handleId} id="id01"/>
                    <input type="password" onChange={handlePassword} id="password01"/>
                    <button onClick={onLogin} id="loginButton">제출</button>
                </>
            }
        </div>

    )
}

export default App;

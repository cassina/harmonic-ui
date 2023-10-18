import {Button} from '@components/notes/Button/Button';
import './header.css';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}
import logo from './assets/harmonic-design-logo.png'
export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="bg-primary-50 storybook-header text-accent-800">

      <div className={'inline-block'}>
        <img width={32} height={32} src={logo} className={'inline-block'}/>
        <h1>Harmonic UI</h1>
      </div>

      <div>
        {user ? (
          <>
            <span className="welcome ">
              Welcomde, <b>{user.name}</b>!
            </span>
            <Button buttonColor={'primary'} buttonStyle={'outline'} onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button buttonColor={'primary'} buttonStyle={'outline'} onClick={onLogin} label="Log in" />
            <Button buttonColor={'primary'} onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

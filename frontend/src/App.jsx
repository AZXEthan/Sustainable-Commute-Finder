import React from 'react';
import { Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import RegisterPage from './RegisterPage';
import LoginForm from './LoginPage';
import MapsPage from './MapsPage';

export default function App() {
  const [selected, setSelected] = React.useState('login');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = (success) => {
    setIsLoggedIn(success);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {!isLoggedIn && <Card className="max-w-full w-[340px] h-[500px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <LoginForm onLogin={handleLogin} />
                <p className="text-center text-small">
                  Need to create an account?{' '}
                  <Link size="sm" onPress={() => setSelected('sign-up')}>
                    Sign up
                  </Link>
                </p>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <RegisterPage onLogin={handleLogin} />
                <p className="text-center text-small">
                  Already have an account?{' '}
                  <Link size="sm" onPress={() => setSelected('login')}>
                    Login
                  </Link>
                </p>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>}
      {isLoggedIn && <MapsPage />}
    </div>
  );
}
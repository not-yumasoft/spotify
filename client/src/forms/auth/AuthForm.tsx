import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { InputComponent } from '../../common/input/InputComponent';
import Box from '@mui/material/Box';
import { ButtonComponent } from '../../common/button/ButtonComponent';
import { useNavigate } from 'react-router-dom';
import styles from './AuthForm.module.scss';
import { authAPI } from '../../services/AuthServices';
import { FC, ChangeEvent } from 'react';
import { AuthType } from '../../constants/enums';

interface IProps {
  type?: AuthType;
}

type Inputs = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  onSubmit: (value: ChangeEvent<HTMLInputElement>) => void;
};

export const AuthForm: FC<IProps> = ({ type }: IProps) => {
  const { control, handleSubmit } = useForm<Inputs>();

  const [signIn, { data: data_in, isSuccess: success_in, isLoading: loading_in }] = authAPI.useSignInMutation();
  const [signUp, { data: data_up, isSuccess: success_up, isLoading: loading_up }] = authAPI.useSignUpMutation();

  const onSubmitLogin: SubmitHandler<Inputs> = ({ onSubmit, ...fields }) => signIn(fields);
  const onSubmitRegistration: SubmitHandler<Inputs> = ({ onSubmit, ...fields }) => signUp(fields);

  const navigate = useNavigate();

  const clickRedirect = () => {
    switch (type) {
      case AuthType.LOGIN:
        return navigate('/registration');
      case AuthType.REGISTRATION:
        return navigate('/login');
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: { xs: '90%', sm: '40%' } }}>
      <form className={styles.form}>
        {type !== AuthType.LOGIN && (
          <>
            <Box sx={{ marginY: '18px', width: '100%' }}>
              <Controller
                name="firstName"
                defaultValue=""
                control={control}
                render={({ field }) => <InputComponent label="First name" {...field} />}
              />
            </Box>
            <Box sx={{ marginY: '18px', width: '100%' }}>
              <Controller
                name="lastName"
                defaultValue=""
                control={control}
                render={({ field }) => <InputComponent label="Last name" {...field} />}
              />
            </Box>
          </>
        )}
        <Box sx={{ marginY: '18px', width: '100%' }}>
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ field }) => <InputComponent label="Email" {...field} />}
          />
        </Box>
        <Box sx={{ marginTop: '18px', marginBottom: '70px', width: '100%' }}>
          <Controller
            name="password"
            defaultValue=""
            control={control}
            render={({ field }) => <InputComponent label="Password" {...field} />}
          />
        </Box>
        <ButtonComponent
          outlined={false}
          width={type === AuthType.LOGIN ? '200px' : '290px'}
          mobileWidth={type === AuthType.LOGIN ? '150px' : '240px'}
          height="44px"
          name={type === AuthType.LOGIN ? 'Login' : 'Registration'}
          onSubmit={handleSubmit(type === AuthType.LOGIN ? onSubmitLogin : onSubmitRegistration)}
        />
      </form>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: { xs: '12px', sm: '18px' },
          marginTop: '20px',
        }}
      >
        <hr className={styles.hr} />
        <span className={styles.text}>{type === AuthType.LOGIN ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}</span>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px', width: { xs: '70%', sm: '300px' } }}>
          <ButtonComponent
            outlined={true}
            width="100%"
            mobileWidth="100%"
            height="44px"
            name={type === AuthType.LOGIN ? 'Registration' : 'Login'}
            black={true}
            onSubmit={clickRedirect}
            loading={loading_in || loading_up}
          />
        </Box>
      </Box>
    </Box>
  );
};

import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'

import { useContext } from 'react'

import { ErrorRespone } from 'src/types/utils.type'
import { schema, Schema } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { LoginAccount } from 'src/apis/auth.api'
import { AppContext } from 'src/contexts/app.context'

import Input from 'src/components/Input'
import Button from 'src/components/Button'
import paths from 'src/constants/paths'
import { useTranslation } from 'react-i18next'
type FormData = Omit<Schema, 'confirm_password'>

const LoginSchema = schema.omit(['confirm_password'])

export default function Login() {
  const { t } = useTranslation()
  const { setIsAuthenticated, setUserProfile } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(LoginSchema)
  })

  const loginAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => LoginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)

    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setUserProfile(data.data.data.user)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorRespone<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-white'>
      <div className='container'>
        <div className='lg:grids-cols-5 grid grid-cols-1 py-12 lg:py-32'>
          <div className='mx-auto'>
            <form onSubmit={onSubmit} className='box-shadow-lg rounded bg-white p-10 lg:min-w-[500px]' noValidate>
              <div className='fs-32 text-center font-bold text-gray-600'>{t('login.title')}</div>
              <Input
                className='mt-8'
                type='email'
                name='email'
                placeholder={t('login.email') || undefined}
                register={register}
                errorMessage={errors.email?.message}
              />
              <Input
                className='relative mt-2'
                type='password'
                name='password'
                placeholder={t('login.password') || undefined}
                autoComplete='on'
                register={register}
                classNameIcon='absolute inset-y-0 right-4 flex items-center'
                iconUrl='/src/assets/Eye.svg'
                errorMessage={errors.password?.message}
              />
              <div className='mt-3'>
                <Button
                  type='submit'
                  className='flex w-full items-center justify-center bg-blue-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-blue-600'
                  isLoading={loginAccountMutation.isLoading}
                  disabled={loginAccountMutation.isLoading}
                >
                  {t('button.signin')}
                </Button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>B???n ch??a c?? t??i kho???n?</span>
                <Link className='ml-1 font-medium text-blue-400 hover:text-blue-600' to={paths.register}>
                  {t('register.title')}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

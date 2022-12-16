import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { omit } from 'lodash'

import { AppContext } from 'src/contexts/app.context'
import { schema, Schema } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorRespone } from 'src/types/utils.type'
import { RegisterAccount } from 'src/apis/auth.api'

import Input from 'src/components/Input'
import Button from 'src/components/Button'
import paths from 'src/constants/paths'
import { useTranslation } from 'react-i18next'

type FormData = Schema

export default function Register() {
  const { t } = useTranslation()
  const { setIsAuthenticated, setUserProfile } = useContext(AppContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => RegisterAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setUserProfile(data.data.data.user)
        setIsAuthenticated(true)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorRespone<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
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
            <form onSubmit={onSubmit} noValidate className='box-shadow-lg rounded bg-white p-10 lg:min-w-[500px]'>
              <div className='fs-32 text-center font-bold text-gray-600'>{t('register.title')}</div>
              <Input
                className='mt-8'
                type='email'
                name='email'
                placeholder={t('register.email') || undefined}
                register={register}
                errorMessage={errors.email?.message}
              />
              <Input
                className='mt-2'
                type='password'
                name='password'
                placeholder={t('register.password') || undefined}
                autoComplete='on'
                register={register}
                errorMessage={errors.password?.message}
              />
              <Input
                className='mt-2'
                type='password'
                name='confirm_password'
                placeholder={t('register.confirmpassword') || undefined}
                autoComplete='on'
                register={register}
                errorMessage={errors.confirm_password?.message}
              />
              <div className='mt-2'>
                <Button
                  className='flex w-full items-center justify-center bg-blue-500 py-4 px-2 text-center text-sm font-medium uppercase text-white  hover:bg-blue-600'
                  isLoading={registerAccountMutation.isLoading}
                  disabled={registerAccountMutation.isLoading}
                >
                  {t('register.title')}
                </Button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>{t('register.existaccount')}</span>
                <Link className='ml-1 text-blue-400 hover:text-blue-600' to={paths.login}>
                  {t('login.title')}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

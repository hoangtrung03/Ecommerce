import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
  classNameIcon?: string
  iconUrl?: string
}

export default function Input({
  type,
  errorMessage,
  placeholder,
  className,
  autoComplete,
  classNameIcon,
  iconUrl,
  name,
  register,
  rules
}: Props) {
  return (
    <>
      <div className={className}>
        <input
          type={type}
          className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register(name, rules)}
        />
        {classNameIcon ? (
          <div className={classNameIcon}>
            <img src={iconUrl} alt='icon' title='icon' />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage}</div>
    </>
  )
}
